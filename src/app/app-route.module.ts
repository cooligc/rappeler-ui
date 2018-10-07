import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { DisplayComponent } from './reminder/display/display.component';
import { SetAlarmComponent } from './reminder/set-alarm/set-alarm.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'prof-setting',component: SettingsComponent},
  {path: 'display',component: DisplayComponent},
  {path: 'set-alarm',component: SetAlarmComponent},
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  declarations: [LoginComponent, ProfileComponent, SettingsComponent, DisplayComponent, SetAlarmComponent]
})
export class AppRouteModule { }
