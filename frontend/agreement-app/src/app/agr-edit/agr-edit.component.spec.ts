import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrEditComponent } from './agr-edit.component';

describe('AgrEditComponent', () => {
  let component: AgrEditComponent;
  let fixture: ComponentFixture<AgrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
