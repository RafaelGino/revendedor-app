import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<Array<Produto>> {
    return this.http.get<Array<Produto>>('https://localhost:7288/produtos');
  }
}
