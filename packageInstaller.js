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
    packArray.forEach(function(value) {
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
    })
    return methods.sort(results).join(", ");
  },

  sort : function(unsorted){
    var results = [];
    var sorted = {};

    Object.keys(unsorted).forEach(function(pack){
      subSort(pack, []);
    });

    function subSort(package, dependecies){
      if (sorted[package]) {
        return;
      }

      dependecies.push(package);

      var pkg = unsorted[package];
      pkg.forEach(function(dependecy) {
        if (dependecies.indexOf(dependecy) >= 0) {
          throw "Circular Reference";
        }

        subSort(dependecy, dependecies);
      });
      sorted[package] = true;
      results.push(package);
    }

    return results;
  }

}

exports.data = methods;
