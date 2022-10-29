import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListUsuariosComponent } from './dashboard/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { CardUsuarioComponent } from './dashboard/list-usuarios/card-usuario/card-usuario.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { LoadingComponent } from './dashboard/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListUsuariosComponent,
    LayoutComponent,
    CardUsuarioComponent,
    UsuarioComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
