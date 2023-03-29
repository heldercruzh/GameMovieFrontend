import { UserDtoModel } from "src/app/shared/models/user.dto.model";

export interface GameDtoModel {

    id: number;
    user: UserDtoModel;
    blOpen: boolean;

}