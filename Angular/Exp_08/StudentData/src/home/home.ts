import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListData } from '../Service/list-data';
@Component({
  selector: 'app-home',
  imports: [FormsModule],//FormsModule is used for two way binding (ngModel)
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //One way Binding
  name:String = "Tejshree Karande"
  age:Number=21
  course:String="CSE(AI-ML)"



  path:String="img1.jpg"
  data:any[]=[]
  constructor(private studData:ListData)
  {
     this.data=studData.getData()
  }

  changeImage=()=>{
    if(this.path==="profile1.jpeg")
    {
      this.path="profile2.avif"
    }
    else{
      this.path="profile1.jpeg"
    }
  }
}
