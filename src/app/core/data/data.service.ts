import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private api_url = 'http://localhost:8080/api';

  public getEntities(endpoint: string, params: any = {}) {
    return this.http.get(`${this.api_url}/${endpoint}`, { params });
  }

  public getEntity(endpoint: string, id: string) {
    return this.http.get(`${this.api_url}/${endpoint}/${id}`);
  }

  public postEntity(endpoint: string, data: any) {
    return this.http.post(`${this.api_url}/${endpoint}`, data);
  }

  public putEntity(endpoint: string, id: string, data: any) {
    return this.http.put(`${this.api_url}/${endpoint}/${id}`, data);
  }

  public deleteEntity(endpoint: string, id: string) {
    return this.http.delete(`${this.api_url}/${endpoint}/${id}`);
  }
}
