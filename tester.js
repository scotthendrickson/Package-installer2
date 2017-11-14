var packageInstaller = require('./packageInstaller.js');

packageInstaller.data.workingTest("Hi there Bob!");

//These will be my test arrays
var testArray = null;
var testArray2 = ["KittenService: ", "Leetmeme: CyberPortal", "CyberPortal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "];
var testArray3 = ["KittenService: CamelCaser", "CamelCaser: "];
var testArray4 = ["KittenService: ", "Leetmeme: CyberPortal", "CyberPortal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"];

packageInstaller.data.installer(testArray);
