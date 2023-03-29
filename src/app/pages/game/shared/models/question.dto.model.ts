import { GameDtoModel } from "./game.dto.model";
import { MovieDtoModel } from "./movie.dto.model";

export interface QuestionDtoModel {

    id: number;
    game: GameDtoModel;
    firstMovie: MovieDtoModel;
    secondMovie: MovieDtoModel;

}