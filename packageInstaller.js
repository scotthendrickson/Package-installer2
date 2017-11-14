var methods = {
  workingTest : function (someStr) {
    console.log(someStr);
  },

  installer : function (packArray) {
    if (packArray === null) {
      throw "No values submitted";
    }
    

  }

}

exports.data = methods;
