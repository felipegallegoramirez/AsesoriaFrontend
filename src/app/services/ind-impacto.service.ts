import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { IndImpacto } from '../models/ind-impacto';

@Injectable({
  providedIn: 'root'
})
export class IndImpactoService {
  private storageKey = 'indImpactoData';

  create(item: IndImpacto): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): IndImpacto | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: IndImpacto): void {
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

  getAll(): IndImpacto[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll(): void {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/Ind-impacto';

  constructor(private http: HttpClient) {}

  createbd(item: IndImpacto): Observable<IndImpacto> {
    return this.http.post<IndImpacto>(this.baseUrl, item);
  }

  readbd(id: number): Observable<IndImpacto> {
    return this.http.get<IndImpacto>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: IndImpacto): Observable<IndImpacto> {
    return this.http.put<IndImpacto>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<IndImpacto[]> {
    return this.http.get<IndImpacto[]>(this.baseUrl);
  }
}
