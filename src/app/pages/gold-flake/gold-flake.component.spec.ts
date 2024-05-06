import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldFlakeComponent } from './gold-flake.component';

describe('GoldFlakeComponent', () => {
  let component: GoldFlakeComponent;
  let fixture: ComponentFixture<GoldFlakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldFlakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoldFlakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
