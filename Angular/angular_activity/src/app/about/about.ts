import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>ℹ️ About Page</h2>
    <p>This is a student project built using Angular.</p>
    <p><b>Name:</b> Tejshree Karande</p>
    <p><b>Course:</b> CSE (AI & ML)</p>
    <p>This project shows understanding of Angular fundamentals.</p>
  `
})
export class AboutComponent {}