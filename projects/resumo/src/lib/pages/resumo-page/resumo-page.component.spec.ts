import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoPageComponent } from './resumo-page.component';

describe('ResumoPageComponent', () => {
  let component: ResumoPageComponent;
  let fixture: ComponentFixture<ResumoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
