import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public myForm: FormGroup; // our form model
  constructor(private _fb: FormBuilder) { }

ngOnInit() {

}

initStudent() {
  // initialize our items
  return this._fb.group({
      session: ['', Validators.required],
      studentList: ['']
  });
}

addStudent() {
// add students to the list
const control = <FormArray>this.myForm.controls['students'];
control.push(this.initStudent());
}

}
