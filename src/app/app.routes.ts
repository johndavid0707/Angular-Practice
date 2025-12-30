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
import { UserDetail } from './user-detail/user-detail';
import { Signal } from './signals/signal/signal';
import { Parent } from './parent/parent';
import { ParentDemo } from './parent-demo/parent-demo';
import { ParentDemo2 } from './parent-demo2/parent-demo2';
import { Linkedsignal } from './linkedsignal/linkedsignal';
import { ParentDemo3 } from './parent-demo3/parent-demo3';
import { TemplateSyntax } from './template-syntax/template-syntax';
import { TemplateSyntax2 } from './template-syntax2/template-syntax2';
import { TemplateSyntax3 } from './template-syntax3/template-syntax3';
import { TemplateSyntax4 } from './template-syntax4/template-syntax4';
import { TemplateSyntax5 } from './template-syntax5/template-syntax5';
import { TemplateDrivenForms } from './template-driven-forms/template-driven-forms';
import { ReactiveForm } from './reactive-form/reactive-form';
import { RegisterForm } from './register-form/register-form';
import { CustomValidators } from './custom-validators/custom-validators';
import { AsyncValidators } from './async-validators/async-validators';
import { UserForm } from './user-form/user-form';
import { CombinedValidatorDemo } from './combined-validator-demo/combined-validator-demo';
import { AdvancedForm } from './advanced-form/advanced-form';
import { FormArray } from '@angular/forms';
import { FormsArray } from './form-array/form-array';

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
     {path:'httpresource', component: UserDetail},
     {path:'signal', component: Signal},
     {path:'parent', component: Parent},
     {path:'parentdemo', component: ParentDemo},
     {path:'parentdemo2', component: ParentDemo2},
     {path:'linkedsignal', component: Linkedsignal},
     {path:'parentdemo3', component: ParentDemo3},
     {path:'template', component: TemplateSyntax},
     {path:'template2', component: TemplateSyntax2},
     {path:'template3', component: TemplateSyntax3},
     {path:'template4', component: TemplateSyntax4},
     {path:'template5', component: TemplateSyntax5},
     {path:'template-forms', component: TemplateDrivenForms},
     {path:'reactive-forms', component: ReactiveForm},
     {path:'register-forms', component: RegisterForm},
     {path:'custom-validators', component: CustomValidators},
     {path:'async-validators', component: AsyncValidators},
     {path:'user-form', component: UserForm},
     {path:'combine-validator', component: CombinedValidatorDemo},
     {path:'advanced-form', component: AdvancedForm},
     {path:'form-array', component: FormsArray},

    {path: '**', redirectTo: ''}
]satisfies Routes;
