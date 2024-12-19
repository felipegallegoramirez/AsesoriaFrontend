import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { PActuacion } from '../models/pactuacion';

@Injectable({
  providedIn: 'root'
})
export class PactuacionService {
  private storageKey = 'pActuacionData';

  create(item: PActuacion): void {
      const data = this.getAll();
      data.push(item);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
  
  read(index: number): PActuacion | null {
      const data = this.getAll();
      return data[index] || null;
  }
  
  update(index: number, updatedItem: PActuacion): void {
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
  
  getAll(): PActuacion[] {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
  }

  deleteAll() {
    const data = localStorage.getItem(this.storageKey) || [];
    for( let i  = 0 ; i < data?.length; i++){
        this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/PActuacion';

  constructor(private http: HttpClient) {}

  createbd(item: PActuacion): Observable<PActuacion> {
    return this.http.post<PActuacion>(this.baseUrl, item);
  }

  readbd(id: number): Observable<PActuacion> {
    return this.http.get<PActuacion>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: PActuacion): Observable<PActuacion> {
    return this.http.put<PActuacion>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<PActuacion[]> {
    return this.http.get<PActuacion[]>(this.baseUrl);
  }
}
