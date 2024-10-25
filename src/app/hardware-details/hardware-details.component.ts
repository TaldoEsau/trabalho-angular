// hardware-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {
  produto: any;

  produtos = [
    { 
      id: 1, 
      nome: 'Teclado Mecânico', 
      descricao: 'Teclado de alta performance, ideal para gamers e profissionais que buscam uma experiência de digitação mais responsiva e precisa. Com switches mecânicos de alta qualidade, oferece um feedback tátil superior, tornando cada tecla pressionada uma experiência satisfatória. Além disso, possui retroiluminação personalizável, permitindo que você escolha entre diversas cores e efeitos, perfeito para ambientes com pouca luz.', 
      preco: 350, 
      imagem: 'assets/teclado.jpg.webp' 
  },
  { 
      id: 2, 
      nome: 'Monitor 4K', 
      descricao: 'Monitor com resolução 4K que proporciona imagens nítidas e detalhadas, ideal para edição de vídeos, design gráfico e jogos. Com uma tela de grandes dimensões, você poderá desfrutar de uma ampla gama de cores e um contraste impressionante. Além disso, conta com conectividade moderna, como HDMI e DisplayPort, para fácil integração com seus dispositivos.', 
      preco: 1200, 
      imagem: 'assets/monitor.jpg.webp' 
  },
  { 
      id: 3, 
      nome: 'Mouse Gamer', 
      descricao: 'Mouse de alta precisão, projetado para oferecer a melhor experiência em jogos. Com sensores avançados que suportam ajustes de DPI, ele garante movimentos rápidos e precisos em qualquer situação. O design ergonômico proporciona conforto durante longas sessões de jogo, e seus botões programáveis permitem personalização para otimizar sua jogabilidade.', 
      preco: 150, 
      imagem: 'assets/mouse.jpg.png' 
  },
  { 
      id: 4, 
      nome: 'Headset', 
      descricao: 'Headset com som estéreo de alta qualidade, oferecendo uma imersão sonora incrível para jogos, filmes e música. Equipado com microfone com cancelamento de ruído, ele garante que sua voz seja ouvida claramente durante chamadas e partidas online. O conforto das almofadas e o design ajustável tornam-o perfeito para longas horas de uso.', 
      preco: 300, 
      imagem: 'assets/headset.jpg.png' 
  }
  
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.produto = this.produtos.find(p => p.id === id);
  }
}
