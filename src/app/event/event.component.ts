import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventCreateComponent } from "../event-create/event-create.component";


@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, EventCreateComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events = [
    {
      name: 'Birthday Party',
      date: '25th September 2024',
      time: '6:00 PM',
      location: 'Sunshine Park',
      cost: 500
    },
    {
      name: 'Wedding',
      date: '1st October 2024',
      time: '4:00 PM',
      location: 'Beachside Resort',
      cost: 10000
    },
    {
      name: 'Corporate Conference',
      date: '15th October 2024',
      time: '9:00 AM',
      location: 'Downtown Convention Center',
      cost: 2500
    }
  ];

  showCreateEventForm = false;


  constructor(private router: Router) {}

  createEvent() {
    // Navigate to the event creation form when the button is clicked
    this.router.navigate(['/event-create']);
    // this.showCreateEventForm = true;
    // this.showCreateEventForm = true;
  }

  addEvent(newEvent: any){
    console.log('New Event:', newEvent);
    this.events.push(newEvent);
    // this.showCreateEventForm = false;
  }
  // Copy of events for filtering
  filteredEvents = [...this.events];
  
  //  // Method to create a new event
  //  createEvent() {
  //   console.log('Redirect to create event page or open a form modal.');
  //   // You can redirect the user to a form page or open a modal to create a new event
  // }

  // Method to update the event
  updateEvent(event: any) {
    console.log('Redirect to update event page or open a form modal for:', event);
    // You can redirect the user to an update page or open a modal to update the event details
  }

  // Method to filter events based on search input
  filterEvents(query: string) {
    query = query.trim().toLowerCase();
    
    if (query) {
      this.filteredEvents = this.events.filter(event => 
        event.name.toLowerCase().includes(query)
      );
    } else {
      this.filteredEvents = [...this.events]; // Reset to original list if no search input
    }
  }


  navigateToNotifications() {
    console.log('Redirect to notifications page.');
      // Implement actual routing logic here
    }
    
  navigateToProfile() {
    console.log('Redirect to profile page.');
      // Implement actual routing logic here
    }


  


}