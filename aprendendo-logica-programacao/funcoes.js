const botao = document.querySelector('#btn');

function chamaFuncao(){
   alert("ola")
   segundaFuncao()
   
}
function segundaFuncao(){
    alert("segundaFuncaoChamada")
    terceiraFuncao()
   
    
}  
function terceiraFuncao(){
    alert("terceiraFuncaoChamada")
    quartaFuncao()
} 
function quartaFuncao(){
    alert("quartaFuncaoChamada")
    quintaFuncao()
} 
function quintaFuncao(){
    alert("quintaFuncaoChamada")
} 


botao.addEventListener('click', chamaFuncao)
