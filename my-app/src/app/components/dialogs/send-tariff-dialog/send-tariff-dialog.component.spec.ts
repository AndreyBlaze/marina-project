import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTariffDialogComponent } from './send-tariff-dialog.component';

describe('SendTariffDialogComponent', () => {
  let component: SendTariffDialogComponent;
  let fixture: ComponentFixture<SendTariffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendTariffDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendTariffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
