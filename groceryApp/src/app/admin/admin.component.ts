import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  message = 'Loading...';

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      this.message = data.message;
    });
  }

}
