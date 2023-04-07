import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('computes factorial of 5 and gives 120',()=>{

    let service=new CalculatorService;
    let result= service.factorial();
    expect(result).toBe(120);
  })//end of it

it('takes the base and exponent and return the power',()=>{
  let service=new CalculatorService;
  let res=service.power(2,5);
  expect(res).toBe(32);
})


});//end of describe
