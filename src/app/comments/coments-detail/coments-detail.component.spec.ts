import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsDetailComponent } from './coments-detail.component';

describe('ComentsDetailComponent', () => {
  let component: ComentsDetailComponent;
  let fixture: ComponentFixture<ComentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
