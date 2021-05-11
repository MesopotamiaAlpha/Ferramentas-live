let copiarTexto = () =>{
    const inputTest = "https://projeto-live-ecaa3.firebaseapp.com/timer-app.html";
    navigator.clipboard.writeText(inputTest);
    window.alert("Link da ferramenta copiada, cole no obs.")
};

let copiarTabelaAnne = () =>{
    const inputTest = "https://projeto-live-ecaa3.firebaseapp.com/fila-subs-app-anne.html";
    navigator.clipboard.writeText(inputTest);
    window.alert("Link da ferramenta copiada, cole no obs.")
};

let copiarTabelaLivi = () =>{
    const inputTest = "https://projeto-live-ecaa3.firebaseapp.com/fila-subs-app.html";
    navigator.clipboard.writeText(inputTest);
    window.alert("Link da ferramenta copiada, cole no obs.")
};


/*
var pai = parent.document.tempo;
var exportar = pai.tempo.value;

function setTempo(){
    var min = document.getElementById("minutos").value;
    var seg = document.getElementById("segundos").value;
    console.log(min);
    console.log(seg);
}*/
