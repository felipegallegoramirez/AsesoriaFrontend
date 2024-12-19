import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { VAgregado } from '../models/vagregado';

@Injectable({
  providedIn: 'root'
})
export class VagregadoService {
  private storageKey = 'vAgregadoData';

  create(item: VAgregado): void {
    const data = this.getAll();
    data.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  read(index: number): VAgregado | null {
    const data = this.getAll();
    return data[index] || null;
  }

  update(index: number, updatedItem: VAgregado): void {
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

  getAll(): VAgregado[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  deleteAll(): void {
    const data = localStorage.getItem(this.storageKey) || [];
    for (let i = 0; i < data?.length; i++) {
      this.delete(0);
    }
  }

  private baseUrl = environment.apiUrl + '/VAgregadoes';

  constructor(private http: HttpClient) {}

  createbd(item: VAgregado): Observable<VAgregado> {
    return this.http.post<VAgregado>(this.baseUrl, item);
  }

  readbd(id: number): Observable<VAgregado> {
    return this.http.get<VAgregado>(`${this.baseUrl}/${id}`);
  }

  updatebd(id: number, updatedItem: VAgregado): Observable<VAgregado> {
    return this.http.put<VAgregado>(`${this.baseUrl}/${id}`, updatedItem);
  }

  deletebd(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllbd(): Observable<VAgregado[]> {
    return this.http.get<VAgregado[]>(this.baseUrl);
  }
}
