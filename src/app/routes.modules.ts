
import {AdminComponent} from './admin/admin.component';
import { EscapeComponent } from './escape/escape.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';



export const AppRoutes = [
    
    {
        path:'', 
        component : SignInComponent
    },
    {

        path:'admin', 
        component : AdminComponent
    }
  
    
  
];