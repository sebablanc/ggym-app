import { ClientModel } from "./clientModel";

export class ClientResponseModel {
    success!: boolean;
    message!: string;
    clients!: ClientModel[];
}