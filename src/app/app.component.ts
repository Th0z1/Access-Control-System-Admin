import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [
    {name : 'Orgarnisation', page: 'Orgarnisation'},
    {name : 'Add', page: 'Add'},
    {name : 'Remove', page: 'Remove'}
  ];
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  navigator(page){
    console.log(page.name);
    if(page.name == "jbjhjb"){
      
    }
  }
  

  title = 'dashboard';
}
