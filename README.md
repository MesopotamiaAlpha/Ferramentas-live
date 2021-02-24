<h1>Projeto timer para a live da <a href="https://www.twitch.tv/livianormal">Livianormal</a></h1>

<p>Durante a live necessitamos de um timer para controlar o tempo onde os viwers fosse jogar com a livi, então elaboramos este timer simples para ajudar no processo<p>

<h2>Funções e detalhes</h2>

<p>Para configurar o tempo é necessario ir dentro do index.js e editar esta linha de codigo:<p>

    var yeah = new Countdown({minutes: 0, seconds: 15}, $(".c-container"));

<p>Edite os minutos e os segundos para que o timer tenha o tempo que necessita<p>

<p>Para resetar o timer é só clicar no texto que ele reseta<p>

<p>Para alterar o som adicione o novo som dentro da pasta sons e edite esta linha com o nome do novo arquivo: <p>

    var audio = new Audio('/sons/alert-final.mov');

<p>Estas ferramentas estão sendo desenvolvidas para a live da <a target="_parent" type="link" href="https://www.twitch.tv/livianormal">Livianormal</a> e de momentos boa parte dessas ferramentas está buscando suprir as necessidades e melhorias desta live em especifico.</p>
<p>Futuramente vamos melhorar a ferramentas para atender mais pessoas e ajudar com outras necessidades.</p>
<p>Fururamente tambem vamos abrir um canal para sugestões de novas ferramentas, mas de momento vamos aprender a criar novas ferramentas para depois crescer!</p>