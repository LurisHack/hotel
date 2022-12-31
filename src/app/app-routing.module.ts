import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./user/component/welcome/welcome.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome#Login',
    pathMatch: 'full'
  },

  {
    path: 'admin-home',
    redirectTo: 'admin-home/ADMINWELCOMCOMPONENT',
    pathMatch: 'full'
  },
  {
    path: 'admin-home/SETTING',
    redirectTo: 'admin-home/SETTING/settingWelcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
     component: WelcomeComponent
   },

  {
    path: 'admin-home',
    loadChildren: () => import('./admin/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/page/profile/profile.module').then( m => m.ProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
