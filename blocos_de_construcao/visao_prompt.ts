import {subtrair,somar,despedir} from "./modelo"
import * as prompt_sync from "prompt-sync"

const prompt = prompt_sync();
let opcao:string;

opcao = prompt("Digite sua opção: ");
let resultado: number;

switch (opcao) {
  case "somar":
    resultado = somar(parseInt(prompt("insira o primeiro valor")),parseInt(prompt("insira o primeiro valor")));
    console.log(resultado);
    break;
  case "subtrair":
    resultado = subtrair(parseInt(prompt("insira o primeiro valor")),parseInt(prompt("insira o primeiro valor")));
    console.log(resultado);
    break;
  case "despedir":
    console.log(despedir());
}
