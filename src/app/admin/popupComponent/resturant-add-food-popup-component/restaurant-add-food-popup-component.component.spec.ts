import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantAddFoodPopupComponentComponent } from './restaurant-add-food-popup-component.component';

describe('RestaurantAddFoodPopupComponentComponent', () => {
  let component: RestaurantAddFoodPopupComponentComponent;
  let fixture: ComponentFixture<RestaurantAddFoodPopupComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAddFoodPopupComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantAddFoodPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
