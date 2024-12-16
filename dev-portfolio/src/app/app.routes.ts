import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProjectComponent } from "./project/project.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PlaceholderComponent } from "./placeholder/placeholder.component";

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: '0', component: PlaceholderComponent}    
]