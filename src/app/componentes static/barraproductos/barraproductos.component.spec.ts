import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraproductosComponent } from './barraproductos.component';

describe('BarraproductosComponent', () => {
  let component: BarraproductosComponent;
  let fixture: ComponentFixture<BarraproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
