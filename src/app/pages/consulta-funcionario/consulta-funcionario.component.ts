import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'; //importando as variaves globais
import { HttpClient } from '@angular/common/http'; //importando a biblioteca para a realização do ftp

@Component({
  selector: 'app-consulta-funcionario',
  templateUrl: './consulta-funcionario.component.html',
  styleUrls: ['./consulta-funcionario.component.css']
})
export class ConsultaFuncionarioComponent implements OnInit {
  //criar variavel global para guardar a lista de objetos fornecido pela consulta - API
  listaFuncionarios: any[] = [];
  mensagem_registro: string = '';

  constructor(
    //declara o inicializa a classe HttpClient
    private httpClient: HttpClient) {
  }

  //metodo executado antes do componente abrir/renderizar
  ngOnInit(): void {
    //realizar a chamada da consulta API para realizar a consulta sem parametros
    this.httpClient.get(environment.API_URL + "api/Funcionarios")
      .subscribe(
        (data) => {
          this.listaFuncionarios = data as any[];
        }
      )
  }

  //funcção para excluir o funcionario
  onDelete(idFuncionario: String): void {
    if (window.confirm('Você realmente deseja excluir o contato selecionado?')) {
      this.httpClient.delete(environment.API_URL + "api/Funcionarios/" + idFuncionario)
        .subscribe(
          (data: any) => {
            alert(data.mensage);
            this.ngOnInit();
          }
        )
    }
  }
}
