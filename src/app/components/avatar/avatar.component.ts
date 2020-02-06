import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() namex: string;
  @Input() agex: number;

  constructor() { 
    this.namex = '';
    this.agex = 0;
  }

  ngOnInit() {
  }

}
