import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoallocatorComponent } from './autoallocator.component';

describe('AutoallocatorComponent', () => {
  let component: AutoallocatorComponent;
  let fixture: ComponentFixture<AutoallocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoallocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoallocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
