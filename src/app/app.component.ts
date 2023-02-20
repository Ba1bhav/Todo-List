import { Component, ElementRef, ViewChild,OnChanges,OnInit, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  title = 'Tasks';
  @ViewChild('inputd')
  inputd!: ElementRef;
  veganValue = false;
  callme(){
    console.log('Reffrence Data from : #inputd',this.inputd?.nativeElement.value)
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  constructor(){console.log(console.log('app@constructor'))}
  ngOnInit(): void {
    console.log('OnInit()@App')
  }
  ngDoCheck(){
    console.log('Testes do app')
  }
  public response:any=sessionStorage.getItem('response');
  compon(value:any){
    this.response=value;
    sessionStorage.setItem('response',value)
    
  }

}
