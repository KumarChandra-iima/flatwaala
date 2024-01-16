import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { SuchiPatrikaComponent } from './suchi-patrika/suchi-patrika.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlatItemComponent } from './flat-item/flat-item.component';
import { FlatItemListComponent } from './flat-item-list/flat-item-list.component';
import { FavoriteDirective } from './Custom-Directives/favorite.directive';
import { CategoryListPipe } from './CustomPipes/category-list.pipe';
import { FormsModule } from '@angular/forms';
import { lookupListsToken, lookupLists } from './app.providers';
import { MockXHRBackend } from './mock/mock-xhr-backend';
import { routing } from './app.routing';
import { AddFlatModule } from './flat-item-from/add-flat.module';
import { GoogleLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { SuchiVivaranComponent } from './suchi-vivaran/suchi-vivaran.component';
import { SuchiSanshodhanVivaranComponent } from './suchi-sanshodhan-vivaran/suchi-sanshodhan-vivaran.component';
import { MargDarshanComponent } from "./marg-darshan/marg-darshan.component";
// import { AuthServiceConfig } from 'angularx-social-login';

// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
//   },
// ]);



// Initialize Firebase
export const angularFireAuthModule = initializeApp(environment.firebaseConfig);
export const analytics = getAnalytics(angularFireAuthModule);

// export function provideConfig() {
//   return config;
// }
@NgModule({
    declarations: [
        AppComponent,
        FlatItemComponent,
        FlatItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        SuchiPatrikaComponent,
        SuchiVivaranComponent,
        MargDarshanComponent
    ],
    providers: [
        { provide: lookupListsToken, useValue: lookupLists },
        { provide: HttpXhrBackend, useClass: MockXHRBackend },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        routing,
        AddFlatModule,
        SocialLoginModule
    ]
})
export class AppModule { }
// AIzaSyCXNlllbB3qFpBjtOdwUkLyUHMqe2f_VCI