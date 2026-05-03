import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: any[] = [];

  constructor() {
    // 👉 Load data from localStorage
    const data = localStorage.getItem('students');
    this.students = data ? JSON.parse(data) : [];
  }

  getStudents() {
    return this.students;
  }

  addStudent(student: any) {
    this.students.push({ ...student });
    this.saveToLocalStorage();
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.saveToLocalStorage();
  }

  updateStudent(index: number, updated: any) {
    this.students[index] = updated;
    this.saveToLocalStorage();
  }

  // 👉 Save function
  saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }
}