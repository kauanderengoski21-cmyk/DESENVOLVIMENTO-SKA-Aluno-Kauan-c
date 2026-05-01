import { Serjao } from "./serjao";
import { Ninja } from "./Ninja";
import { jogo } from "./jogo";

let ninja: Ninja = new Ninja ("ninja", 1,450);
let serjao:Serjao = new Serjao ("serjao", 1, 450);

let Jogo : jogo = new jogo ();
Jogo.iniciar (ninja, serjao);