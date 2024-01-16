import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getAuth, signOut,signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { SuchiPatrikaComponent } from './suchi-patrika/suchi-patrika.component';

@Component({
  selector: 'fw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flat Waala ... !!';
  displayName : string|null ;
  userInfo: User|null;
  loginForm!: FormGroup;
  isLoggedin?: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.displayName=null;
    this.userInfo=null;
  }
  
  ngOnInit(): void{

     this.isLoggedin = false;

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
 
  }

  logOut(): void {
        const auth = getAuth();
          signOut(auth).then(() => {
     this.isLoggedin = false;

          }).catch((error) => {
            // An error happened.
          });
  }

  loginWithGoogle():void{
    
const auth = getAuth();
const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if(credential != null){
     this.isLoggedin = true;

    const token = credential.accessToken;
    // The signed-in user info.
    this.userInfo=result.user;
    console.log(result.user);
    this.displayName = result.user.displayName;
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


  }
  onFlatItemDelete(flatItem:any){}
}
