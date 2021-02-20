<h1>Projeto timer para a live da Livianormal</h1>

<p>Durante a live necessitamos de um timer para controlar o tempo onde os viwers fosse jogar com a livi, então elaboramos este timer simples para ajudar no processo<p>

<h2>Funções e detalhes</h2>

<p>Para configurar o tempo é necessario ir dentro do index.js e editar esta linha de codigo:<p>

    var yeah = new Countdown({minutes: 0, seconds: 15}, $(".c-container"));

<p>Edite os minutos e os segundos para que o timer tenha o tempo que necessita<p>

<p>Para resetar o timer é só clicar no texto que ele reseta<p>

<p>Para alterar o som adicione o novo som dentro da pasta sons e edite esta linha com o nome do novo arquivo: <p>

    var audio = new Audio('/sons/alert-final.mov');