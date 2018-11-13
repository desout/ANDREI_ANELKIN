import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { UserInfoTabComponent } from './user-info-tab/user-info-tab.component';
import { EditorInfoUserTabComponent } from './editor-info-user-tab/editor-info-user-tab.component';
import {AuthGuard} from './guards/auth.guard';
import {UserListComponent} from './userListBundle/user-list/user-list.component';
import {EditUsersComponent} from './AdminBundle/edit-users/edit-users.component';
import {RoleGuard} from './guards/role.guard';
const routes: Routes = [
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/forgotPassword', component: ForgotPasswordPageComponent },
  { path: 'infoTab', component: UserInfoTabComponent, canActivate: [AuthGuard] },
  { path: 'editTab', component: EditorInfoUserTabComponent, canActivate: [AuthGuard] },
  { path: 'listView', component: UserListComponent },
  { path: 'adminTab', component: EditUsersComponent, canActivate: [AuthGuard, RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
