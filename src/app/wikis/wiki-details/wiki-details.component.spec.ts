import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiDetailsComponent } from './wiki-details.component';

describe('WikiDetailsComponent', () => {
  let component: WikiDetailsComponent;
  let fixture: ComponentFixture<WikiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
