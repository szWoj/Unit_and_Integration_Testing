import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add 1 to 4 and get 5', () => {
    
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const plusButton = container.find('#operator_add');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals')
    
    button1.simulate('click');
    plusButton.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    runningTotal.simulate('click');
    
    
    expect(runningTotal.text()).toEqual('5');
    
  })

  it('subtract 4 from 7 and get 3', () => {
    
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const minusButton = container.find('#operator-subtract');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals')
    
    button7.simulate('click');
    minusButton.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    runningTotal.simulate('click');
    
    
    expect(runningTotal.text()).toEqual('3');
    
  })

  it('multiply 3 by 5 and get 15', () => {
    
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals')
    
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    runningTotal.simulate('click');
    
    
    expect(runningTotal.text()).toEqual('15');
    
  })

  it('divide 21 by 7 and get 3', () => {
    
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals')
    
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    runningTotal.simulate('click');
    
    
    expect(runningTotal.text()).toEqual('3');
    
  })

  it('concatenate multiple number button clicks', () => {
    
    const button2 = container.find('#number2');
    const runningTotal = container.find('#running-total');
    
    
    button2.simulate('click');
    button2.simulate('click');
    runningTotal.simulate('click');
    
    
    expect(runningTotal.text()).toEqual('22');
    
  })

  it('chain multiple operations together', () => {
    
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button3 = container.find('#number3');
    const divideButton = container.find('#operator-divide');
    const plusButton = container.find('#operator_add');
    const minusButton = container.find('#operator-subtract');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals')
    
    button2.simulate('click');
    divideButton.simulate('click')
    button2.simulate('click');
    plusButton.simulate('click');
    button2.simulate('click');
    minusButton.simulate('click');
    button1.simulate('click');
    equals.simulate('click');

    runningTotal.simulate('click');
    
    // 2/2 + 2 - 1
    expect(runningTotal.text()).toEqual('2');
    
  })
})

