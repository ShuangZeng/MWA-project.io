import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private alertService: AlertService) { 

  }

  ngOnInit() {
  }

}
