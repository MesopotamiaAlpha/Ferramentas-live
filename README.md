<img src="https://img.shields.io/badge/Processo-Em%20desenvolvimento-red" alt="Badge processo">

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MesopotamiaAlpha/Ferramentas-live)

![Lines of code](https://img.shields.io/tokei/lines/github/MesopotamiaAlpha/Ferramentas-live)

![Twitch Status](https://img.shields.io/twitch/status/livianormal?style=social)

![Website](https://img.shields.io/website?down_color=Red&down_message=Red&up_color=Green&up_message=Site%20online&url=https%3A%2F%2Fprojeto-live-ecaa3.firebaseapp.com%2Findex.html)

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/MesopotamiaAlpha/Ferramentas-live)

<br />
<p align="center">
  <a href="https://www.twitch.tv/livianormal">
    <img src="img/tela de espera.png" alt="Logo" width="854" height="480">
  </a>

  <h3 align="center">Projeto Live</h3>

  <p align="center">
    Projeto sendo desenvolvido para ajudar com algumas overlays!
    <br />
    <br />
    <a href="https://projeto-live-ecaa3.firebaseapp.com/index.html">Conheça a ferramenta</a>
</p>

<details open="open">
  <summary>Conteudo</summary>
  <ol>
    <li>
      <a href="#Sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#Desenvolvido-com">Desenvolvido com</a></li>
      </ul>
    </li>
    <li><a href="#Modo-de-usar">Modo de usar</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#Contato">Contato</a></li>
  </ol>
</details>


## Sobre o projeto

Estas ferramentas estão sendo desenvolvidas para a live da <a target="_parent" type="link" href="https://www.twitch.tv/livianormal">Livianormal</a> e de momentos boa parte dessas ferramentas está buscando suprir as necessidades e melhorias desta live em especifico.</p>
<p>Futuramente vamos melhorar a ferramentas para atender mais pessoas e ajudar com outras necessidades.</p>
<p>Fururamente tambem vamos abrir um canal para sugestões de novas ferramentas, mas de momento vamos aprender a criar novas ferramentas para depois crescer!

### Desenvolvido com

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [CSS](https://www.w3schools.com/css/)
* [Firebase](https://firebase.google.com/?hl=pt-br)
* [Firebase Real Time Database](https://firebase.google.com/docs/database)

## Modo de Usar

<p>Durante a live necessitamos de um timer para controlar o tempo onde os viwers fosse jogar com a livi, então elaboramos este timer simples para ajudar no processo<p>

<h2>Funções e detalhes</h2>

<p>Para configurar o tempo é necessario ir dentro do js/timer.js e editar esta linha de codigo:<p>

    var yeah = new Countdown({minutes: 0, seconds: 15}, $(".c-container"));

<p>Edite os minutos e os segundos para que o timer tenha o tempo que necessita<p>

<p>Para resetar o timer é só clicar no tempo que ele reseta<p>

<p>Para alterar o som adicione o novo som dentro da pasta sons e edite esta linha com o nome do novo arquivo: <p>

    var audio = new Audio('/sons/alert-final.mov');


## Roadmap

Veja a aba [open issues](https://github.com/MesopotamiaAlpha/Ferramentas-live/issues) para conferir a lista de pontos a serem feitos (e problemas conhecidos).


## Contact

Djzefx - [@Discord](258717029027151873) - djzefx@gmail.com

Link do projeto: [https://projeto-live-ecaa3.firebaseapp.com/index.html](https://projeto-live-ecaa3.firebaseapp.com/index.html)