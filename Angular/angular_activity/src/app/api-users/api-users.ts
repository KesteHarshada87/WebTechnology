import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-users.html',
  styleUrls: ['./api-users.css']
})
export class ApiUsersComponent implements OnInit {

  users: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          this.loading = false;
        }
      });
  }
}