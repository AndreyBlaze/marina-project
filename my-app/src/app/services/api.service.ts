import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  sendRequest(data: {phone: string, email: string, name: string}) {
    return this.http.post<{state: boolean}>('http://localhost:3000/send-request', data);
  }

  setEducationTariff(data: {phone: string, email: string, name: string, tariff: string}) {
    return this.http.post<{state: boolean}>('http://localhost:3000/send-tariff', data);
  }
}
