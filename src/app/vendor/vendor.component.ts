import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit{

  vendors: any[] = [];
  category: string = '';

  constructor(private route: ActivatedRoute, private vendorService: VendorService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      console.log(this.category);
      if (this.category) {
        this.vendorService.getVendorsByCategory(this.category).subscribe((data: any[]) => {
          console.log(this.vendors);
        });
      }
    });
  }

}
