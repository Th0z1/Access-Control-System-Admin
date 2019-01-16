import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showFiller = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
campus(){
  this.router.navigate(['/add']);
}
}
