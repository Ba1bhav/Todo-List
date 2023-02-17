import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){}
  data: any;
  db: any = [];
  keys_delete=new Set()
  data_keys: any;
  fetch_todo() {
    this.http.get('https://angular-5d62c-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json')
    .subscribe((response) => {
      this.data = response;
      this.data_keys = Object.keys(response);
      this.db.splice(0,this.db.length)
      for (let i of this.data_keys) {
        this.db.push(this.data[i]);
      }
    })
  }    

  delete(data:any){
    this.http.delete('https://angular-5d62c-default-rtdb.asia-southeast1.firebasedatabase.app/todo/'+this.data_keys[data+1]+'.json').subscribe(()=>{
      this.fetch_todo(); 
    console.log('Deleted '+this.data_keys[data-1])})
  }
  
  log(login:any){
    let data=login.value;
    this.http.post('https://angular-5d62c-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json',data).subscribe(succ=>this.fetch_todo() ,issue=>{console.log('Cought Error From Request '+issue)})
    
  }

  
}
