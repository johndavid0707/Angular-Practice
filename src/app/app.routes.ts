import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Content } from './content/content';
import { Dashboard } from './dashboard/dashboard';
import { User } from './user/user';
import { UserInfo } from './user-info/user-info';
import { Products } from './products/products';
import { Details } from './details/details';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { authGuard } from '../guard/canActive/auth-guard';
import { deauthGuard } from '../guard/canActive/canDeactive/deauth-guard';
import { EditProfile } from './edit-profile/edit-profile';
import { Admin } from './admin/admin';
import { adminMatchGuard } from '../guard/canActive/canMatch/admin-match-guard';
import { AdminLogin } from './admin-login/admin-login';
import { Api } from './api/api';
import { userResolver } from '../resolver/UserResolver';
import { Error } from './error/error';
import { ReactiveRxjs } from './reactive-rxjs/reactive-rxjs';

export const routes: Routes = [
    
    {path: '', component: Home},

    {path:'about',
       
        loadChildren: () => import('./about/about.routes').then(m => m.default)
    },
    
    {path:'about', component: About,
        children: [
            {path: 'content', component: Content},
            {path: 'dashboard', component: Dashboard},
            {path: '', redirectTo: 'content', pathMatch: 'full'}
        ]
    },
     {path: 'user/:id', component: User},
     {path: 'userinfo', component: UserInfo},
     {path: 'products', component: Products},
     {path: 'details', component: Details},
     
     //Login Route
     {path:'login', component: Login},
     {path:'welcome', component: Welcome , canActivate: [authGuard]},
     {path:'edit', component: EditProfile , canDeactivate: [deauthGuard]},
     {path:'admin', component: Admin , canMatch: [adminMatchGuard]},
     {path:'admin-login', component: AdminLogin},  //canActivate: [blockGuard]
     {path:'api', component: Api, resolve: { user: userResolver }},
     {path:'error', component: Error},
     {path:'reactive', component: ReactiveRxjs},

    {path: '**', redirectTo: ''}
]satisfies Routes;
