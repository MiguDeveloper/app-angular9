import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimerTestComponent} from './primer-test.component';
import {of} from "rxjs";
import {HttpClientModule, HttpResponse} from "@angular/common/http";
import {APP_ROUTING} from "../../app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {UsuariosService} from "../../services/usuarios.service";

describe('PrimerTestComponent', () => {
  let component: PrimerTestComponent;
  let fixture: ComponentFixture<PrimerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerTestComponent],
      imports: [
        APP_ROUTING,
        BrowserModule,
        HttpClientModule
      ],
      providers: [
        UsuariosService
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add mensaje', () => {
    component.catalogoProductos.push('Super facil', 'Economico');
    const lst: string[] = component.catalogoProductos;

    expect(lst.length).toBe(2);
  })

  it('deberia crear', () => {
    expect(component).toBeTruthy();
  })

  it('usuario inicia desactivado', () => {
    expect(component.usuarioActivo).toBeFalsy();
  })

  it('ejecutamos el login: usuario logueado', () => {
    expect(component.activarUsuario).toBeTruthy();
  })

  fit('Lista usuarios', function () {
    component.getAllUsuarios();
    expect(component.usuarios.length == 0).toBeTruthy();
  });

});

