import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { TProfesional } from '../models/tprofesional';

@Injectable({
  providedIn: 'root'
})
export class TProfesionalService {
  private storageKey = 'tProfesionalData';

  create(item: TProfesional): void {
      const data = this.getAll();
      data.push(item);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
  
  read(index: number): TProfesional | null {
      const data = this.getAll();
      return data[index] || null;
  }
  
  update(index: number, updatedItem: TProfesional): void {
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
  
  getAll(): TProfesional[] {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
  }

  deleteAll(): void {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
        this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/t-profesional';

  constructor(private http: HttpClient) {}

  createbd(item: TProfesional): Observable<TProfesional> {
    return this.http.post<TProfesional>(this.baseUrl, item);
  }

  readbd(id: number): Observable<TProfesional> {
    return this.http.get<TProfesional>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: TProfesional): Observable<TProfesional> {
    return this.http.put<TProfesional>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<TProfesional[]> {
    return this.http.get<TProfesional[]>(this.baseUrl);
  }
}
