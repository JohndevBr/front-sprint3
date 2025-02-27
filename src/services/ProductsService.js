import { createServer } from 'miragejs'

createServer({
    routes(){
      this.namespace = 'api'
  
      this.get('/products', () => {
        return [
          {
            "sku": 1,
            "image": "assets/c1.webp",
            "name": "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
            "price": "199,90"
          },
          {
            "sku": 2,
            "image": "assets/c2.webp",
            "name": "Camiseta Infantil Manga Curta Super Mario Azul Tam 4 a 10",
            "price": "39,90"
          },
          {
            "sku": 3,
            "image": "assets/c3.webp",
            "name": "Camiseta Infantil Manga Curta Super Mario Branco Tam 4 a 10",
            "price": "49,90"
          },
          {
            "sku": 4,
            "image": "assets/c4.webp",
            "name": "Camiseta Infantil Manga Longa Super Mario Vermelho Tam 4 a 10",
            "price": "49,90"
          },
          {
            "sku": 5,
            "image": "assets/c5.webp",
            "name": "Camiseta Juvenil Manga Curta Mario Bros Cinza",
            "price": "39,90"
          },
          {
            "sku": 6,
            "image": "assets/c6.webp",
            "name": "Camiseta Juvenil Manga Curta Super Mario Azul Tam 10 a 18",
            "price": "39,90"
          },
          {
            "sku": 7,
            "image": "assets/c7.webp",
            "name": "Regata Infantil Mario Bros Branco Tam 4 a 10",
            "price": "29,90"
          },
          {
            "sku": 8,
            "image": "assets/c8.webp",
            "name": "Camiseta Juvenil Manga Curta Super Mario Branco Tam 10 a 18",
            "price": "49,90"
          },
          {
            "sku": 9,
            "image": "assets/c9.webp",
            "name": "Camiseta Infantil Manga Curta Super Star Mario Bros Cinza Mescla Chumbo Tam 4 a 10",
            "price": "39,90"
          },
          {
            "sku": 10,
            "image": "assets/c10.webp",
            "name": "Blusa de Moletom Juvenil com Capuz Mario Bros Cinza Mescla Tam 10 a 16",
            "price": "149,90"
          },
          {
            "sku": 11,
            "image": "assets/c11.webp",
            "name": "Camiseta Infantil Manga Curta Mario Bros Vermelho Tam 4 a 10",
            "price": "49,90"
          },
          {
            "sku": 12,
            "image": "assets/c12.webp",
            "name": "Camiseta Infantil Manga Curta Mário Bros Vermelha Tam 4 a 10",
            "price": "39,90"
          }
        ]
      })
    }
  })