import {Cliente} from "./cliente";
import {Veiculo} from "./veiculo";
import {PessoaF} from "./pessoaF";
import {Empresa} from "./empresa";
import {Aluguel} from "./aluguel";

let clio:Veiculo = new Veiculo("cliozada","branco",2012,"a03ds","Carro");
let joca:Veiculo = new Veiculo("joca","branco",2012,"a03ds","Carro");

let jasmin:PessoaF= new PessoaF("yasmin",[],12334556);

let oloco:Empresa= new Empresa("olocoMeu",[],87963);

let aluguel1:Aluguel=new Aluguel(jasmin,clio);
aluguel1.efetuarAluguel();
let aluguel2:Aluguel=new Aluguel(jasmin,joca);
aluguel2.efetuarAluguel();


jasmin.impDadosCliente();
jasmin.impVeiculos();
