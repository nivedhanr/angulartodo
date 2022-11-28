import { Component } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {
 userid=""
 id=""
 title=""
 completed=""

 readValues=()=>
 {
  let data:any={"userid":this.userid,"id":this.id,"title":this.title,"completed":this.completed}
  console.log(data)
 }

}
