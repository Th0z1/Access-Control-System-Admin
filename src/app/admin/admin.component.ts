import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pages = [
    {name : 'Orgarnisation', page: 'Orgarnisation'},
    {name : 'Add', page: 'Add'},
    {name : 'Remove', page: 'Remove'}
  ];

  constructor(private router:Router) { 
   
  }

  ngOnInit() {

  }
 
}
