import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoemPage } from './poem.page';

describe('PoemPage', () => {
  let component: PoemPage;
  let fixture: ComponentFixture<PoemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
