export class Veiculo{
    private _nome:string;
    private _cor:string;
    private _ano:number;
    private _modelo:string;
    private _tipoCarroOuVan:string;

    constructor(nome:string, cor:string, ano:number, modelo:string, tipoCarroOuVan:string){
        this._nome=nome;
        this._cor=cor;
        this._ano=ano;
        this._modelo=modelo;
        this._tipoCarroOuVan=tipoCarroOuVan;
    }

    get nome():string{
        return this._nome;
    }

    set nome(nome:string){
        this._nome=nome;
    }

    get cor():string{
        return this._cor;
    }

    set cor(cor:string){
        this._cor=cor;
    }

    get ano():number{
        return this._ano;
    }

    set ano(ano:number){
        this._ano=ano;
    }

    get modelo():string{
        return this._modelo;
    }

    set modelo(modelo:string){
        this._modelo=modelo;
    }

    get tipoCarroOuVan():string{
        return this._tipoCarroOuVan;
    }

    set tipoCarroOuVan(tipoCarroOuVan:string){
        this._tipoCarroOuVan=tipoCarroOuVan;
    }

}