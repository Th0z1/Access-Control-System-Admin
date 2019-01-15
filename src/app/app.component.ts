import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './services/user-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$: Observable<any>
  numbers

  constructor(userService: UserService) { 
    this.users$ = userService.users(1)

    this.numbers = userService.numbers([1,2,3,4,5])
  }

  
  title = 'dashboard';
}
