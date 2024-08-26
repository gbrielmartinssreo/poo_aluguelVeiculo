import {Cliente} from "./cliente";
import {Veiculo} from "./veiculo";
import {PessoaF} from "./pessoaF";
import {Empresa} from "./empresa";
export class Aluguel{

    private _cliente:Cliente;
    private _veiculo:Veiculo;

    constructor(cliente:Cliente,veiculo:Veiculo) {
        this._cliente=cliente;
        this._veiculo=veiculo;
    }

    set cliente(cliente:Cliente){
        this._cliente=cliente;
    }

    set veiculo(veiculo:Veiculo){
        this._veiculo=veiculo;
    }

    public efetuarAluguel():void{
        console.log(`Aluguel realizado`);
        this._cliente.addVeiculos(this._veiculo);
    }

}
