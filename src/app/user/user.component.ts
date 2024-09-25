import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Event Manager' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
  ];

  roles = ['User', 'Admin', 'Event Manager']; // List of possible roles
  newUser = { name: '', email: '', role: 'User' }; // For new user form

  // Function to add a new user
  inviteUser(): void {
    if (this.newUser.name && this.newUser.email) {
      this.users.push({ ...this.newUser });
      this.newUser = { name: '', email: '', role: 'User' }; // Reset form
    }
  }

  // Function to update a user's role
  updateRole(user: any, role: string): void {
    user.role = role;
  }

  // Function to remove a user
  removeUser(index: number): void {
    this.users.splice(index, 1);
  }

}
