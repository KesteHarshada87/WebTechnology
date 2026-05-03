import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { StudentCardComponent } from './student-card/student-card';
import { LivePreviewComponent } from './live-preview/live-preview';
import { DirectivesDemoComponent } from './directives-demo/directives-demo';
import { ApiUsersComponent } from './api-users/api-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    StudentCardComponent,
    LivePreviewComponent,
    DirectivesDemoComponent,
    ApiUsersComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}