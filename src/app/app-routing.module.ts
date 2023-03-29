import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [  
  
  { 
    path: 'auth', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'user-register', 
    loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterModule) 
  },
  { 
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard] 
  },  
  { 
    path: 'game', 
    loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule),
    canLoad: [AuthGuard]  
  }, 
  { 
    path: 'ranking', 
    loadChildren: () => import('./pages/ranking/ranking.module').then(m => m.RankingModule),
    canLoad: [AuthGuard]  
  },  
  { 
    path: '**', 
    redirectTo: '' 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
