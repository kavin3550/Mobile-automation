let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;
const executionType = data.executionType;
const enableScreenshot = executionType.enableScreenshot;
//const driver=data.driver;

desiredCaps.name = 'UC000001 - Get Started to Login';
// desiredCaps = {
//   // Set your BrowserStack access credentials
//   'browserstack.user' : 'yogaraj_ObFwau',
//   'browserstack.key' : 'htCqd4CJdqdyqeCnosDP',
//     // Set app_url of the application under test
// //   'app' : 'bs://19d31de6c2b29439d3bba5dfbd575d597f4c1a26',
// //   // Specify device and os_version for testing
// //   'device' : 'iPhone 8',
// //   'os_version' : '11',

// 'app' : 'bs://7cbd3467c169d2d7722944f7f07517ce643b8fef',
// // Specify device and os_version for testing
// 'device' : 'Samsung Galaxy A51',
// 'os_version' : '10.0',
// 	// Set other BrowserStack capabilities
// 	project: 'Manzel 2 - New UI',
// 	build: 'developer-new-IOS-build-1',
// 	name: 'UC000001 - Get Started to Login',
// 	platformName: 'Android'
// };
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
//driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');
// Test case for the BrowserStack sample Android app.

//UC000001 - Validate User screen

driver
	.init(desiredCaps)
	//Write your custom code here
	.then(async function() {
		try {
			console.log('IOS or ANDROID : ' + desiredCaps.platformName);

			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			) {
				if (parseFloat(desiredCaps.os_version) >= 13) {
					driver
						.sessionCapabilities()
						.then(async function() {
							return await driver.waitForElementByXPath(
								'(//XCUIElementTypeButton[@name="Allow While Using App"])',
								asserters.isDisplayed && asserters.isEnabled,
								10000
							);
						})
						.then(async function(searchElement) {
							return await searchElement.click();
						});
				} else {
					driver
						.sessionCapabilities()
						.then(async function() {
							return await driver.waitForElementByAccessibilityId(
								'Allow',
								asserters.isDisplayed && asserters.isEnabled,
								15000
							);
						})
						.then(async function(searchElement) {
							return await searchElement.click();
						});
				}
				// });
			} else {
				if (parseFloat(desiredCaps.os_version) <= 9) {
					driver
						.sessionCapabilities()
						.then(async function() {
							return await driver.waitForElementById(
								'com.android.packageinstaller:id/permission_allow_button',
								asserters.isDisplayed && asserters.isEnabled,
								15000
							);
						})
						.then(async function(searchElement) {
							return await searchElement.click();
						});
				} else {
					//return await driver.acceptAlert(4000);
					driver
						.sessionCapabilities()
						.then(async function() {
							return await driver.waitForElementById(
								'com.android.permissioncontroller:id/permission_allow_foreground_only_button',
								asserters.isDisplayed && asserters.isEnabled,
								15000
							);
						})
						.then(async function(searchElement) {
							return await searchElement.click();
						});
				}
			}
		} catch (err) {}
	})
	.then(function() {
		try {
			driver
				.sessionCapabilities()
				.then(function() {
					try {
						return driver.waitForElementByAccessibilityId(
							'Allow',
							asserters.isDisplayed && asserters.isEnabled,
							10000
						);
					} catch (err) {}
				})
				.then(function(searchElement) {
					try {
						return searchElement.click();
					} catch (err) {}
				});
		} catch (err) {}
	})
	
	
/* Landing page - Screenshot */
	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 15000);
			else
				return await driver.waitForElementByXPath(
					'//ancestor::*[*[@text="Login"]]',
					asserters.isEnabled,
					15000
				);
		} catch (err) {}
	})
	.then(function() {
		try {
			driver
				.sessionCapabilities()
				.then(function() {
					try {
						return driver.waitForElementByAccessibilityId(
							'Allow',
							asserters.isDisplayed && asserters.isEnabled,
							10000
						);
					} catch (err) {}
				})
				.then(function(searchElement) {
					try {
						return searchElement.click();
					} catch (err) {}
				});
		} catch (err) {}
	})
	.then(async function() {
		try {
			console.log(enableScreenshot+'enableScreenshot');
			if(enableScreenshot){
			console.log('screenshot');
			return await driver.takeScreenshot();
			}
			else{
				console.log('No screenshot');
			}
		} catch (err) {}
	})
	/* ENDS - Landing page - Screenshot */
	
	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 15000);
			else
				return await driver.waitForElementByXPath(
					'//ancestor::*[*[@text="Login"]]',
					asserters.isEnabled,
					15000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			return await searchElement.click();
		} catch (err) {}
	})
	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		try {
			console.log('Usecase Executed : UC000001');
			return driver.quit();
		} catch (e) {
			console.log('Usecase failed : UC000001');
			console.log(e);
		}
	})
	.done();
