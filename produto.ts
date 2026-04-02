export class Monster {
  constructor(private _codigo: number, private _descricao: string, private _valor: number) {}

  
   falar(): string {
    return `Produto: ${this._descricao}, Código: ${this._codigo}, Valor: R$ ${this._valor.toFixed(2)}`;
  }

  
  get codigo(): number {
    return this._codigo;
  }

  get descricao(): string {
    return this._descricao;
  }

  get valor(): number {
    return this._valor;
  }


  set valor(novoValor: number) {
    if (novoValor >= 0) {
      this._valor = novoValor;
    }
  }
}
