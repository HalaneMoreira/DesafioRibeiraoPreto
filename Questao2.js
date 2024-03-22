// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const n = 10;

function solution(n) {
  if (n === 0) return 0;

  let prev1 = 0;
  let prev2 = 1;
  let curr;

  for (let i = 2; i <= n; i++) {
    curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }

  return prev2;
}

console.log(solution(n));
