import { Serjao } from "./serjao.ts";
import { Ninja } from "./Ninja.ts";
import { jogo } from "./jogo.ts";

let ninja: Ninja = new Ninja ("ninja", 90,450);
let serjao:Serjao = new Serjao ("serjao", 75, 600);

let Jogo : jogo = new jogo ();
Jogo.iniciar (ninja, serjao);