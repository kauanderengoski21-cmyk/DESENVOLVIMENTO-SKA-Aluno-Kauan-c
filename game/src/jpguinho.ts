import { Serjao } from "./serjao";
import { Ninja } from "./Ninja";
import { jogo } from "./jogo";

let ninja: Ninja = new Ninja ("ninja", 20,200);
let serjao:Serjao = new Serjao ("serjao", 22,200);

let Jogo : jogo = new jogo ();
Jogo.iniciar (ninja, serjao);