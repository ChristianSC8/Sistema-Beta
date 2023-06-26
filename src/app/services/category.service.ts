import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}

  getcategory(): Observable<CategoryModel[]>{
    return this.httpClient.get<CategoryModel[]>('http://localhost:8090/categoria').pipe(map(res => res));
  }

  createcategory(category: CategoryModel): Observable<CategoryModel> {
    return this.httpClient.post<CategoryModel>('http://localhost:8090/categoria', category);
  }

  updatecategory(category: CategoryModel): Observable<CategoryModel> {
    const url = `http://localhost:8090/categoria/${category.id}`;
    return this.httpClient.put<CategoryModel>(url, category);
  }
  getcategoryById(id: number): Observable<CategoryModel> {
    const url = `http://localhost:8090/categoria/${id}`;
    return this.httpClient.get<CategoryModel>(url);
  }

  deletecategory(id: number): Observable<any> {
    const url = `http://localhost:8090/categoria/${id}`;
    return this.httpClient.delete(url);
  }
}
