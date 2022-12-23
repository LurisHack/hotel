import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoofTopBarPopupComponentComponent } from './roof-top-bar-popup-component.component';

describe('RoofTopBarPopupComponentComponent', () => {
  let component: RoofTopBarPopupComponentComponent;
  let fixture: ComponentFixture<RoofTopBarPopupComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofTopBarPopupComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoofTopBarPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
