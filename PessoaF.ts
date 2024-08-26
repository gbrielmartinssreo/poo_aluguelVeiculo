import {Cliente} from "./cliente"
import {Veiculo} from "./veiculo";

export class PessoaF extends Cliente{
    private _cpf:number;

    constructor(nome:string,veiculos:Veiculo[],cpf:number){
        super(nome,veiculos);
        this._cpf=cpf;
    }

    get cpf():number{
        return this._cpf;
    }

    set cpf(cpf:number){
        this._cpf=cpf;
    }

    public impDadosCliente():void{
        super.impDadosCliente();
        console.log(`CPF: ${this._cpf}`)
    }

    public impVeiculos():void{
        super.impVeiculos();
    }
}