import { Ninja } from "./Ninja.ts";
import { personagem } from "./personagem.ts";
import { Serjao } from "./serjao.ts";

export class jogo {
  public async iniciar(player1: personagem, player2: personagem) {
    let turno = 1;

    this.atualizarinterface(player1, player2);

    while (player1.CountinuaVivo() && player2.CountinuaVivo) {
      player1.log(`\n ======== Jogo começou! ${turno} ========`);

      player1.atacar(player2);

      this.atualizarinterface(player1, player2);
      await this.esperaTempo();
      if (!player2.CountinuaVivo()) {
        break;
      }

      player2.atacar(player1);
      this.atualizarinterface(player1, player2);
      await this.esperaTempo();
      turno += 1;
    }

    if (player1.CountinuaVivo()) {
      player2.log(`${player1.nome} ganehei essa foi facil.`);

     (document.getElementById("Img2Jogador") as HTMLImageElement).src =
      "https://e7.pngegg.com/pngimages/472/1008/png-clipart-skull-and-bones-skull-and-crossbones-human-skull-symbolism-tuning-logo-head-thumbnail.png";

    } else {

      (document.getElementById("ImgJogador") as HTMLImageElement).src =
      "https://e7.pngegg.com/pngimages/472/1008/png-clipart-skull-and-bones-skull-and-crossbones-human-skull-symbolism-tuning-logo-head-thumbnail.png"

      player1.log(`${player2.nome} essa foi muito ez.`);
    }
  }
  buscarComponentehtml(id: string) {
    return document.getElementById(id);
  }

  public atualizarinterface(jogadorUm: personagem, jogadorDois: personagem) {
    (document.getElementById("ImgJogador") as HTMLImageElement).src =
      jogadorUm.getImg();

    (document.getElementById("Img2Jogador") as HTMLImageElement).src =
      jogadorDois.getImg();

    this.buscarComponentehtml("nomeUm")!.textContent = jogadorUm.nome;
    this.buscarComponentehtml("nomeDois")!.textContent = jogadorDois.nome;

    this.buscarComponentehtml("saudeUm")!.textContent =
      "HP: " + jogadorUm.getVida();
    this.buscarComponentehtml("saudeDois")!.textContent =
      "HP: " + jogadorDois.getVida();
  }

  public esperaTempo() {
    const milesegundos = 800;
    return new Promise((x) => setTimeout(x, milesegundos));
  }
}

function construirJogo() {
  let ninja: Ninja = new Ninja("ninja", 20, 200);
  let serjao: Serjao = new Serjao("serjao", 22, 200);

  let Jogo: jogo = new jogo();
  Jogo.iniciar(ninja, serjao);
}

document.getElementById("BotaoJogar")!.addEventListener("click", construirJogo);
