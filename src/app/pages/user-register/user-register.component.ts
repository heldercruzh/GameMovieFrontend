import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}

  public userForm : FormGroup = new FormGroup({    
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public onSubmit(): void {
    
    if (this.userForm.valid) {
      this.userService.insert(this.userForm.value).subscribe(
        data => {
          setTimeout(() => { 
            this.tokenStorageService.saveUser(data);  
            this.router.navigate(['']); 
            window.location.reload()
          }, 0);           
        },
        err => {
          console.log('Error register user  : ' + err.error.message); 
          this.openSnackBar('Error register user: ' + err.error.message);            
        }      
      );
    } else {
      console.log('Invalid data.');
    }

  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'close');
  }

}
