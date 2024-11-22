import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikisComponent } from './wikis.component';

describe('WikisComponent', () => {
  let component: WikisComponent;
  let fixture: ComponentFixture<WikisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
