
export class AnswerVoModel {

    id: number;
    idFirstMovie: number;
    idSecondMovie: number;
    idChosenMovie: number;

    constructor(
        id: number,
        idFirstMovie: number,
        idSecondMovie: number,
        idChosenMovie: number,
    ) {
        this.id = id;
        this.idFirstMovie = idFirstMovie;
        this.idSecondMovie = idSecondMovie;
        this.idChosenMovie = idChosenMovie;
    }

}