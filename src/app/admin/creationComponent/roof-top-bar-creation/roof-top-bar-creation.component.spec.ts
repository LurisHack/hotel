import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoofTopBarCreationComponent } from './roof-top-bar-creation.component';

describe('SettingRoofTopBarComponent', () => {
  let component: RoofTopBarCreationComponent;
  let fixture: ComponentFixture<RoofTopBarCreationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofTopBarCreationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoofTopBarCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
