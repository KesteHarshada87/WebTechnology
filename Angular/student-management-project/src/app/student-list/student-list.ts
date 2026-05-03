import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student-service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent implements OnInit {

  students: any[] = [];
  searchText = "";
  editIndex: number | null = null;
  editStudent = { name: '', age: '', course: '' };

  constructor(private service: StudentService) {}

  ngOnInit() {
    this.students = this.service.getStudents();
  }

  deleteStudent(i: number) {
    if (confirm("Are you sure to delete?")) {
      this.service.deleteStudent(i);
    }
  }

  startEdit(i: number) {
    this.editIndex = i;
    this.editStudent = { ...this.students[i] };
  }

  updateStudent() {
    if (this.editIndex !== null) {
      this.service.updateStudent(this.editIndex, this.editStudent);
      this.editIndex = null;
    }
  }
}