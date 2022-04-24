import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEbookComponent } from './add-edit-ebook.component';

describe('AddEditEbookComponent', () => {
  let component: AddEditEbookComponent;
  let fixture: ComponentFixture<AddEditEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
