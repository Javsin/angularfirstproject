import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxmovieComponent } from './boxmovie.component';

describe('BoxmovieComponent', () => {
  let component: BoxmovieComponent;
  let fixture: ComponentFixture<BoxmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
