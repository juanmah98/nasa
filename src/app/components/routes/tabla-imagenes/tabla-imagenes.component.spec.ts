import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaImagenesComponent } from './tabla-imagenes.component';

describe('TablaImagenesComponent', () => {
  let component: TablaImagenesComponent;
  let fixture: ComponentFixture<TablaImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
