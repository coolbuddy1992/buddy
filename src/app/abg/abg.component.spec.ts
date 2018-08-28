import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbgComponent } from './abg.component';

describe('AbgComponent', () => {
  let component: AbgComponent;
  let fixture: ComponentFixture<AbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
