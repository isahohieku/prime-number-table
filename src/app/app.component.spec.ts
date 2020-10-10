import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should generate table for first five prime numbers', () => {
    const generationAmount = 5;
    app.generateFirstNthPrimeNumbers(5);
    fixture.detectChanges();
    expect(app.primes.length).toEqual(generationAmount);
  });

  it('should generate table when user input the amount to be generated', fakeAsync(() => {

    spyOn(app, 'castToNumber');

    const Debug: DebugElement = fixture.debugElement;
    const InputElement: HTMLInputElement = Debug.nativeElement;
    const input = InputElement.querySelector('input');
    const ButtonElement: HTMLButtonElement = Debug.nativeElement;
    const button = ButtonElement.querySelector('button');
    input.value = '5';
    input.dispatchEvent(new Event('input'));

    button.click();
    tick();
    expect(app.castToNumber).toHaveBeenCalledTimes(1);

  }));
});
