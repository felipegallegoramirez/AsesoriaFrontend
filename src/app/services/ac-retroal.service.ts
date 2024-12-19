import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'
import { AcRetroal } from '../models/ac-retroal';

@Injectable({
  providedIn: 'root'
})
export class AcRetroalService {
  private storageKey = 'acRetroalData';

  create(item: AcRetroal): void {
      const data = this.getAll();
      data.push(item);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
  
  read(index: number): AcRetroal | null {
      const data = this.getAll();
      return data[index] || null;
  }
  
  update(index: number, updatedItem: AcRetroal): void {
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
  
  getAll(): AcRetroal[] {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
  }

  deleteAll() {
    const data = localStorage.getItem(this.storageKey) || [];
    for( let i  = 0 ; i < data?.length; i++){
        this.delete(0)
    }
  }

  private baseUrl = environment.apiUrl + '/Ac_retroal';

  constructor(private http: HttpClient) {}

  createbd(item: AcRetroal): Observable<AcRetroal> {
    return this.http.post<AcRetroal>(this.baseUrl, item);
  }

  readbd(id: number): Observable<AcRetroal> {
    return this.http.get<AcRetroal>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: AcRetroal): Observable<AcRetroal> {
    return this.http.put<AcRetroal>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<AcRetroal[]> {
    return this.http.get<AcRetroal[]>(this.baseUrl);
  }

}
