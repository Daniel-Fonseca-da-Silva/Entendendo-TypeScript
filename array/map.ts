const veiculos = [
  { id: 1, nome: 'El Camino', cor: 'preto', motor: 'v6', ano: 1965 },
  { id: 2, nome: 'Ford Capri', cor: 'laranja', motor: 'v6', ano: 1975 },
  { id: 3, nome: 'Galaxie', cor: 'azul', motor: 'v8', ano: 1969 },
  { id: 4, nome: 'Dodge Dart', cor: 'preto', motor: 'v8', ano: 1985 },
  { id: 5, nome: 'Dodge Le Baron', cor: 'branco', motor: 'v8', ano: 1960 },
  { id: 6, nome: 'Plymouth Barracuda', cor: 'cinza', motor: 'v6', ano: 1963 },
  { id: 7, nome: 'Mercury Cougar', cor: 'preto', motor: 'v6', ano: 1970 },
  { id: 8, nome: 'Mercury Capri RS', cor: 'vermelho', motor: 'v6', ano: 1972 },
  { id: 9, nome: 'Dodge Phoenix ', cor: 'branco', motor: 'v6', ano: 1961 },
  { id: 10, nome: 'Ford Fairlane ZH ', cor: 'marrom', motor: 'v8', ano: 1977 },
  { id: 11, nome: ' Chrysler Valiant CM Regal ', cor: 'cinza', motor: 'v8', ano: 1979 },
  { id: 12, nome: 'Holden VQ Caprice ', cor: 'verde', motor: 'v4', ano: 1990 },
  { id: 13, nome: 'NIO ES8', cor: 'azul', motor: 'eletrico', ano: 2018 },
  { id: 14, nome: 'Nissan Leaf', cor: 'branco', motor: 'eletrico', ano: 2010 },
  { id: 15, nome: 'Tesla Model Y', cor: 'preto', motor: 'eletrico', ano: 2020 },
  { id: 16, nome: 'Tesla Model S', cor: 'preto', motor: 'eletrico', ano: 2012 },
  { id: 17, nome: 'Wuling Hongguang Mini EV', cor: 'marrom', motor: 'eletrico', ano: 2020 },
  { id: 18, nome: 'Toyota Mirai', cor: 'preto', motor: 'hidrogenio', ano: 2015 },
  { id: 19, nome: 'Hyundai Nexo', cor: 'marrom', motor: 'hidrogenio', ano: 2019 },
  { id: 20, nome: 'BMW i Hydrogen NEXT', cor: 'branco', motor: 'hidrogenio', ano: 2021 },
];

let ids = veiculos.map(veiculos => veiculos.id);
console.log(ids);

let anos = veiculos.map(veiculos => veiculos.ano);
console.log(anos);

const numeros = [1, 2, 3, 4, 5];

const duplicacao = numeros.map(x => x + 1);
console.log(duplicacao);

