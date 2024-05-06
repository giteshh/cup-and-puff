import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillsClassicComponent } from './wills-classic.component';

describe('WillsClassicComponent', () => {
  let component: WillsClassicComponent;
  let fixture: ComponentFixture<WillsClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WillsClassicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WillsClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
