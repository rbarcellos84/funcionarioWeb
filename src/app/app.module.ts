import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; //importando rotas
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //controle dos objetos da tela
import { HttpClientModule} from '@angular/common/http'; //comunicação com API

//adicionando todos os componentes da pagina
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { CadastroFuncionarioComponent } from './pages/cadastro-funcionario/cadastro-funcionario.component';
import { ConsultaFuncionarioComponent } from './pages/consulta-funcionario/consulta-funcionario.component';
import { EdicaoFuncionarioComponent } from './pages/edicao-funcionario/edicao-funcionario.component';
import { HomeComponent } from './pages/home/home.component';

//construcao de rota
const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'home'}, //definicao de pagina inicial
  {path : 'home', component: HomeComponent},
  {path : 'cadastro-funcionario', component: CadastroFuncionarioComponent},
  {path : 'consulta-funcionario', component: ConsultaFuncionarioComponent},
  {path : 'edicao-funcionario/:idFuncionario', component: EdicaoFuncionarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastroFuncionarioComponent,
    ConsultaFuncionarioComponent,
    EdicaoFuncionarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, //formularios reativados
    ReactiveFormsModule, //formularios reativados
    RouterModule.forRoot(routes), //registrando rotas
    HttpClientModule //registrando a biblioteca de requisições de API
  ],
  providers: [],
  bootstrap: [AppComponent] //habilitando o bootstrap
})

export class AppModule { }
