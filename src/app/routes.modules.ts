
import {AdminComponent} from './admin/admin.component';
import { EscapeComponent } from './escape/escape.component';



export const AppRoutes = [
    {path:'',component:EscapeComponent,children:[
         {path:'escape',component:AdminComponent}, 
    ]},
  
    
  
];