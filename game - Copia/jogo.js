"use strict";
(() => {
  // src/personagem.ts
  var personagem = class {
    constructor(nome, forca, vida, imagem) {
      this.nome = "personagem";
      this.forca = 0;
      this.vida = 0;
      this.cura = 0;
      this.imagem = "";
      this.imagem = imagem;
      this.nome = nome;
      this.forca = forca;
      this.vida = vida;
    }
    CountinuaVivo() {
      return this.vida > 0;
    }
    sofrerAtaque(dano) {
      this.vida = this.vida - dano;
      this.log(`${this.nome} recebeu ${dano} de dano. vida atual: ${this.vida} `);
    }
    getVida() {
      return this.vida;
    }
    rolarDado() {
      return Math.random() * (3 - 1) + 1;
    }
    setImg(novaImg) {
      this.imagem = novaImg;
    }
    getImg() {
      return this.imagem;
    }
    log(mensagem) {
      console.log(mensagem);
      document.getElementById("console").innerHTML += "<p>" + mensagem + "</p>";
    }
  };

  // src/Ninja.ts
  var Ninja = class extends personagem {
    constructor(nome, forca, vida) {
      super(nome, forca, vida, "https://henchman4hire.com/wp-content/uploads/2019/04/mk-ninja-ranking-17.png");
    }
    atacar(persona) {
      console.log(`${this.nome} atacou com katana ${persona.nome}`);
      persona.sofrerAtaque(this.forca);
    }
    shuriken(persona) {
      const dano = this.forca * 1.5;
      console.log(`${this.nome} usou usou sua shurikens ${persona.nome}`);
      persona.sofrerAtaque(dano);
    }
    BleedSword(persona) {
      const critico = Math.random() < 0.3;
      const dano = critico ? this.forca * 2 : this.forca;
      console.log(`${this.nome} tentou um Ataque Cr\xEDtico em ${persona.nome}`);
      if (critico) {
        this.log("CR\xCDTICO!");
      }
      persona.sofrerAtaque(dano);
    }
    curar(valor) {
      const vidaAntes = this.vida;
      this.vida = Math.min(this.vida + valor);
      this.log(`${this.nome} curou ${this.vida - vidaAntes} HP`);
    }
  };

  // src/serjao.ts
  var Serjao = class extends personagem {
    constructor(nome, forca, vida) {
      super(
        nome,
        forca,
        vida,
        "https://montinkantigo.s3.amazonaws.com/data/camisas/serjao-aqui-tem-coragem-5c6f2668bccc3-estampa-301.png"
      );
    }
    atacar(persona) {
      console.log(`${this.nome} ataque com uma onca: ${persona.nome}`);
      persona.sofrerAtaque(this.forca);
    }
    usarHabilidade(opcao, persona) {
      switch (opcao) {
        case 1:
          this.atacar(persona);
          break;
        case 2:
          this.PalavrasAbencoadas(persona);
          break;
        case 3:
          this.FacaoMatador(persona);
          break;
      }
    }
    PalavrasAbencoadas(persona) {
      const critico = Math.random() < 30;
      const dano = critico ? this.forca * 2 : this.forca;
    }
    FacaoMatador(persona) {
      const dano = this.forca * 50;
      console.log(
        `${this.nome} com esse ataque causou sangramento ${persona.nome}`
      );
      persona.sofrerAtaque(dano);
    }
    curar(valor) {
      const vidaAntes = this.vida;
      this.vida = Math.min(this.vida + valor);
      this.log(`${this.nome} curou ${this.vida - vidaAntes} HP`);
    }
  };

  // src/jogo.ts
  var jogo = class {
    async iniciar(player1, player2) {
      let turno = 1;
      this.atualizarinterface(player1, player2);
      while (player1.CountinuaVivo() && player2.CountinuaVivo) {
        player1.log(`
 ======== Jogo come\xE7ou! ${turno} ========`);
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
        document.getElementById("Img2Jogador").src = "https://e7.pngegg.com/pngimages/472/1008/png-clipart-skull-and-bones-skull-and-crossbones-human-skull-symbolism-tuning-logo-head-thumbnail.png";
      } else {
        document.getElementById("ImgJogador").src = "https://e7.pngegg.com/pngimages/472/1008/png-clipart-skull-and-bones-skull-and-crossbones-human-skull-symbolism-tuning-logo-head-thumbnail.png";
        player1.log(`${player2.nome} essa foi muito ez.`);
      }
    }
    buscarComponentehtml(id) {
      return document.getElementById(id);
    }
    atualizarinterface(jogadorUm, jogadorDois) {
      document.getElementById("ImgJogador").src = jogadorUm.getImg();
      document.getElementById("Img2Jogador").src = jogadorDois.getImg();
      this.buscarComponentehtml("nomeUm").textContent = jogadorUm.nome;
      this.buscarComponentehtml("nomeDois").textContent = jogadorDois.nome;
      this.buscarComponentehtml("saudeUm").textContent = "HP: " + jogadorUm.getVida();
      this.buscarComponentehtml("saudeDois").textContent = "HP: " + jogadorDois.getVida();
    }
    esperaTempo() {
      const milesegundos = 800;
      return new Promise((x) => setTimeout(x, milesegundos));
    }
  };
  function construirJogo() {
    let ninja = new Ninja("ninja", 20, 200);
    let serjao = new Serjao("serjao", 22, 200);
    let Jogo = new jogo();
    Jogo.iniciar(ninja, serjao);
  }
  document.getElementById("BotaoJogar").addEventListener("click", construirJogo);
})();
