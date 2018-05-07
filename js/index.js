let total=0;
let operacion;
let punto=true;

function borrar()
{
  document.getElementById("result").innerHTML=0;
  total=0;
  punto=true;
}

function pinta(numeros)
{
 
  if(document.getElementById("result").innerHTML == 0){
    document.getElementById("result").innerHTML=" ";
  }
  if (numeros==11 && punto){
    document.getElementById("result").innerHTML+=".";
    punto=false;
  }if(numeros != 11){
    document.getElementById("result").innerHTML+=numeros; 
  }
 
}

function suma()
{
  total = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML=0;
  return operacion="+";
}

function resta()
{
  total = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML=0;
  return operacion="-";
}

function multi()
{
  total = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML=0;
  return operacion="*";
}

function divide()
{
  total = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML=0;
  return operacion="/";
}

function calcular()
{
  let calcula=document.getElementById("result").innerHTML;
  if(operacion == "+"){
     let one=parseFloat(total)+parseFloat(calcula);
     document.getElementById("result").innerHTML=one;
  }
  if(operacion == "-"){
    let one=parseFloat(total)-parseFloat(calcula);
    document.getElementById("result").innerHTML=one;
  }
  if(operacion == "*"){
    let one=parseFloat(total)*parseFloat(calcula);
    document.getElementById("result").innerHTML=one;
  } 
  if(operacion == "/"){
    let one=parseFloat(total)/parseFloat(calcula);
    document.getElementById("result").innerHTML=one;
  }
  
}
      
