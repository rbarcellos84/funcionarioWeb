import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment'; //importando as variaves globais
import { HttpClient } from '@angular/common/http'; //importando a biblioteca para a realização do ftp

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})

export class CadastroFuncionarioComponent implements OnInit{
  //criando uma variavel de retorno para api
  mensagem_cadastro: string = '';

  constructor(
    //declara o inicializa a classe HttpClient
    private httpClient : HttpClient
  ) { }
  ngOnInit(): void {
  }

  fromCadastro = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    matricula: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    dataAdmissao: new FormControl(null, [Validators.required])
  });
  
  //funcção utilizada para exibir os erros de validação dos campos na pagina html
  get form(): any {
    return this.fromCadastro.controls;
  };

  //função para executar a chamada da API que irá cadastrar o formulario
  onSubmit() : void {
    //teste
    //console.log(this.fromCadastro.value);

    //chamada da api
    this.httpClient.post(environment.API_URL + "api/Funcionarios",this.fromCadastro.value)
    .subscribe(
      //subscribe captura a resposta da api
      (data: any) => {
        this.mensagem_cadastro = data.mensage;
        alert(this.mensagem_cadastro);
        //limpar campos do formulario
        this.fromCadastro.reset();
      }
    );
  }
}