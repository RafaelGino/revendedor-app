import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {

  public produtos = [{nome: "produto 1" }];
  public produtoService: ProdutoService;

  constructor(produtoService: ProdutoService) { 
    this.produtoService = produtoService;
  }

  ngOnInit() {
    //Buscar produtos
  }

  private buscarProdutos(){
    this.produtoService.listarProdutos().subscribe(() => {
      console.log("Produtos carregados com sucesso");
    })
  }


  //Adicionar produto

  //Remover produto

  //Editar produto

  //Listar produtos

  //Buscar produto por id

  //Buscar produto por nome

  //Buscar produto por preço
}
