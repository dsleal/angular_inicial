import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsEditComponent } from './coments-edit.component';

describe('ComentsEditComponent', () => {
  let component: ComentsEditComponent;
  let fixture: ComponentFixture<ComentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
