
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {
  wellForm: FormGroup;
  wellObj = { name: '', type: '', sourceKey: '' };
  types = ['red', 'green', 'blue'];
  @Output() emitterOutput: EventEmitter<any> = new EventEmitter<any>();
  @Input() newSourceKey: string
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    if (this.newSourceKey) {
      this.wellObj.sourceKey = this.newSourceKey;
    }
  }

  createForm() {
    this.wellForm = this.formBuilder.group({
      nameControl: ['', Validators.required],
      typeControl: new FormControl('', [Validators.required]),
      sourceKeyControl: ['', Validators.required]
    });
  }

  add() {
    if(this.wellForm.valid) {
      this.emitterOutput.emit(this.wellObj);
    } else {
      this.validateAllFormFields(this.wellForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}