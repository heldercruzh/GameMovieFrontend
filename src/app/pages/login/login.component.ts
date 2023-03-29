import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}

  public loginForm : FormGroup = new FormGroup({    
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public onSubmit(): void {
    
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        data => { 
          setTimeout(() => { 
            this.tokenStorageService.saveUser(data);
            this.router.navigate(['']); 
            window.location.reload()
          }, 0); 
        },
        err => {
          console.log('Error to do login: ' + err.error.message); 
          this.openSnackBar('Error to do login: ' + err.error.message);         
        }
      );
    } else {
      console.log('Invalid data.');
      this.openSnackBar('Invalid data.');
    }

  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'close');
  }

}
