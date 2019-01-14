import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './common/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './common/layouts/admin-layout/admin-layout.component';
import { CanActivateService } from './common/services/can-activate.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // add the paths which can be used before login
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './views/auth-views/login/login.module#LoginModule'
      },
      {
        path: '404',
        loadChildren: './views/auth-views/page-not-found/page-not-found.module#PageNotFoundModule'
      }
    ]
  },
  // add the paths which can be used post login
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [CanActivateService],
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/admin-views/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
