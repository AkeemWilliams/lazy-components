import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BackendService } from 'src/app/backend.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  @Input() buttonTitle: string = "Submit dis";
  @Output() formSubmitted = new EventEmitter();

    simpleForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        name: new FormControl("", [Validators.required]),
    });

    get name() {
        return this.simpleForm.get("name");
    }

    get email() {
        return this.simpleForm.get("email");
    }

    constructor(private backendService: BackendService) {
    }

    submitForm() {
        if (this.email?.invalid || this.name?.invalid) return;
        this.backendService.submitForm();
        this.formSubmitted.emit();
        alert("Form submitted successfully");
    }

    ngOnInit(): void {
    }

    getNameErrorMessage() {
        if (this.name?.hasError("required")) {
            return "You must enter a value";
        }

        return this.email?.hasError("email") ? "Not a valid email" : "";
    }

    getEmailErrorMessage() {
        if (this.email?.hasError("required")) {
            return "You must enter a value";
        }

        return this.email?.hasError("email") ? "Not a valid email" : "";
    }

}

@NgModule({
  declarations: [
    MyComponentComponent

  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule
  ],bootstrap: [MyComponentComponent]
})
export class LazyModule {

 }