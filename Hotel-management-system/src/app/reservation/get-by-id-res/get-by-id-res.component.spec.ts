import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdResComponent } from './get-by-id-res.component';

describe('GetByIdResComponent', () => {
  let component: GetByIdResComponent;
  let fixture: ComponentFixture<GetByIdResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByIdResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
