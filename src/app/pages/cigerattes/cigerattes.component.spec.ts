import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigerattesComponent } from './cigerattes.component';

describe('CigerattesComponent', () => {
  let component: CigerattesComponent;
  let fixture: ComponentFixture<CigerattesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CigerattesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CigerattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
