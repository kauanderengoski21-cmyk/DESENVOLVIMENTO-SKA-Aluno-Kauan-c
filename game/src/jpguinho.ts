import { Serjao } from "./serjao.ts";
import { Ninja } from "./Ninja.ts";
import { jogo } from "./jogo.ts";

let ninja: Ninja = new Ninja ("ninja", 1,450);
let serjao:Serjao = new Serjao ("serjao", 1, 450);

let Jogo : jogo = new jogo ();
Jogo.iniciar (ninja, serjao);