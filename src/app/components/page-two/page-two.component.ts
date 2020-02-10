import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this._router.navigate(['/number-one']);
  }

}
