import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessComponent } from './my-business.component';

describe('MyBusinessComponent', () => {
  let component: MyBusinessComponent;
  let fixture: ComponentFixture<MyBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
