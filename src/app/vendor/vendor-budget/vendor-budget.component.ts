import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VendorService } from '../../vendor.service';


@Component({
  selector: 'app-vendor-budget',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './vendor-budget.component.html',
  styleUrl: './vendor-budget.component.css'
})
export class VendorBudgetComponent implements OnInit{
parseFloat(arg0: any): number {
throw new Error('Method not implemented.');
}
onCategoryChange() {
throw new Error('Method not implemented.');
}

  vendors: any[] = [];
  totalBudget: number = 0; // Set your total budget
  spentBudget: number = 0; // Amount already spent
selectedCategory: any;
  
  constructor(private vendorService: VendorService, private http: HttpClient) {}

  ngOnInit() {
    // Fetch the vendors when the component initializes
    this.getVendors();
  }

  // Method to fetch vendors
  getVendors() {
    this.vendorService.getVendorCategories().forEach(category => {
      this.vendorService.getVendorsByCategory(category).subscribe((data: any[]) => {
        this.vendors.push(...data); // Combine all vendors into a single array
      });
    });
  }

  // Method to calculate remaining budget
  remainingBudget(): number {
    return this.totalBudget - this.spentBudget;
  }

  // Optionally, you can create a method to add a vendor expense
  addExpense(amount: number) {
    this.spentBudget += amount;
  }
}
