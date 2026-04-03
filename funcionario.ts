export abstract class Funcionario {
    public nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getSalario(): number {
        return this.salario;
    }

    
    setSalario(novoSalario: number): void {
        if (novoSalario > 0) {
            this.salario = novoSalario;
        } else {
            console.log("O salário deve ser maior que zero.");
        }
    }

    falar(): string {
        return `Sou ${this.nome} e ganho ${this.salario}`;
    }

    
    abstract ganharAumento(): number;
}