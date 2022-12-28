import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantEditFoodPopupComponent } from './restaurant-edit-food-popup.component';

describe('RestaurantEditFoodPopupComponent', () => {
  let component: RestaurantEditFoodPopupComponent;
  let fixture: ComponentFixture<RestaurantEditFoodPopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantEditFoodPopupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantEditFoodPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
