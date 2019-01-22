import { FormControl } from '@angular/forms';
import Utils from './utils';

export class CustomValidators {

  static validateSpaceCharacters(fc: FormControl) {
    if (fc.value && fc.value.trim() === '') {
      return ({ validateSpaceCharacters: true });
    } else {
      return (null);
    }
  }

  static validatePhoneNumber(fc: FormControl) {
    if (!fc.value || fc.value.trim() == '' || fc.value.trim().replace(/\D+/g, '').length != 15) {
      return ({ validatePhoneNumber: true });
    } else {
      return (null);
    }
  }

  static validateFileType(fc: FormControl) {
    if (fc.value && fc.value.trim() === '') {
      const fileName = fc.value;
      const idxDot = fileName.lastIndexOf('.') + 1;
      const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile == 'jpg' || extFile == 'jpeg' || extFile == 'png' || extFile == 'gif') {
        return (null);
      } else {
        return ({ validateFileType: true });
      }
    } else {
      return (null);
    }
  }

  static validateFileSize(fc: FormControl) {
    if (fc.value && fc.value.trim() === '') {
      const fileName = fc.value;
      const idxDot = fileName.lastIndexOf('.') + 1;
      const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile == 'jpg' || extFile == 'jpeg' || extFile == 'png' || extFile == 'gif') {
        return (null);
      } else {
        return ({ validateFileSize: true });
      }
    } else {
      return (null);
    }
  }

  static validateArrayValue(fc: FormControl) {
    if (Utils.isValidInput(fc.value)) {
      return null;
    } else {
      return ({ validateArrayValue: true });
    }
  }
}