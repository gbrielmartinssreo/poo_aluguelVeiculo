import {Cliente} from "./cliente"
import {Veiculo} from "./veiculo";

export class Empresa extends Cliente{
    private _cnpj:number;

    constructor(nome:string,veiculos:Veiculo[],cnpj:number){
        super(nome,veiculos);
        this._cnpj=cnpj;
    }

    get cnpj():number{
        return this._cnpj;
    }

    set cnpj(cnpj:number){
        this._cnpj=cnpj;
    }

    public impDadosCliente():void{
        super.impDadosCliente();
        console.log(`CNPJ: ${this._cnpj}`)
    }

    public impVeiculos():void{
        super.impVeiculos();
    }
}