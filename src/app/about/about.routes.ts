import { Routes } from "@angular/router";
import { About } from "./about";
import { Content } from "../content/content";
import { Dashboard } from "../dashboard/dashboard";


export default [
  {
    path: '',
    component: About,
    children: [
       {path: 'content', component: Content},
            {path: 'dashboard', component: Dashboard},
            {path: '', redirectTo: 'content', pathMatch: 'full'}
    ]
  }
] satisfies Routes;
