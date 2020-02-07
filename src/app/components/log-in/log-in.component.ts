import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(public authService: AuthService, private formBuilder: FormBuilder) {}
  public loginWithGoogle(): void {
    this.authService.GoogleAuth();
  }
  public onSubmit(): void {
    this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password);
  }
  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
