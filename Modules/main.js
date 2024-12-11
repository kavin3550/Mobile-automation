let useCasesArray = [1,3];

let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
// initialize the driver
//let driverMain = wd.Builder().usingServer(`https://yogaraj_ObFwau:htCqd4CJdqdyqeCnosDP@hub-cloud.browserstack.com/wd/hub`).withCapabilities(capabilities).build();

const data = require('./capability');

 const desiredCaps = data.credentials;
 const executionType = data.executionType;
 for (var ind=0;ind<useCasesArray.length;ind++){
	 console.log(useCasesArray[ind]);

	 let number=useCasesArray[ind].toString();
	if(number<10){
		number='0'+number;
		let result= require('./UC0000'+number);
	}
	else if(number>=10 && number<100){
		number='0'+number;
		let result= require('./UC000'+number);
	}

	 
 }


//console.log(driverMain);
//  let uc1= require('./UC000001');
// // console.log(uc1);
// let uc2= require('./UC000002');

// let uc3= require('./UC000003');
