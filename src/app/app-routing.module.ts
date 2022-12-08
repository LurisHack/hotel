import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {UserHomeComponent} from "./user/component/user-home/user-home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'user-home',
    // loadChildren: () => import('./user-home/user-home.component').then(m => m.UserHomeComponent)
    component: UserHomeComponent
    // loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
