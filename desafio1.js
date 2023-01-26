
let soma1 = prompt("Digite o primeiro número");
let soma2 = prompt("Digite o segundo número");

soma = Number(soma1) + Number(soma2);
subtracao = Number(soma1) - Number(soma2);
multiplicação = Number(soma1) * Number(soma2);
resto = Number(soma1) % Number(soma2);

alert(`A soma dos 2 números é: ` + soma);

alert(`A SUBTRAÇÃO dos 2 números é: ` + subtracao);

alert(`A multiplicação dos 2 números é: ` + multiplicação);

alert(`O resto dos 2 números é: ` + resto);


par = Number(soma1) + Number(soma2);

if( par % 2 === 0){
  alert(par + ` é número PAR`);
} else {
  alert(par + ` é numero impar `);
}


if( Number(soma1) === Number(soma2)){
  alert(` os numeros inseridos são iguais`);
} else {
  alert(` os numeros inseridos são diferentes `);
}



