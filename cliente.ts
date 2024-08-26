import {Veiculo} from "./veiculo"

export class Cliente{
    protected _nome:string;
    protected _veiculos:Veiculo[];

    constructor(nome:string,veiculos:Veiculo[]){
        this._nome=nome;
        this._veiculos=veiculos;
    }

    protected get nome():string{
        return this._nome;
    }

    protected set nome(nome:string){
        this._nome=nome;
    }

    protected impVeiculos():void{
        let veiculos:Veiculo[]=this._veiculos;

        for(let i:number=0;i<veiculos.length;i++){
            console.log(`Veiculo ${i}: ${veiculos[i].nome}`)
        }
    }

    protected impDadosCliente():void{
        console.log(`Nome: ${this._nome}`)
    }

    public addVeiculos(veiculo:Veiculo):void{
        this._veiculos.push(veiculo);
    }
}