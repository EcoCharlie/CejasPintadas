import { ComponentFixture, TestBed } from '@angular/core/testing';
import {UpdateDialogComponent} from "./update.dialog.component";


describe('Update.DialogComponent', () => {
  let component: UpdateDialogComponent;
  let fixture: ComponentFixture<UpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
