import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GameService } from 'src/app/shared/services/game.service';
import { RankingDtoModel } from '../game/shared/models/ranking.dto.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
  
  public users: RankingDtoModel[] = [];

  constructor(   
    private gameService: GameService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this.gameService.ranking().subscribe(
      data => {           
          this.users = data;       
      },
      err => {        
        console.log('Error to find values: ' + err.error.message); 
        this.openSnackBar('Error to find values: ' + err.error.message);
        this.users = [];
      }
    );

  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'close');
  }
  
}
