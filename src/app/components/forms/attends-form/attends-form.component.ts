import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AttendModel } from 'src/app/models/AttendModel';

@Component({
  selector: 'app-attends-form',
  templateUrl: './attends-form.component.html',
  styleUrls: ['./attends-form.component.scss'],
})
export class AttendsFormComponent  implements OnInit {
  @Input('errorMessage') error = "";
  @Output('data') sendData: EventEmitter<AttendModel> = new EventEmitter();

  attendForm = this.fb.nonNullable.group({
    document: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  formHandler() {
    const controls = this.attendForm.controls;
    this.sendData.emit({
      dni: parseInt(controls.document.value)
    })
  }

}
