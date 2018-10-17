import { Component } from '@angular/core';

import { PerfilPage } from '../perfil/perfil';
import { RepositorioPage } from '../repositorio/repositorio';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = RepositorioPage;

  constructor() {

  }
}
