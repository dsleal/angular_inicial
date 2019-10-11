import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsListComponent } from './coments-list.component';

describe('ComentsListComponent', () => {
  let component: ComentsListComponent;
  let fixture: ComponentFixture<ComentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
