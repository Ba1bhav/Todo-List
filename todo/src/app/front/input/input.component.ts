import { AppModule } from 'src/app/app.module';
import { Component } from '@angular/core';
import { FormGroup,FormControlName,FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor(private ApiHandler:AppModule){}
  login=new FormGroup({
    task:new FormControl,
    task_data:new FormControl,
  })
  public id:any;
  logg(){
    this.ApiHandler.api.log(this.login);
  }
  del(id:number){
    this.ApiHandler.api.delete(id);
  }

  
}
