import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EditorFormComponent} from './editor-form/editor-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { UserInfoTabComponent } from './user-info-tab/user-info-tab.component';
import { EditorInfoUserTabComponent } from './editor-info-user-tab/editor-info-user-tab.component';
import { LoginComponent } from './login/login.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {JwtInterceptor} from './jwt.interceptor';
import {UserService} from './user.service';
import { PopUpModelComponent } from './pop-up-model/pop-up-model.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    EditorFormComponent,
    ForgotPasswordPageComponent,
    UserInfoTabComponent,
    EditorInfoUserTabComponent,
    LoginComponent,
    MainHeaderComponent,
    PopUpModelComponent
  ],
  entryComponents: [PopUpModelComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
