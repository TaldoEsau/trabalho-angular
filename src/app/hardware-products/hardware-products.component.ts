// hardware-products.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hardware-products',
  templateUrl: './hardware-products.component.html',
  styleUrls: ['./hardware-products.component.css']
})
export class HardwareProductsComponent {
  produtos = [
    { id: 1, nome: 'Teclado Mecânico', preco: 350, imagem: 'assets/teclado.jpg.webp' },
    { id: 2, nome: 'Monitor 4K', preco: 1200, imagem: 'assets/monitor.jpg.webp' },
    { id: 3, nome: 'Mouse Gamer', preco: 150, imagem: 'assets/mouse.jpg.png' },
    { id: 4, nome: 'Headset', preco: 300, imagem: 'assets/headset.jpg.png' },
    // Adicione mais produtos aqui
  ];

  constructor(private router: Router) {}

  verDetalhes(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}
