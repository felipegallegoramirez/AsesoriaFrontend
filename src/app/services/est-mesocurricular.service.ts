import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { EstMesocurricular } from '../models/est-mesocurricular';

@Injectable({
  providedIn: 'root'
})
export class EstMesocurricularService {
  private storageKey = 'estMesocurricularData';

  create(item: EstMesocurricular): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): EstMesocurricular | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: EstMesocurricular): void {
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

  getAll(): EstMesocurricular[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll() {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/Est_mesocurricular';

  constructor(private http: HttpClient) {}

  createbd(item: EstMesocurricular): Observable<EstMesocurricular> {
    return this.http.post<EstMesocurricular>(this.baseUrl, item);
  }

  readbd(id: number): Observable<EstMesocurricular> {
    return this.http.get<EstMesocurricular>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: EstMesocurricular): Observable<EstMesocurricular> {
    return this.http.put<EstMesocurricular>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<EstMesocurricular[]> {
    return this.http.get<EstMesocurricular[]>(this.baseUrl);
  }
}
