import { HttpResponseModel } from "./httpResponseModel";

export class LoginResponseModel {
    success!: boolean;
    message!: string;
    token!: string;
    expirationIn!: number;
}