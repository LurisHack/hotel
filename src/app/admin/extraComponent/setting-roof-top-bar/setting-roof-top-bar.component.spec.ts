import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingRoofTopBarComponent } from './setting-roof-top-bar.component';

describe('SettingRoofTopBarComponent', () => {
  let component: SettingRoofTopBarComponent;
  let fixture: ComponentFixture<SettingRoofTopBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingRoofTopBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingRoofTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
