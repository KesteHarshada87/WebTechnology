import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  templateUrl: './student-card.html',
  styleUrls: ['./student-card.css']
})
export class StudentCardComponent {
  name = "Tejshree Karande";
  course = "CSE (AI & ML)";
  image = "assets/profile1.jpeg";

changeImage() {
  this.image = "assets/profile2.avif";
}
}