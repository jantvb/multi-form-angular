import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multi-form';

  form!: FormGroup;
  inputToShow: string = 'name';
  showSuccessMsg: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      birthday: [''],
      password: ['']
    })
  }

  inputDataChanged(event: any) {
    const {inputName, value} = event;
    switch (inputName) {
      case 'Name': {
        this.name?.setValue(value);
        this.inputToShow = 'email';
        break;
      }
      case 'Email': {
        this.email?.setValue(value);
        this.inputToShow = 'birthday';
        break;
      }
      case 'Birthday': {
        this.birthday?.setValue(value);
        this.inputToShow = 'password';
        break;
      }
      case 'Password': {
        this.password?.setValue(value);
        this.inputToShow = '';

        this.handleSubmit(
          {
            name: this.name?.value,
            email: this.email?.value,
            birthday: this.birthday?.value,
            password: this.password?.value
          }
        )

        this.showSuccessMsg = true;
        break;
      }
      default:
        break;
    }
  }

  changeInputToShow(event: any) {
    switch (event) {
      case 'Email':
        this.inputToShow = 'name';
        break;
      case 'Birthday':
        this.inputToShow = 'email';
        break;
      case 'Password':
        this.inputToShow = 'birthday';
        break;
      default:
        break;
    }
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get birthday() {
    return this.form.get('birthday');
  }

  get password() {
    return this.form.get('password');
  }

  handleSubmit(data: any) {

  }

}
