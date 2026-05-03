import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>🏠 Home Page</h2>
    <p>Welcome to the Angular Mini Project.</p>
    <p>This project demonstrates:</p>
    <ul>
      <li>Components</li>
      <li>Data Binding</li>
      <li>Directives</li>
      <li>API Integration</li>
      <li>Routing</li>
    </ul>
  `
})
export class HomeComponent {}