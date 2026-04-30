import { personagem } from "../personagem.ts";

export class jogo {
  public iniciar(player1: personagem, player2: personagem) {
    let turno = 1;

    while (player1.CountinuaVivo() && player2.CountinuaVivo) {
      console.log("\n =========== Game is opens" + turno + "========");
      player1.atacar(player2);

      if (!player2.CountinuaVivo()) {
        break;
      }

      player2.atacar(player1);
      turno += 1;
    }

    if (player1.CountinuaVivo()) {
      console.log(`${player1.nome} I win.`);
    } else {
      console.log(`${player2.nome} I win.`);
    }
  }
}
