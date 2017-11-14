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


  }

}

exports.data = methods;
