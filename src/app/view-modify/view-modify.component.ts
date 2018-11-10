import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-modify',
  templateUrl: './view-modify.component.html',
  styleUrls: ['./view-modify.component.css']
})
export class ViewModifyComponent implements OnInit {
  a=new Date();
  b=''
  dd='';
  mm='';

  constructor() { 
    if(this.a.getMonth()/10<1){
      this.mm='-0'+this.a.getMonth()
    }
    else{
      this.mm='-'+this.a.getMonth()
    }
    if(this.a.getDate()/10<1)
    {
      this.dd='-0'+this.a.getDate()
    }
    else{
      this.dd='-'+this.a.getDate()
    }
    
      this.b=this.a.getFullYear()+this.mm+this.dd;

    
    console.log(this.b)
  }

  ngOnInit() {
  }

}
