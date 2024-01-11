import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
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
// import { AuthServiceConfig } from 'angularx-social-login';

// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
//   },
// ]);

// export function provideConfig() {
//   return config;
// }
@NgModule({
  declarations: [
    AppComponent ,
    FlatItemComponent,
    FlatItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    routing,
    AddFlatModule,
    SocialLoginModule
  ],
  providers:[
    {provide: lookupListsToken, useValue:lookupLists},
    {provide: HttpXhrBackend, useClass:MockXHRBackend},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('350410826287-u9evgdtt7tuli5mjfm7ftubqtkmvaqe9.apps.googleusercontent.com') // your client id: old vlaue: 148517665605-jspahbqleats6lv**********2c11b5g7o.apps.googleusercontent.com
          }
        ],
      } as SocialAuthServiceConfig,
    },
    // AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AIzaSyCXNlllbB3qFpBjtOdwUkLyUHMqe2f_VCI