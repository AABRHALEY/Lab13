import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import {StudentComponent} from "./student.component";
import {ProfileComponent} from "./profile.component";
const MY_ROUTES: Routes = [
    
     { path: '', component: HomeComponent },
     {path:'students',component:StudentComponent},
     {path:"students/profile/:id",component:ProfileComponent},
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
