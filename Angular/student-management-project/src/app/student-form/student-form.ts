import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.html'
})
export class StudentFormComponent {

  student = { name: '', age: '', course: '' };

  constructor(private service: StudentService) {}

  addStudent() {
  this.service.addStudent(this.student);
  alert("Student Added!");
  this.student = { name: '', age: '', course: '' };
}
}