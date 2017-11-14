import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import * as dateformat from 'dateformat';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponent implements OnInit {
  xTitle = 'this is a new title';
  @Output() update = new EventEmitter();

  @Input()
  get title() {
    return this.xTitle;
  }

  set title(value) {
    this.xTitle = value;
    // this.titleChange.emit(this.xTitle);
  }

  showItem = false;
  items = [1, 2, 3, 4];
  conditionExpression = 'A';
  case1Exp = 'A';
  price = 12300.5;
  currentDate = new Date();

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    activeRouter.params.subscribe((param) => {
      console.log('param = ', param);
    });
   }

  ngOnInit() {
    dateformat(new Date(), 'dd/mm/yyyy');
    console.log( dateformat(new Date(), 'dd/mm/yyyy') );
  }

  greeting() {
    this.showItem = !this.showItem;
    this.items.push( this.items.length );
  }

  gotoHome() {
    this.router.navigate(['home']);
  }

}
