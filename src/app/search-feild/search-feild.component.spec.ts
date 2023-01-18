import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFeildComponent } from './search-feild.component';

describe('SearchFeildComponent', () => {
  let component: SearchFeildComponent;
  let fixture: ComponentFixture<SearchFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFeildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
