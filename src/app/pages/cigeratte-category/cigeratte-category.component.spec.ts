import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigeratteCategoryComponent } from './cigeratte-category.component';

describe('CigeratteCategoryComponent', () => {
  let component: CigeratteCategoryComponent;
  let fixture: ComponentFixture<CigeratteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CigeratteCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CigeratteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
