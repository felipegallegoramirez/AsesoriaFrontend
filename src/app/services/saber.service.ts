import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Saber } from '../models/saber';

@Injectable({
  providedIn: 'root'
})
export class SaberService {
  private storageKey = 'saberData';

  create(item: Saber): void {
      const data = this.getAll();
      data.push(item);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
  
  read(index: number): Saber | null {
      const data = this.getAll();
      return data[index] || null;
  }
  
  update(index: number, updatedItem: Saber): void {
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
  
  getAll(): Saber[] {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
  }

  deleteAll(): void {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
        this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/saber';

  constructor(private http: HttpClient) {}

  createbd(item: Saber): Observable<Saber> {
    return this.http.post<Saber>(this.baseUrl, item);
  }

  readbd(id: number): Observable<Saber> {
    return this.http.get<Saber>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: Saber): Observable<Saber> {
    return this.http.put<Saber>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<Saber[]> {
    return this.http.get<Saber[]>(this.baseUrl);
  }
}
