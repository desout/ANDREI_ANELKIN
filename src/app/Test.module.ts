import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {EditorFormComponent} from './editor-form/editor-form.component';
import {ForgotPasswordPageComponent} from './forgot-password-page/forgot-password-page.component';
import {UserInfoTabComponent} from './user-info-tab/user-info-tab.component';
import {EditorInfoUserTabComponent} from './editor-info-user-tab/editor-info-user-tab.component';
import {LoginComponent} from './login/login.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {PopUpModelComponent} from './pop-up-model/pop-up-model.component';
import {UserListComponent} from './userListBundle/user-list/user-list.component';
import {UserListToggleComponent} from './userListBundle/user-list-toogle/user-list-toggle.component';
import {UserListViewComponent} from './userListBundle/user-list-view/user-list-view.component';
import {UserListToggleButtonComponent} from './userListBundle/user-list-toogle-button/user-list-toggle-button.component';
import {UserItemComponent} from './userListBundle/user-item/user-item.component';
import {UsersSearchComponent} from './userListBundle/users-search/users-search.component';
import {EditUsersComponent} from './AdminBundle/edit-users/edit-users.component';
import {EditUserComponent} from './AdminBundle/edit-user/edit-user.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/user-store/effects/users.effects';
import {CurrentUserEffects} from './store/current-user-store/effects/current-user.effects';
import {StoreModule} from '@ngrx/store';
import {dataReducers, sessionReducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {UserService} from './user.service';
import {UserDropDownService} from './user-dropdown.service';
import {JwtInterceptor} from './jwt.interceptor';
import {HttpLoaderFactory} from './app.module';

@NgModule({
  declarations: [
    EditorFormComponent,
    ForgotPasswordPageComponent,
    UserInfoTabComponent,
    EditorInfoUserTabComponent,
    LoginComponent,
    MainHeaderComponent,
    PopUpModelComponent,
    UserListComponent,
    UserListToggleComponent,
    UserListViewComponent,
    UserListToggleButtonComponent,
    UserItemComponent,
    UsersSearchComponent,
    EditUsersComponent,
    EditUserComponent,
    PopUpModelComponent
  ],
  entryComponents: [PopUpModelComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule,
    EffectsModule.forRoot([
      UserEffects,
      CurrentUserEffects
    ]),
    StoreModule.forRoot({}),
    StoreModule.forFeature('Users', dataReducers),
    StoreModule.forFeature('Session', sessionReducers),
    StoreDevtoolsModule.instrument(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    NgbActiveModal,
    EditUsersComponent,
    UserListComponent,
    UserListViewComponent,
    UserService,
    UserDropDownService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: APP_BASE_HREF, useValue : '/' }
  ]
})
export class TestModule {}
