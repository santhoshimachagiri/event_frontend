import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestNotificationService {

  private guests = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' }
  ];

  constructor() {}

  // Fetch guests (dummy data)
  getGuests(): Observable<any[]> {
    return of(this.guests); // Return the dummy data wrapped in an observable
  }

  // Dummy method to send notification
  sendNotification(guestId: string, message: string): Observable<any> {
    console.log(`Sending notification to guest ID: ${guestId}, Message: ${message}`);
    return of({ success: true, message: 'Notification sent successfully!' });
  }

}
