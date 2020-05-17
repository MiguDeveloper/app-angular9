import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PrimerTestComponent} from './components/primer-test/primer-test.component';
import {APP_ROUTING} from './app.routes';
import {UsuariosService} from './services/usuarios.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimerTestComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
