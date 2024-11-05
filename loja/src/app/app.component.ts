import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'loja';

  documentNumber = '01234567890';

  products: Product[] = [
    {
      _id: 'c633b67e-61fc-4947-b483-42556242afc3',
      title: 'Smartphone XYZ',
      description:
        'Smartphone moderno com design elegante, tela de alta resolução, câmeras avançadas para fotos nítidas, desempenho rápido com processador potente, longa duração de bateria e tecnologia 5G.',
      price: 1899.99,
      qty: 100,
      image: 'smartphone.jpg',
    },
    {
      _id: 'fe0cd828-04e2-4c9d-81d4-b5a3a9950fba',
      title: 'Laptop',
      description:
        'Laptop poderoso com design leve e elegante, tela nítida de alta resolução, processador rápido para multitarefas, ampla capacidade de armazenamento, bateria de longa duração e conectividade avançada.',
      price: 5599.9,
      qty: 20,
      image: 'laptop.jpg',
    },
    {
      _id: '9bfc6ea9-e6a1-4da3-bd70-483cce3bd2e5',
      title: 'Console',
      description:
        'Console de última geração com gráficos realistas em 4K, desempenho rápido, armazenamento expansível, controle ergonômico, suporte a jogos online e integração com serviços de streaming.',
      price: 3899.99,
      qty: 15,
      image: 'console.jpg',
    },
    {
      _id: 'ba3fdc40-8cca-41e3-8ec1-b42ced9a564b',
      title: 'Smartphone XPTO',
      description:
        'Smartphone versátil com tela ampla e vibrante, câmeras de alta qualidade para capturas detalhadas, desempenho ágil, armazenamento generoso, bateria duradoura e carregamento rápido.',
      price: 4499.99,
      qty: 100,
      image: 'smartphones.jpg',
    },
    {
      _id: 'e5a300b6-f044-4a72-a6c4-ff987c5aed0e',
      title: 'Smartwatch',
      description:
        'Smartwatch moderno com design sofisticado, tela sensível ao toque, monitoramento de saúde e atividades, notificações em tempo real, GPS integrado, longa duração de bateria e resistência à água.',
      price: 899.99,
      qty: 100,
      image: 'smartwatch.jpg',
    },
  ];

  obs = new Observable((observer) => {
    // console.log('Início');
    observer.next(1);
    setTimeout(() => {
      observer.next(3);
    }, 1000);
    setTimeout(() => {
      observer.next(4);
    }, 2000);
    setTimeout(() => {
      observer.next(2);
    }, 500);
    setTimeout(() => {
      observer.error('Houve um erro');
    }, 100);
  });

  constructor() {
    this.obs.subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Terminei');
      },
    });
  }
}
