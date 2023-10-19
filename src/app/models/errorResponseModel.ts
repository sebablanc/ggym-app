import { HttpHeaders } from "@angular/common/http";

export interface ErrorResponseModel {
    error: string;
    headers: HttpHeaders;
    message: string;
    name: string;
    ok: boolean;
    status: number;
    statusText: string;
    url: string;
}