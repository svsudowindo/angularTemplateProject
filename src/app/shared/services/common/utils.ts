import { environment } from '../../../../environments/environment';

export default class Utils {

  /**
   * Check if the opened device is Mobile (or Tablet) vs Desktop
   */
  static isSm(): boolean {
    return window.matchMedia(`(max-width: 959px)`).matches;
  }

  /**
   * Used to scroll to top of the page whenever pagination is done or a new page is invoked.
   */
  static gotoTopOfPage() {
    Utils.log('***** Going to top of page ******');
    window.scrollTo(0, 0);
    // TODO - create a diffent method or pass the value for scrol into view
    try {
      document.getElementById('adminRouterOutlet').scrollIntoView();
      document.getElementById('adminRouterOutlet').focus();
    } catch (e) {

    }
  }

  /**
   * Create a new guid value. Can be used for random generation of unique ids.
   */
  static newGuid() {
    let result = '';
    let i = '';
    for (let j = 0; j < 32; j++) {
      if (j === 8 || j === 12 || j === 16 || j === 20) {
        result = result + '-';
      }
      i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

  static trimTrailingCharacter(input, trailingChar) {
    if (Utils.isValidInput(input)) {
      if (input.indexOf(trailingChar)) {
        let output = input.trim();
        if (output.substr(output.length - 1, 1) === trailingChar) {
          output = output.substr(0, output.length - 1).trim();
        }
        return output;
      } else {
        return input.trim();
      }
    } else {
      return input;
    }
  }

  // static getPhraseErrorMessage(error, genericMessage) {
  //  Utils.log("Error in getPhraseErrorMessage: " + Utils.stringify(error));
  //  if (Utils.isValidInput(error["errorCode"])) {
  //    let lobjErrorRequest: any;
  //    lobjErrorRequest = Utils.getObjectFromArray(AppEnums.ERRORS, "CODE", parseInt(error["errorCode"]));
  //    if (Utils.isValidInput(lobjErrorRequest) && Utils.isValidInput(lobjErrorRequest.PHRASE)) {
  //      return lobjErrorRequest.PHRASE;
  //    } else {
  //      return "COMMON.ERRORS.GENERIC_SERVER_ERROR";
  //    }
  //  } else {
  //    if (Utils.isValidInput(genericMessage)) {
  //      return genericMessage;
  //    } else {
  //      return "COMMON.ERRORS.GENERIC_SERVER_ERROR";
  //    }
  //  }
  // }
  static getObjectFromArray(inputArray, key, id): any {
    const arrayOfKeys = Object.keys(inputArray);
    let lobjX;
    arrayOfKeys.forEach(element => {
      const lobjObj = inputArray[element];
      if (String(lobjObj[key]) === String(id)) {
        lobjX = lobjObj;
        return;
      }
    });
    return lobjX;
  }

  static convertArrayToCommaSeparatedString(pobjArray: any) {
    let outputText = '';
    if (Utils.isValidInput(pobjArray)) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < pobjArray.length; i++) {
        outputText = outputText + pobjArray[i].value + ', ';
      }
      outputText = outputText.trim();
      outputText = outputText.substring(0, outputText.length - 1);
    }
    return outputText;
  }

  static toIsoString(input: Date) {
    // tslint:disable-next-line:one-variable-per-declaration
    const tzo = -input.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = (num) => {
        const norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };
    return input.getFullYear() +
      '-' + pad(input.getMonth() + 1) +
      '-' + pad(input.getDate()) +
      'T' + pad(input.getHours()) +
      ':' + pad(input.getMinutes()) +
      ':' + pad(input.getSeconds()) +
      dif + pad(tzo / 60) +
      ':' + pad(tzo % 60);
  }

  static convertInputToString(input) {
    if (Utils.isValidInput(input)) {
      return String(input);
    } else {
      return '';
    }
  }

  static getDateInCustomFormat(inputDateString: string) {
    const inputDate = new Date(inputDateString);
    const date = String(inputDate.getDate() < 10 ? '0' + inputDate.getDate() : inputDate.getDate());
    const month = String((inputDate.getMonth() + 1) < 10 ? '0' + (inputDate.getMonth() + 1) : (inputDate.getMonth() + 1));
    const fullyear = String(inputDate.getFullYear());
    const hours = String(inputDate.getHours() < 10 ? '0' + inputDate.getHours() : inputDate.getHours());
    const minutes = String(inputDate.getMinutes() < 10 ? '0' + inputDate.getMinutes() : inputDate.getMinutes());
    const seconds = String(inputDate.getSeconds() < 10 ? '0' + inputDate.getSeconds() : inputDate.getSeconds());
    return (date + '-' + month + '-' + fullyear + ' ' + hours + ':' + minutes + ':' + seconds);
  }

