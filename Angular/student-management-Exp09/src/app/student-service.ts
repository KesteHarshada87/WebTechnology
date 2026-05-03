import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { name: 'Shivani', age: 22, course: 'CE' },
    { name: 'Rahul', age: 23, course: 'IT' },
    { name: 'Amit', age: 21, course: 'ME' },
    { name: 'Tejshree', age: 20, course: 'AI & ML' }
  ];

  getStudents() {
    return this.students;
  }
}