import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeReturnPolicyComponent } from './guarantee-return-policy.component';

describe('GuaranteeReturnPolicyComponent', () => {
  let component: GuaranteeReturnPolicyComponent;
  let fixture: ComponentFixture<GuaranteeReturnPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteeReturnPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeReturnPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
