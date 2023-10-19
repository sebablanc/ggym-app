import { AttendModel } from "./AttendModel";

export class AttendResponseModel {
    success!: boolean;
    message!: string;
    attends!: AttendModel[];
}