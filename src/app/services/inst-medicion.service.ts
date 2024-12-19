import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { InstMedicion } from '../models/inst-medicion';

@Injectable({
  providedIn: 'root'
})
export class InstMedicionService {
  private storageKey = 'instMedicionData';

  create(item: InstMedicion): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): InstMedicion | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: InstMedicion): void {
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

  getAll(): InstMedicion[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll(): void {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/Inst-medicion';

  constructor(private http: HttpClient) {}

  createbd(item: InstMedicion): Observable<InstMedicion> {
    return this.http.post<InstMedicion>(this.baseUrl, item);
  }

  readbd(id: number): Observable<InstMedicion> {
    return this.http.get<InstMedicion>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: InstMedicion): Observable<InstMedicion> {
    return this.http.put<InstMedicion>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<InstMedicion[]> {
    return this.http.get<InstMedicion[]>(this.baseUrl);
  }
}
