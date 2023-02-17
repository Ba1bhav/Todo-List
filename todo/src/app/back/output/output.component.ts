import { AppModule } from 'src/app/app.module';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})

export class OutputComponent implements OnInit {
  constructor(public api:ApiService){}
  public db=this.api.db;
  ngOnInit(): void {
    console.log(AppModule.test)
    this.api.fetch_todo()
  }
}
