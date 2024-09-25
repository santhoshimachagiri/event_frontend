import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm!: FormGroup;
  @Output() eventCreated = new EventEmitter<any>();
  formSubmitted=false;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      amPm: ['AM', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const formValue = this.eventForm.value;
      const timeString = `${formValue.time} ${formValue.amPm}`;

      // Create the new event object
      const newEvent = {
        name: formValue.name,
        date: formValue.date,
        time: timeString,
        location: formValue.location,
        cost: formValue.budget
        // name: formValue.name,
        // budget: formValue.budget,
        // location: formValue.location,
        // date: formValue.date,
        // time: timeString,
        // cost: formValue.budget // You can adjust how you want to handle cost
      };

      console.log('New Event Created:', newEvent);

      this.eventCreated.emit(newEvent);
      // this.formSubmitted=true;


      // Navigate back to the manage events screen
      this.router.navigate(['/events']);
    }
  }
  // resetForm(){
  //   this.formSubmitted=false;
  //   this.eventForm.reset();
  // }


}
