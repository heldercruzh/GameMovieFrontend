import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RankingDtoModel } from 'src/app/pages/game/shared/models/ranking.dto.model';
import { environment } from '../../../environments/environment';
import { AnswerDtoModel } from '../../pages/game/shared/models/answer.dto.model';
import { AnswerVoModel } from '../../pages/game/shared/models/answer.vo.model';
import { GameDtoModel } from '../../pages/game/shared/models/game.dto.model';
import { QuestionDtoModel } from '../../pages/game/shared/models/question.dto.model';

const headers = new HttpHeaders().append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { 
  }

  public start(id: number): Observable<GameDtoModel> {    
    return this.http.get<GameDtoModel>(environment.apiMovie+'/game/start/'+id, {headers});
  }

  public stop(id: number): Observable<GameDtoModel> {
    return this.http.get<GameDtoModel>(environment.apiMovie+'/game/stop/'+id, {headers});
  }

  public provideQuestion(id: number): Observable<QuestionDtoModel> {
    return this.http.get<QuestionDtoModel>(environment.apiMovie+'/game/provide-question/'+id, {headers});
  }

  public validateAnswer(answerVo: AnswerVoModel): Observable<AnswerDtoModel> {
    return this.http.put<AnswerDtoModel>(environment.apiMovie+'/game/validate-answer', answerVo, {headers});
  }
 
  public ranking(): Observable<RankingDtoModel[]> {    
    return this.http.get<RankingDtoModel[]>(environment.apiMovie+'/game/ranking', {headers});
  }

}
