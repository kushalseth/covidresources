export function InitializeExtensionMethods() {
  if (typeof String.prototype.areEqual != "function") {
    String.prototype.areEqual = function (str) {
      var result = false;
      if (this && str) {
        result = this.toUpperCase() == str.toUpperCase();
      }
      return result;
    };
  }

  if (typeof String.prototype.areNotEqual != "function") {
    String.prototype.areNotEqual = function (str) {
      var result = false;
      if (this && str) {
        result = this.toUpperCase() != str.toUpperCase();
      }
      return result;
    };
  }

  if (typeof String.prototype.toBoolean != "function") {
    String.prototype.toBoolean = function () {
      switch (this.toLowerCase().trim()) {
        case "true":
        case "yes":
        case "1":
          return true;
        case "false":
        case "no":
        case "0":
        case null:
          return false;
        default:
          return false; // returning it false, as Boolean("false") returns ture.. So, it's better to fail the condition manually..
      }
    };
  }
}
