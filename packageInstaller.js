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
    packArray.foreach(function(value)) {
      if (typeof value !== 'string') {
        throw "Value is not a string";
      }

      var valArray = value.split(":");

      if (valArray.length !== 2){
        throw "Invalid entry";
      }
      
    }

  }

}

exports.data = methods;
