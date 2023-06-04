import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaPageComponent } from './loja-page.component';

describe('LojaPageComponent', () => {
  let component: LojaPageComponent;
  let fixture: ComponentFixture<LojaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
