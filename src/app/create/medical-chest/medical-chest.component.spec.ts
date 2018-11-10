import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalChestComponent } from './medical-chest.component';

describe('MedicalChestComponent', () => {
  let component: MedicalChestComponent;
  let fixture: ComponentFixture<MedicalChestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalChestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalChestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
