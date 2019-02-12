import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { MytreeComponent } from './mytree.component';

describe('MytreeComponent', () => {
  let component: MytreeComponent;
  let fixture: ComponentFixture<MytreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytreeComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
