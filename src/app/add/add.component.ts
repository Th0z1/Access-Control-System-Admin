import { Component, OnInit } from '@angular/core';

export interface Orgs {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  orgs: Orgs[] = [
    {value: 'mlab-0', viewValue: 'Mlab'},
    {value: 'skycribs-1', viewValue: 'Sky Cribs'},
    {value: 'indalo-2', viewValue: 'Indalo'},
    {value: 'netcb-3', viewValue: 'Netcb'},
    {value: 'kele-4', viewValue: 'KELE'},
    {value: 'ciscoedge-5', viewValue: 'Cisco Edge'},
    {value: 'syzygy-6', viewValue: 'Syzygy'},
    {value: 'naci-7', viewValue: 'NACI'},
    {value: 'afrocentric-8', viewValue: 'Afro Centric'},
    {value: 'dataintelect-9', viewValue: 'Data Intelect'},
    {value: 'kreon-10', viewValue: 'Kreon'},
    {value: 'atlisbiology-11', viewValue: 'Atlis Biology'},
    {value: 'africabio-12', viewValue: 'Africa Bio'},
    {value: 'sappi-13', viewValue: 'Sappi'},
    {value: 'bigen-14', viewValue: 'Bigen'},
    {value: 'nipmo-15', viewValue: 'NIPMO'},
    {value: 'sansa-16', viewValue: 'SANSA'},
    {value: 'ird-17', viewValue: 'IRD'},
    {value: 'james127trust-18', viewValue: 'James127Trust'},
    {value: 'sacnasp-19', viewValue: 'SACNASP'},
    {value: 'tmi-20', viewValue: 'TMI'},
    {value: 'cnrs-2', viewValue: 'CNRS'},
    {value: 'vxpharma-2', viewValue: 'VXPHARMA'},
    {value: 'kpr-2', viewValue: 'KPR'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
