import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdasComponent } from './docdas.component';

describe('DocdasComponent', () => {
  let component: DocdasComponent;
  let fixture: ComponentFixture<DocdasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocdasComponent]
    });
    fixture = TestBed.createComponent(DocdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
