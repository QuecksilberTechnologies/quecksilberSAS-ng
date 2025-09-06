import { ComponentFixture, TestBed } from '@angular/core/testing';

import VersionUpdateDialogComponent from './version-update-dialog';

describe('VersionUpdateDialogComponent', () => {
  let component: VersionUpdateDialogComponent;
  let fixture: ComponentFixture<VersionUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionUpdateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VersionUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
