import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(private _router: Router) { 

  }

  ngOnInit() {
  }

  goToPage2(){
    console.log('going to page 2');
    this._router.navigate(['/number-two']);
  }

  goToPage3WithParam(){
    console.log('going to page 2');
    let x = 'Wahid';
    this._router.navigate(['/number-three', x]);
  }

}
