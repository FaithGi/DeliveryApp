import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovelPage } from './novel.page';

describe('NovelPage', () => {
  let component: NovelPage;
  let fixture: ComponentFixture<NovelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
