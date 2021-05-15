---
title: Erro de Deploy no Netlify
description: Quando você é iniciante e perde horas por causa de case-sensitive
date: 2021-15-05 12:09:43
category: Estudos
background: "orange" 
thumbnail: assets/img/captura-de-tela-2021-05-15-às-12.10.40.png
image: "assets/img/captura-de-tela-2021-05-15-às-12.10.40.png"
---
Ontem eu resolvi que faria deploy do blog antes do ponto que o curso pede para que seja feito (no final darei o link do curso que estou fazendo).

Eu fazia o deploy porém dava falha por case-sensitive. Passei bem umas três horas mexendo em arquivos errados. Me dei por vencida e fui dormir.

## No dia seguinte...

Eis que ao acordar no dia seguinte, eu pensei: é algum arquivo que eu to chamando errado! Vim correndo para o computador e fui olhar os imports: era em um único arquivo. Eu criei uma pasta Layout, e nesse único arquivo, estava chamando layout. O famoso "mas na minha máquina funciona". No Netlify só deployou após corrigir (server Linux).

## Lição de hoje (e sempre)
Um programador descansado é um programador que pega bugs mais rápido. Não se esqueçam disso e descansem!

## curso do Willian Justen - projeto blog React com Gatsby
[Gatsy: Crie um site PWA com React, GraphQL, Styled Components e CI/CD](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms)

### EOF
Ericabot :)