  static getTime(inputString: string) {
    try {
      const arr = inputString.split(/[- :]/);
      const inputDateFormat = new Date(
        parseInt(arr[0], 10),
        parseInt(arr[1], 10) - 1,
        parseInt(arr[2], 10),
        parseInt(arr[3], 10),
        parseInt(arr[4], 10),
        parseInt(arr[5], 10));
      const inputDate = new Date(inputDateFormat);
      let hours: number = inputDate.getHours();
      const minutes: number = inputDate.getMinutes();
      let hoursString = '';
      let minutesString = '';
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hoursString = String(hours ? hours : 12); // the hour '0' should be '12;
      minutesString = String(minutes < 10 ? '0' + minutes : minutes);
      return hoursString + ':' + minutesString + ' ' + ampm;
    } catch (e) {
      Utils.log('Error in Utils : getTime ' + e);
    }
  }

  static getTimeFromString(inputString: string) {
    try {
      const arr = inputString.split(' ');
      const inputDateFormat = new Date(inputString);
      const inputDate = new Date(inputDateFormat);
      let hours: number = inputDate.getHours();
      const minutes: number = inputDate.getMinutes();
      let hoursString = '';
      let minutesString = '';
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hoursString = String(hours ? hours : 12); // the hour '0' should be '12;
      minutesString = String(minutes < 10 ? '0' + minutes : minutes);
      return hoursString + ':' + minutesString + ' ' + ampm;
    } catch (e) {
      Utils.log('Error in Utils : getTime ' + e);
    }
  }

  static convertStringToNumber(input: string, defaultValue: number) {
    if (Utils.isValidInput(input)) {
      return parseInt(input, 10);
    } else {
      return defaultValue;
    }
  }

  static getObjectByFilter(arrayToFilter: any, key: string, id: any) {
    return arrayToFilter.filter(x => x[key] === id);
  }

  static getObjectByFind(arrayToFilter: any, key: string, id: any) {
    return arrayToFilter.find(x => x[key] === id);
  }

  static getByIndex(customObject, index) {
    return customObject[Object.keys(customObject)[index]];
  }

  static getObjectNameByIndex(customObject, index) {
    return Object.keys(customObject)[index];
  }

  static log(message) {
    if (environment.logger.enabled === true) {
      console.log(message);
    }
  }

  static stringify(input) {
    try {
      if (environment.logger.enabled === true) {
        return JSON.stringify(input, null, '    ');
      } else {
        return JSON.stringify(input);
      }
    } catch (e) {
      Utils.log('Error in Utilities - stringify method: ' + e);
    }
  }

