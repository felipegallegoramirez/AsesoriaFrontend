import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Competencias } from '../models/competencias';

@Injectable({
  providedIn: 'root'
})
export class CompetenciasService {
  private storageKey = 'competenciasData';

  create(item: Competencias): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): Competencias | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: Competencias): void {
    const data = this.getAll();
    if (data[index]) {
      data[index] = updatedItem;
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  }

  delete(index: number): void {
    const data = this.getAll();
    if (data[index]) {
      data.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  }

  getAll(): Competencias[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll() {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/Competencias';

  constructor(private http: HttpClient) {}

  createbd(item: Competencias): Observable<Competencias> {
    return this.http.post<Competencias>(this.baseUrl, item);
  }

  readbd(id: number): Observable<Competencias> {
    return this.http.get<Competencias>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: Competencias): Observable<Competencias> {
    return this.http.put<Competencias>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<Competencias[]> {
    return this.http.get<Competencias[]>(this.baseUrl);
  }
}
