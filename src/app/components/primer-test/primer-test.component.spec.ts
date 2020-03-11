import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTestComponent } from './primer-test.component';

describe('PrimerTestComponent', () => {
  let component: PrimerTestComponent;
  let fixture: ComponentFixture<PrimerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerTestComponent ]
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
    let lst: string[] = component.catalogoProductos;

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
});
