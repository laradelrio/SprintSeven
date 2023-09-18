import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQuoteFormComponent } from './client-quote-form.component';

describe('ClientQuoteFormComponent', () => {
  let component: ClientQuoteFormComponent;
  let fixture: ComponentFixture<ClientQuoteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientQuoteFormComponent]
    });
    fixture = TestBed.createComponent(ClientQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
