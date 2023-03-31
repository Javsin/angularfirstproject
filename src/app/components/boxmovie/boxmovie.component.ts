import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxmovie',
  templateUrl: './boxmovie.component.html',
  styleUrls: ['./boxmovie.component.css']
})
export class BoxmovieComponent implements OnInit {
  @Input() column:string = '';
  constructor() { }

  ngOnInit() {
    
  }

}
