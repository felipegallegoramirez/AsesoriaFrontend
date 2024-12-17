import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ATProfesionales } from '../models/atprofesionales';

@Injectable({
  providedIn: 'root'
})
export class AtprofesionalesService {
  private storageKey = 'atProfesionalesData';

  create(item: ATProfesionales): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): ATProfesionales | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: ATProfesionales): void {
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

  getAll(): ATProfesionales[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll() {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/atprofesionales';

  constructor(private http: HttpClient) {}

  createbd(item: ATProfesionales): Observable<ATProfesionales> {
    return this.http.post<ATProfesionales>(this.baseUrl, item);
  }

  readbd(id: number): Observable<ATProfesionales> {
    return this.http.get<ATProfesionales>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: ATProfesionales): Observable<ATProfesionales> {
    return this.http.put<ATProfesionales>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<ATProfesionales[]> {
    return this.http.get<ATProfesionales[]>(this.baseUrl);
  }
}
