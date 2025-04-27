import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../common/cards';

@Injectable({
  providedIn: 'root',
})
export class DatacardsService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<Cards> {
    return this.http.get<Cards>('data/datacards.json');
  }
}
