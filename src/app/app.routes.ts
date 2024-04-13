import { Routes } from '@angular/router';
import { SpringComponent } from './pages/spring/spring.component';
import { SummerComponent } from './pages/summer/summer.component';
import { AutumnComponent } from './pages/autumn/autumn.component';
import { WinterComponent } from './pages/winter/winter.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'spring' , component:SpringComponent},
    {path:'summer' , component:SummerComponent},
    {path:'autumn' , component:AutumnComponent},
    {path:'winter' , component:WinterComponent},
    {path:'home' , component:HomeComponent},
    {path:''  , redirectTo:"home", pathMatch:'full'}

];
