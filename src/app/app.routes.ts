import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'new-client',
    loadComponent: () => import('./pages/new-client/new-client.page').then( m => m.NewClientPage)
  },
  {
    path: 'new-client/:id',
    loadComponent: () => import('./pages/new-client/new-client.page').then( m => m.NewClientPage)
  },
  {
    path: 'new-attends',
    loadComponent: () => import('./pages/new-attends/new-attends.page').then( m => m.NewAttendsPage)
  },
  {
    path: 'clients',
    loadComponent: () => import('./pages/clients/clients.page').then( m => m.ClientsPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'password-forgotten',
    loadComponent: () => import('./pages/password-forgotten/password-forgotten.page').then( m => m.PasswordForgottenPage)
  },
  {
    path: 'client-attends',
    loadComponent: () => import('./pages/client-attends/client-attends.page').then( m => m.ClientAttendsPage)
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.page').then( m => m.UsersPage)
  },
];
