
import {AdminComponent} from './admin/admin.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {AddComponent} from './add/add.component';



export const AppRoutes = [
    
    {
        path:'', 
        component : SignInComponent
    },
    {

        path:'admin', 
        component : AdminComponent
    },
    {

        path:'add', 
        component : AddComponent
    }
  
    
  
];