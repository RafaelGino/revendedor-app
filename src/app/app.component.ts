import { Component } from '@angular/core';
import { BarraLateralComponent } from "./barra-lateral/barra-lateral.component";

import { RouterOutlet } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BarraLateralComponent, ProdutoComponent]
})
export class AppComponent {
  title = 'revendedor';
}
