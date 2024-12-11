let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;

driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');

let credentials = {
	// Set your BrowserStack access credentials
	'browserstack.user' : 'yogaraj_ObFwau',
	'browserstack.key' : 'htCqd4CJdqdyqeCnosDP',
	  // Set app_url of the application under test
	  'app' : 'bs://cf0fef153674c4df91800b6119b0b7bfbcc0ea6a',
	  // Specify device and os_version for testing
	  'device' : 'iPhone 12 Pro Max',
	  'os_version' : '14',
	  project: 'Manzel 2 - New UI',
	  build: 'developer-new-IOS-build-1',
	  'browserstack.enableCameraImageInjection': 'true',
	'browserstack.gpsLocation': '11.20710,78.16802',
	'browserstack.timezone' : 'Kolkata',
	  //name: 'UC000002 - User Login',
	  platformName: 'ios'
	  }

	  // type =All, Module, Individual
	  //If Type is 'Module', then the moduleName='Attendance' or 'Leave' or 'Payroll'
	  let executionType={
		  'type': 'Module',
		  'moduleName': 'Attendance',
		  'approverRole':'SUPERVISOR',
		  'employeeUsername':'yogaraj@tenantscrm.com',
		  'employeePassword':'qweqwe',
		  'approverUsername':'supervisortest@gmail.com',
		  'approverPassword':'qweqwe'
	  }

module.exports = { credentials, executionType, driver }