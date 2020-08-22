import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRegisterComponent } from './current-register.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentUserService } from '../current-user.service';

describe('CurrentRegisterComponent', () => {
  describe('Template', () => {
    let component: CurrentRegisterComponent;
    let fixture: ComponentFixture<CurrentRegisterComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CurrentRegisterComponent ],
        imports: [ ReactiveFormsModule ],
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CurrentRegisterComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('has all necessary inputs', () => {
      const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
      expect(emailInput).toBeTruthy();
      expect(emailInput.nativeElement.type).toEqual('text');
      expect(emailInput.nativeElement.getAttribute('formcontrolname')).toEqual('email');
  
      const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
      expect(passwordInput).toBeTruthy();
      expect(passwordInput.nativeElement.type).toEqual('password');
      expect(passwordInput.nativeElement.getAttribute('formcontrolname')).toEqual('password');

      const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
      expect(confirmPasswordInput).toBeTruthy();
      expect(confirmPasswordInput.nativeElement.type).toEqual('password');
      expect(confirmPasswordInput.nativeElement.getAttribute('formcontrolname')).toEqual('confirmPassword');
  
      const registerButton = fixture.debugElement.query(By.css('input[type="submit"]'));
      expect(registerButton).toBeTruthy();
      expect(registerButton.nativeElement.value).toEqual('Register');
    });

    it('calls correct component function on submit', () => {
      const registerSpy = spyOn(component, 'register').and.returnValue();
      component.registerForm.controls['email'].setValue('foo@example.com');
      component.registerForm.controls['password'].setValue('12345');
      component.registerForm.controls['confirmPassword'].setValue('12345');

      fixture.detectChanges();

      console.log(component.registerForm.valid, component.registerForm.controls.confirmPassword.errors);
      const registerButton = fixture.debugElement.query(By.css('input[type="submit"]'));
      registerButton.nativeElement.click();
      fixture.detectChanges();

      expect(registerSpy).toHaveBeenCalled();
    });
  });

  describe('Form behavior', () => {
    let component: CurrentRegisterComponent;
    let currentUserService: CurrentUserService;

    beforeEach(() => {
      currentUserService = new CurrentUserService();

      component = new CurrentRegisterComponent(currentUserService);
      component.ngOnInit();
    })
    const invalidInputs: [string, string, string, boolean][] = [
      [ '', '', '', false],
        ['', 'valid_password', 'valid_password', false], 
        ['name', 'valid_password', 'valid_password', false], 
        ['name@', 'valid_password', 'valid_password', false], 
        ['name@host.', 'valid_password', 'valid_password', false],
      ['name@host.com', '', 'valid_password', false], ['name@host.com', 'valid_password', '', false], 
      ['name@host.com', 'valid_password', 'valid_password', true],
    ]
    invalidInputs.forEach(([email, password, confirmPassword, valid]) => it(`is ${valid? 'valid' : 'invalid'} when input is "${email}" - "${password}"`, () => {
      component.registerForm.controls['email'].setValue(email);
      component.registerForm.controls['password'].setValue(password);
      component.registerForm.controls['confirmPassword'].setValue(confirmPassword);

      if(valid) {
        expect(component.registerForm.valid).toBeTruthy();
      } else {
        expect(component.registerForm.valid).toBeFalsy();
      }
    }));

    it('is invalid when password and confirmed password do not match', () => {
      component.registerForm.controls['email'].setValue('foo@example.com');
      component.registerForm.controls['password'].setValue('12345');
      component.registerForm.controls['confirmPassword'].setValue('1234');

      expect(component.registerForm.valid).toBeFalsy();
    })

    it('calls the current-user-service to register the user on submit', () => {
      const registerFunction = spyOn(currentUserService, 'register');

      component.registerForm.controls['email'].setValue('name@host.com');
      component.registerForm.controls['password'].setValue('valid_password');

      //component.register();

      //expect(registerFunction).toHaveBeenCalledWith('name@host.com', 'valid_password');
    })

  });
});
