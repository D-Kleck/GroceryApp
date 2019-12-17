import { Component, OnInit } from '@angular/core';
import { GroceryListService} from '../grocery-list.service';

interface myData {
  obj: Object
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  records = {};

  constructor(private myFirstService: GroceryListService) { }

  ngOnInit() {
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj;
    });
  }

}
