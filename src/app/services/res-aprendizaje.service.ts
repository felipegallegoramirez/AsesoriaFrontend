import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ResAprendizaje } from '../models/res-aprendizaje';

@Injectable({
  providedIn: 'root'
})
export class ResAprendizajeService {
  private storageKey = 'resAprendizajeData';

  create(item: ResAprendizaje): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): ResAprendizaje | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: ResAprendizaje): void {
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

  getAll(): ResAprendizaje[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll(): void {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/Res-aprendizaje';

  constructor(private http: HttpClient) {}

  createbd(item: ResAprendizaje): Observable<ResAprendizaje> {
    return this.http.post<ResAprendizaje>(this.baseUrl, item);
  }

  readbd(id: number): Observable<ResAprendizaje> {
    return this.http.get<ResAprendizaje>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: ResAprendizaje): Observable<ResAprendizaje> {
    return this.http.put<ResAprendizaje>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<ResAprendizaje[]> {
    return this.http.get<ResAprendizaje[]>(this.baseUrl);
  }
}
