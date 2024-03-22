// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___

// b) 2, 4, 8, 16, 32, 64, ____

// c) 0, 1, 4, 9, 16, 25, 36, ____

// d) 4, 16, 36, 64, ____(eleva o numero ao quadrado pulando de 2 em 2)

// e) 1, 1, 2, 3, 5, 8, ____( a soma dos dois numeros anteriores)

// f) 2,10, 12, 16, 17, 18, 19, ____
//----------------------------------------------

// a) 1, 3, 5, 7, ___

function exibirSequnciaA(numIncialA, quantidadeA) {
  let sequenciaA = [numIncialA];

  for (let i = 1; i < quantidadeA; i++) {
    sequenciaA.push(sequenciaA[i - 1] + 2);
  }

  return sequenciaA;
}
let numIncialA = 1;
let quantidadeA = 10;

console.log(exibirSequnciaA(numIncialA, quantidadeA));

// b) 2, 4, 8, 16, 32, 64, ____

function SequenciaMultiplicativaB(numInicialB, quantidadeB) {
  let sequenciaB = [numInicialB];

  for (let i = 1; i < quantidadeB; i++) {
    let proxNumB = sequenciaB[i - 1] * 2;
    sequenciaB.push(proxNumB);
  }

  return sequenciaB;
}

let numInicialB = 2;
let quantidadeB = 10;
let sequenciaB = SequenciaMultiplicativaB(numInicialB, quantidadeB);

console.log(sequenciaB);

// c) 0, 1, 4, 9, 16, 25, 36, ____

function sequenciaQuadradosC(quantidadeC) {
  let sequenciaC = [];

  for (let i = 0; i < quantidadeC; i++) {
    sequenciaC.push(i * i);
  }

  return sequenciaC;
}

let quantidadeC = 10;
let sequenciaC = sequenciaQuadradosC(quantidadeC);

console.log(sequenciaC);

// d) 4, 16, 36, 64, ____(eleva o numero ao quadrado pulando de 2 em 2)

function SequenciaQuadradoParesD(quantidadeD) {
  let sequenciaD = [];
  let numeroParD = 2;

  for (let i = 0; i < quantidadeD; i++) {
    sequenciaD.push(numeroParD * numeroParD);
    numeroParD += 2;
  }
  return sequenciaD;
}

let quantidadeD = 10;
let sequenciaD = SequenciaQuadradoParesD(quantidadeD);

console.log(sequenciaD);

// e) 1, 1, 2, 3, 5, 8, ____( a soma dos dois numeros anteriores)

function sequenciaFibonacciE(quantidadeE) {
  let sequenciaE = [1, 1];

  for (let i = 2; i < quantidadeE; i++) {
    sequenciaE[i] = sequenciaE[i - 1] + sequenciaE[i - 2];
  }
  return sequenciaE;
}
let quantidadeE = 10;
let sequenciaE = sequenciaFibonacciE(quantidadeE);

console.log(sequenciaE);
