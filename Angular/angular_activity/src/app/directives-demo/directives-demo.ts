import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.html',
  styleUrls: ['./directives-demo.css']
})
export class DirectivesDemoComponent {
  show = true;

  students = ["Tejshree", "Ram", "Amit", "Priya"];

  toggle() {
    this.show = !this.show;
  }
}