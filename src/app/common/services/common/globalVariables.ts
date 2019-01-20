import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariables {

  private paramsData: any;
  private retainParamValue: boolean = false;
 

  constructor() {
  }
  
  public getParameterData() {
    const output = this.paramsData;
    if (this.retainParamValue === false) {
      this.setParameterData(null);
    }
    return output;
  }

  public setParameterData(input, retainValue: boolean = false) {
    this.paramsData = input;
    this.retainParamValue = retainValue;
  }
  
}
