import { Injectable } from '@angular/core';
import { AppLoaderService } from './../../components/componentsAsService/app-loader/app-loader.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariables {

  private paramsData: any;
  private retainParamValue = false;

  constructor(public loader: AppLoaderService) { }
  public getParameterData() {
    const output = this.paramsData;
    if (this.retainParamValue === false) {
      this.setParameterData(null);
    }
    return output;
  }

  // single time set method
  // @input => any data value either an object or a value
  // @retainvalue => weather the data should present or not
  public setParameterData(input, retainValue = false) {
    this.paramsData = input;
    this.retainParamValue = retainValue;
  }

  open() {
    this.loader.open();
  }

  close() {
    this.loader.close();
  }

}
