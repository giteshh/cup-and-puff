import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarlboroComponent } from './marlboro.component';

describe('MarlboroComponent', () => {
  let component: MarlboroComponent;
  let fixture: ComponentFixture<MarlboroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarlboroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarlboroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
