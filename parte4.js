const prompt = require("prompt-sync")();
const r = parseFloat(prompt("Digite o valor do raio da circunferência: "));
const area = (3 * r ** 2 * Math.sqrt(3)) / 4;
console.log(`A área do triângulo equilátero inscrito é: ${area.toFixed(2)}`);
