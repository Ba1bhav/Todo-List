import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from './front/input/input.component';
import { AppComponent } from './app.component';
import { OutputComponent } from './back/output/output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
  ],
  imports: [HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  static test: any="Test Success"; 
  constructor(public api:ApiService){
    
  }
  
}
