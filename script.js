//criar as variáveis chamando pelo Id delas no html

const calcular = document.getElementById('calcular');



function calculoIMC (){
    //alert ('teste click');
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){ //se nome for diferente de vazio
        
        const valorIMC = (peso/ (altura*altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }
        else if (valorIMC < 25){
            classificacao = 'no peso ideal';
        }
        else if (valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }
        else if (valorIMC < 35){
            classificacao = 'em obesidade grau 1';
        }
        else if (valorIMC < 40){
            classificacao = 'em obesidade grau 2';
        }
        else{
            classificacao = 'em obesidade grau 3';
        }

        resultado.textContent = `${nome}, seu IMC é: ${valorIMC} e você está ${classificacao}.`;
    } 
    else         
        resultado.textContent = 'Preencha todos os campos!';   
  
}

calcular.addEventListener('click', calculoIMC) //no 'calcular' ele está adicionando um evento, quando ele "escutar" o click vai executar a função calculoIMC

