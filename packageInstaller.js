var methods = {
  workingTest : function (someStr) {
    console.log(someStr);
  },

  installer : function (packArray) {
    if (packArray === null) {
      throw "No values submitted";
    }

    if (!Array.isArray(packArray)) {
      throw "Check your format cause this ain't no array";
    }

    var results = [];
    packArray.foreach(function(value) {
      if (typeof value !== 'string') {
        throw "Value is not a string";
      }

      var valArray = value.split(":");

      if (valArray.length !== 2){
        throw "Invalid entry";
      }

      var package = valArray[0].trim();
      var dependecy = valArray[1].trim();

      if (package.length === 0){
        throw "Invalid package entry";
      }

      if (!results[package]) {
        results[package] = [];
      }

      if (!results[dependecy] && dependecy.length > 0) {
        results[dependecy] = [];
      }

      if (dependecy.length > 0) {
        results[package].push(dependecy);
      }

      return results;

    })
  },

  sort : function(unsorted){

  }

}

exports.data = methods;
