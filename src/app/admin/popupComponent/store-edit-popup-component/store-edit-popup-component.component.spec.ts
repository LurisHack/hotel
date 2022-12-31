import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreEditPopupComponentComponent } from './store-edit-popup-component.component';

describe('StoreEditPopupComponentComponent', () => {
  let component: StoreEditPopupComponentComponent;
  let fixture: ComponentFixture<StoreEditPopupComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEditPopupComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreEditPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
