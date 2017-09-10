import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { CounterComponent } from './counter.component';
import {By} from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;  //reference to the counter component
  let fixture: ComponentFixture<CounterComponent>;  //fixture holds reference to methods added
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {  
    //async: it's sure that the async finishes,
    // before any other tasks are executed

    //TestBed is imported and configures a module for testing environment
    //compileComponents used with async allows to load all counter components 
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents(); //this call is required when testing components using templateUrl
  }));
  //another beforeEach for setting all the components up
  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance; // this allows to access component funcitons automatically
    
    fixture.detectChanges(); //update the value after the test changes it
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should incrememnt the counter number by one', () => {
    //arrange
    const initialValue = component.counter;
    //act
    component.increment();
    const newValue = component.counter;
    //assert
    expect(newValue).toBeGreaterThan(initialValue);
  });
  
  it('should decrement the counter number by one', () => {
    //arrange
    const initialValue = component.counter;
    //act
    component.decrement();
    const newValue = component.counter;
    //assert
    expect(newValue).toBeLessThan(initialValue);
  });

  it('should display the counter number on screen, after being incremented', () =>{
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 2');
  })
  it('should display the counter number on screen, after being decremented', () =>{
    component.decrement();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 0');
  })

  it('should display the current number of the counter', () => {
    //assert that the text on screen is of number 1
    expect(htmlElement.textContent).toEqual('Number: 1');
  })
});