import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { AProfesional } from '../models/aprofesional';

@Injectable({
  providedIn: 'root'
})
export class AprofesionalService {
  private storageKey = 'aProfesionalData';

  create(item: AProfesional): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): AProfesional | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: AProfesional): void {
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

  getAll(): AProfesional[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll() {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/AProfesional';

  constructor(private http: HttpClient) {}

  createbd(item: AProfesional): Observable<AProfesional> {
    return this.http.post<AProfesional>(this.baseUrl, item);
  }

  readbd(id: number): Observable<AProfesional> {
    return this.http.get<AProfesional>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: AProfesional): Observable<AProfesional> {
    return this.http.put<AProfesional>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<AProfesional[]> {
    return this.http.get<AProfesional[]>(this.baseUrl);
  }
}
