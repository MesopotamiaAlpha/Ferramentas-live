
//na linha de baixo ele vai criar a coleção com o documento nome
const docRef = firestore.doc("nomes/subs");

//
const outputHeader = document.querySelector("#nomeOutput");

//aquele ele vai pegar o campo dentro do input do html para salvar 
const inputTextField = document.querySelector("#inputNome");


//aqui ele chama a ação do save button no html
const saveButton = document.querySelector("#saveButton");


//função de salvar no banco de dados
saveButton.addEventListener("click", function() {
    const textToSave = inputTextField.value;
    console.log("Eu vou salvar " + textToSave + " no Firestore");
    docRef.set({
        
        //status nome vai ser o nome do campo para registrar no bd
        nickSub: textToSave
    }).then(function (){
        window.alert("Status salvado!");
    }).catch(function  (error) {
        window.alert("aconteceu um erro: ", error);
    });
    })