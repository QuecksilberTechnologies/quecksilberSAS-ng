import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStacks } from './tech-stacks';

describe('TechStacks', () => {
  let component: TechStacks;
  let fixture: ComponentFixture<TechStacks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStacks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStacks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
