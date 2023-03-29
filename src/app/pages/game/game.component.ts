import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { UserDtoModel } from 'src/app/shared/models/user.dto.model';
import { AnswerDtoModel } from './shared/models/answer.dto.model';
import { AnswerVoModel } from './shared/models/answer.vo.model';
import { GameDtoModel } from './shared/models/game.dto.model';
import { QuestionDtoModel } from './shared/models/question.dto.model';
import { GameService } from '../../shared/services/game.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public question!: QuestionDtoModel;
  public user!: UserDtoModel;
  public game!: GameDtoModel;  
  public answerDtoModel!: AnswerDtoModel;

  public questionForm : FormGroup = new FormGroup({    
    id: new FormControl('')
  });

  constructor(
    private router: Router, 
    private gameService: GameService,
    private tokenStorageService: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {  }

  ngOnInit(): void {
    
    this.user = this.tokenStorageService.getUser();
    
    if(!!this.user) {     
      this.startGame();
    }
    
  }

  private startGame(): void {

    this.gameService.start(this.user.id).subscribe(
      data => {  
        setTimeout(() => { 
          this.game = data; 
          this.provideQuestion();
        }, 0); 
      },
      err => {
        console.log('Error to start game: ' + err.error.message); 
        this.openSnackBar('Error to start game: ' + err.error.message);      
      }
    )

  }

  private provideQuestion(): void {
    
    this.gameService.provideQuestion(this.game.id).subscribe(
      data => {     
        this.question = data;        
      },
      err => { 
        console.log('Error to provide question: ' + err.error.message);
        this.openSnackBar('Error to provide question: ' + err.error.message);        
      }
    );
  }

  public onSubmit(): void {

    if(!this.questionForm.value.id) {
      this.openSnackBar('You must tick one of the options.');
      return;
    }

    let answerVoModel: AnswerVoModel = new AnswerVoModel (
      this.question.id,
      this.question.firstMovie.id,
      this.question.secondMovie.id,
      this.questionForm.value.id
    );
    
    console.log(answerVoModel);

    this.gameService.validateAnswer(answerVoModel).subscribe(
      data => { 
        setTimeout(() => {    
          this.answerDtoModel = data;  
          this.provideQuestion(); 
          this.questionForm.reset(); 
        }, 0);    
      },
      err => {
        console.log('Error to answer question: ' + err.error.message); 
        this.openSnackBar('Error to answer question: ' + err.error.message);       
      }
    )
  }

  public stopGame(): void {
    this.gameService.stop(this.game.id);
    this.router.navigate(['']);
  } 

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'close');
  }

}
