import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQuoteListComponent } from './client-quote-list.component';

describe('ClientQuoteListComponent', () => {
  let component: ClientQuoteListComponent;
  let fixture: ComponentFixture<ClientQuoteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientQuoteListComponent]
    });
    fixture = TestBed.createComponent(ClientQuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
