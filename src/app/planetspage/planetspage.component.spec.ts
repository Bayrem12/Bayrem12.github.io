import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetspageComponent } from './planetspage.component';

describe('PlanetspageComponent', () => {
  let component: PlanetspageComponent;
  let fixture: ComponentFixture<PlanetspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
