import {Injectable} from '@angular/core';
// import logdown = require('logdown');
// const logdo
// wn = require('logdown');
import * as logdown from 'logdown';

// https://github.com/caiogondim/logdown.js
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private components = {
    global: logdown('[GLOBAL]')
  };

  constructor() {
    this.components.global.state.isEnabled = true;
  }

  /**
   * registers the component
   *
   * @param name:
   */
  registerComponent(name: string) {
    const logger = logdown(`[${name}]`);
    logger.state.isEnabled = true;
    this.components[name] = logger;
  }

  /**
   * return back the logger
   */
  getLogger = (name: string = 'global') => this.components.hasOwnProperty(name) ? this.components[name] : this.components.global;
}