  static convertStringToDate(dateStr) {
    const parts = dateStr.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  static getISOStringFromServerDateString(dateStr) {
    if (Utils.isValidInput(dateStr)) {
      const dateonly = dateStr.split(' ');
      const parts = dateonly[0].split('-');
      return (new Date(parts[0], parts[1] - 1, parts[2])).toISOString();
    } else {
      return '';
    }
  }

  static getDateFromServerDateString(dateStr) {
    if (Utils.isValidInput(dateStr)) {
      const dateonly = dateStr.split(' ');
      const parts = dateonly[0].split('-');
      return new Date(parts[0], parts[1] - 1, parts[2]);
    } else {
      return new Date();
    }
  }

 static getDateBySeperator(dateStr, seperator) {
    try {
      const date = new Date(dateStr);
      const day = (date.getDate());
      const month = (date.getMonth() + 1);
      const year = (date.getFullYear());

      let dayString = '';
      let monthString = '';
      dayString = day < 10 ? '0' + day.toString() : day.toString();
      monthString = month < 10 ? '0' + month.toString() : month.toString();
      const result = dayString + seperator + monthString + seperator + year;
      return result;
    } catch (e) {
      return 'N/A';
    }
  }

  static convertStringToBoolean(input: string) {
    if (Utils.isValidInput(input)) {
      if (input.toLowerCase() === 'y' || input === '0' || input.toLowerCase() === 'true') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  static convertNumberToBoolean(input: number) {
    if (Utils.isValidInput(input)) {
      if (input === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  static cloneObject(input) {
    return JSON.parse(JSON.stringify(input));
  }

  static convertBooleanToString(input) {
    if (Utils.isValidInput(input)) {
      if (input === true || input === 'true') {
        return 'Y';
      } else {
        return 'N';
      }
    } else {
      return 'N';
    }
  }

  static convertBooleanToNumber(input) {
    if (Utils.isValidInput(input)) {
      if (input === true || input === 'true') {
        return 0;
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  }

  static preventNumberInput(event) {
    if (event.keyCode > 47 && event.keyCode < 58 || event.keyCode > 96 && event.keyCode < 123 || event.keyCode > 64 && event.keyCode < 91) {
      event.preventDefault();
    }
  }

  static replaceAll(str, find, replace) {
    return this.replaceText(str, new RegExp(find, 'g'), replace);
  }

  static replaceText(str, find, replace) {
    if (this.isValidInput(str)) {
      return str.replace(find, replace);
    } else {
      return str;
    }
  }

  static toDisallowCharacters(event, charCodeToDisallow) {
    const charCode = event.which || event.keyCode;
    if (charCode === charCodeToDisallow) {
      event.preventDefault();
    }
  }

  static datecompare(date1, sign, date2) {
    const day1 = date1.getDate();
    const mon1 = date1.getMonth();
    const year1 = date1.getFullYear();
    const day2 = date2.getDate();
    const mon2 = date2.getMonth();
    const year2 = date2.getFullYear();
    if (sign === '===') {
      if (day1 === day2 && mon1 === mon2 && year1 === year2) {
        return true;
      } else {
        return false;
      }
    } else if (sign === '>') {
      if (year1 > year2) {
        return true;
      } else if (year1 === year2 && mon1 > mon2) {
        return true;
      } else if (year1 === year2 && mon1 === mon2 && day1 > day2) {
        return true;
      } else {
        return false;
      }
    } else if (sign === '<') {
      if (year1 < year2) {
        return true;
      } else if (year1 === year2 && mon1 < mon2) {
        return true;
      } else if (year1 === year2 && mon1 === mon2 && day1 < day2) {
        return true;
      } else {
        return false;
      }
    }
  }

  static formatCurrencyValue(input) {
    return parseFloat(input).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  static isEmpty(input) {
    if (typeof input === 'undefined') {
      return true;
    } else {
      let lstrTempstring = String(input);
      lstrTempstring = lstrTempstring.trim();
      if (lstrTempstring === '' || lstrTempstring === 'undefined') {
        return true;
      } else {
        return false;
      }
    }
  }

  static isUndefined(input) {
    if (typeof input === 'undefined') {
      return true;
    } else {
      return false;
    }
  }

  static isNull(input) {
    if (input != null) {
      return false;
    } else {
      return true;
    }
  }

  static isValidInput(input) {
    if (Utils.isNull(input) || Utils.isUndefined(input) || Utils.isEmpty(input)) {
      return false;
    } else {
      return true;
    }
  }

  static isEmptyObject(myObject) {
    if (Object.keys(myObject).length > 0) {
      return false;
    } else {
      return true;
    }
  }

  static truncate(input, truncatetext) {
    if (Utils.isValidInput(input)) {
      return input.replace(truncatetext, '');
    } else {
      return input;
    }
  }

  static removeUnwantedSpaces(input) {
    return input
      .replace(/^\s\s*/, '')     // Remove Preceding white space
      .replace(/\s\s*$/, '');    // Remove Trailing white space
  }

  static escapeInput(input) {
    let output = input;
    output = this.replaceAll(output, '"', '\"');
    // tslint:disable-next-line:quotemark
    output = this.replaceAll(output, '\'', "\'");
    return output;
  }

  static returnEmptyStringForInvalidInput(input) {
    if (this.isValidInput(input)) {
      return input;
    } else {
      return '';
    }
  }

  static setFocus(element) {
    setTimeout(() => {
      document.getElementById(element).focus();
    }, 50);
  }

  // to avoid shallow copy and making into deep copy
  static avoidShallowClone(input) {
    return JSON.parse(JSON.stringify(input));
  }

  // get isObject or not
  static getIsObject(input: any) {
    if (typeof (input) !== 'string' && typeof (input) !== 'number' && typeof (input) !== 'boolean') {
      return true;
    } else {
      return false;
    }
  }

  static stringifyObjectWithNoQuotesOnKeys = (objFromJson) => {
    // In case of an array we'll stringify all objects.
    if (Array.isArray(objFromJson)) {
      return `[${
        objFromJson
          .map(obj => `${Utils.stringifyObjectWithNoQuotesOnKeys(obj)}`)
          .join(',')
        }]`;
    }
    // not an object, stringify using native function
    if (typeof objFromJson !== 'object' || objFromJson instanceof Date || objFromJson === null) {
      return JSON.stringify(objFromJson);
    }
    // Implements recursive object serialization according to JSON spec
    // but without quotes around the keys.
    return `{${
      Object
        .keys(objFromJson)
        .map(key => `${key}:${Utils.stringifyObjectWithNoQuotesOnKeys(objFromJson[key])}`)
        .join(',')
      }}`;
  }

  /**
   * Convert Any string to Title case from typescript
   * @param str Any string
   */
  static toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  
  static getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}
