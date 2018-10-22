import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilDetailPage } from './perfil-detail';

@NgModule({
  declarations: [
    PerfilDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilDetailPage),
  ],
})
export class PerfilDetailPageModule {}
