import { PlanTypes } from "../enums/plan-types";

export class ClientModel {
    id: number = 0;
    document: number = 0;
    name: string = '';
    lastName: string = '';
    email: string = '';
    phone: string = '';
    plan: PlanTypes = PlanTypes.UNA_X_SEMANA
}