import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'https://run.mocky.io/v3/e04fc220-cd60-459a-88aa-80cbfaaffa13';

  constructor(private http: HttpClient) { }

  getCertifications(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}