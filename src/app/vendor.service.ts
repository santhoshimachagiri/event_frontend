import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private baseUrl = 'http://localhost:8091/Vendors';

  constructor(private http: HttpClient) {}

  // Get vendor categories
  getVendorCategories(): string[] {
    return ['Decoration', 'Restaurants', 'Photography'];
  }

  // Get vendors by category
  getVendorsByCategory(category: string): Observable<any[]> {
    const url = `${this.baseUrl}?category=${encodeURIComponent(category)}`; // Adjust the URL as needed
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError<any[]>('getVendorsByCategory', [])) // Handle errors
    );
  }

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); // Log to console
      return of(result as T); // Let the app keep running by returning an empty result
    };
  }
}
