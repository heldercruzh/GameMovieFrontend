import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
    ) { }

  public openHome() {
    this.router.navigate(['']);
  }
  
  public openGame() {
    this.router.navigate(['/game']);
  }
  
  public openRanking() {
    this.router.navigate(['/ranking']);
  }
  
  public doLogoff() {
    this.tokenStorageService.saveUser(null); 
    this.router.navigate(['/auth']);
    window.location.reload();
  }

}
