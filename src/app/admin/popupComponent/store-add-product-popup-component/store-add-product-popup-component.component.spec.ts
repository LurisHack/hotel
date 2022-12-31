import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreAddProductPopupComponentComponent } from './store-add-product-popup-component.component';

describe('StoreAddProductComponent', () => {
  let component: StoreAddProductPopupComponentComponent;
  let fixture: ComponentFixture<StoreAddProductPopupComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAddProductPopupComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreAddProductPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
