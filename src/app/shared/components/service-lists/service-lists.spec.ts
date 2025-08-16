import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLists } from './service-lists';

describe('ServiceLists', () => {
  let component: ServiceLists;
  let fixture: ComponentFixture<ServiceLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
