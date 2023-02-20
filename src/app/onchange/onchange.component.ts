import { Component,OnInit,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.css']
})
export class OnchangeComponent implements OnInit {
  @Input() vegan: boolean | undefined;
    constructor() { console.log('change constructor')}
    ngOnChanges(){
      console.log('ngOnchanges Called')
    }
  ngOnInit(): void {
    console.log('onchange init')
    }
    ngDoCheck(){
      console.log('onchange @ docheck')
    }
  }