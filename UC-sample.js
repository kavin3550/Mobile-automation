// let wd = require('wd');
// let assert = require('assert');
// let asserters = wd.asserters;
// let Q = wd.Q;

// desiredCaps = {
// 	// Set your BrowserStack access credentials
// 	'browserstack.user' : 'yogaraj_ObFwau',
// 	'browserstack.key' : 'htCqd4CJdqdyqeCnosDP',
// 	  // Set app_url of the application under test
// 	'app' : 'bs://25dc42651656498417dd02dd08a8f11d7629a03e',
// 	// Specify device and os_version for testing
// 	'device' : 'iPhone 11',
// 	'os_version' : '13',
// 	// Set other BrowserStack capabilities
// 	project: 'Test Manzel 2 - New UI',
// 	build: 'Test developer-new-ANDROID-build-1',
// 	name: 'UC000017 - Employee - Checkin and Scan QR code',
// 	'browserstack.enableCameraImageInjection' : 'true',
// 	'browserstack.gpsLocation': '11.20710,78.16802',
// 	platformName: 'ios'
// };
// // Initialize the remote Webdriver using BrowserStack remote URL
// // and desired capabilities defined above
// driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');

// // Test case for the BrowserStack app.
// // If you have uploaded your app, update the test case here.
// driver
// 	.init(desiredCaps)
// 	/* IF NO PERMISSION ASKED - COMMENT THIS SECTION */
// 	.then(async function() {
// 		console.log('IOS or ANDROID : ' + desiredCaps.platformName);

// 		if (
// 			desiredCaps.platformName == 'iOS' ||
// 			desiredCaps.platformName == 'ios' ||
// 			desiredCaps.platformName == 'IOS'
// 		) {
// 			// driver
// 			// 	.sessionCapabilities()
// 			// 	.then(async function() {
// 			// 		let text = driver.hasElementByXPath('//XCUIElementTypeButton[@name="Allow While Using App"]', 4000);
// 			// 		console.log('new ios - Allow ' + text);
// 			if (parseFloat(desiredCaps.os_version) >= 13) {
// 				driver
// 					.sessionCapabilities()
// 					.then(async function() {
// 						return await driver.waitForElementByXPath(
// 							'(//XCUIElementTypeButton[@name="Allow While Using App"])',
// 							asserters.isDisplayed && asserters.isEnabled,
// 							4000
// 						);
// 					})
// 					.then(async function(searchElement) {
// 						return await searchElement.click();
// 					});
// 			} else {
// 				driver
// 					.sessionCapabilities()
// 					.then(async function() {
// 						return await driver.waitForElementByAccessibilityId(
// 							'Allow',
// 							asserters.isDisplayed && asserters.isEnabled,
// 							4000
// 						);
// 					})
// 					.then(async function(searchElement) {
// 						return await searchElement.click();
// 					});
// 			}
// 			// });
// 		} else {
// 			if (parseFloat(desiredCaps.os_version) <= 9) {
// 				driver
// 					.sessionCapabilities()
// 					.then(async function() {
// 						return await driver.waitForElementById(
// 							'com.android.permissioncontroller:id/permission_allow_button',
// 							asserters.isDisplayed && asserters.isEnabled,
// 							10000
// 						);
// 					})
// 					.then(async function(searchElement) {
// 						return await searchElement.click();
// 					});
// 			} else {
// 				//return await driver.acceptAlert(4000);
// 				driver
// 					.sessionCapabilities()
// 					.then(async function() {
// 						return await driver.waitForElementById(
// 							'com.android.permissioncontroller:id/permission_allow_foreground_only_button',
// 							asserters.isDisplayed && asserters.isEnabled,
// 							4000
// 						);
// 					})
// 					.then(async function(searchElement) {
// 						return await searchElement.click();
// 					});
// 			}
// 		}
// 	})
// 	.then(async function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 4000);
// 		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Login"]]', asserters.isEnabled, 4000);
// 	})
// 	.then(async function(searchElement) {
// 		return await searchElement.click();
// 	})
// 	.then(function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return driver.waitForElementByXPath(
// 				'//XCUIElementTypeTextField[@name="uname"]',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				1000
// 			);
// 		else return driver.waitForElementByAccessibilityId('uname', asserters.isDisplayed && asserters.isEnabled, 1000);
// 	})
// 	.then(function(searchInput) {
// 		return driver.clear(searchInput);
// 	})
// 	.then(async function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return await driver.waitForElementByXPath(
// 				'//XCUIElementTypeTextField[@name="uname"]',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				1000
// 			);
// 		else
// 			return await driver.waitForElementByAccessibilityId(
// 				'uname',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				1000
// 			);
// 	})
// 	.then(async function(searchInput) {
// 		return await searchInput.sendKeys('yogaraj@tenantscrm.com');
// 	})
// 	.then(function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return driver.waitForElementByXPath(
// 				'//XCUIElementTypeSecureTextField[@name="password"]',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				3000
// 			);
// 		else
// 			return driver.waitForElementByAccessibilityId(
// 				'password',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				1000
// 			);
// 	})
// 	.then(function(searchInput) {
// 		return driver.clear(searchInput);
// 	})
// 	.then(async function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return await driver.waitForElementByXPath(
// 				'//XCUIElementTypeSecureTextField[@name="password"]',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				3000
// 			);
// 		else
// 			return await driver.waitForElementByAccessibilityId(
// 				'password',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				1000
// 			);
// 	})
// 	.then(async function(searchInput) {
// 		if (parseFloat(desiredCaps.os_version) >= 13 && desiredCaps.platformName != 'Android') {
// 			return await searchInput.sendKeys('qweqwe\n');
// 		} else if (desiredCaps.platformName == 'Android') {
// 			return await searchInput.sendKeys('qweqwe');
// 		} else {
// 			return await searchInput.sendKeys('qweqwe\n');
// 		}
// 	})
// 	.then(async function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return await driver.waitForElementByXPath(
// 				'(//XCUIElementTypeOther[@name="submit"])[2]',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				3000
// 			);
// 		else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 1000);
// 	})
// 	.then(async function(searchElement) {
// 		return await searchElement.click();
// 	})
// 	.then(async function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return await driver.waitForElementByXPath(
// 				'//XCUIElementTypeOther[@name="checkin"]',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				4000
// 			);
// 		else
// 			return await driver.waitForElementByXPath(
// 				'//android.view.ViewGroup[@content-desc="checkin"]',
// 				asserters.isEnabled,
// 				4000
// 			);
// 	})
// 	.then(async function(searchElement) {
// 		return await searchElement.click();
// 	})
// 	.then(async function() {
// 		await driver.execute("browserstack_executor: {\"action\":\"cameraImageInjection\", \"arguments\": {\"imageUrl\" : \"media://db4a81428067592092d928afd94c3bc996bb378a\"}}")
// 		//await driver.execute("browserstack_executor: {\"action\":\"cameraImageInjection\", \"arguments\": {\"imageUrl\" : \"media://db457b6c57115528c4f7cbc6bca6841206ae7c85\"}}")
// 	})
// 	.then(async function() {
// 		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
// 			return await driver.waitForElementByXPath(
// 				'//XCUIElementTypeOther[@name="btnscanqr"]',
// 				asserters.isDisplayed && asserters.isEnabled,
// 				1000
// 			);
// 		else
// 			return await driver.waitForElementByXPath(
// 				'//android.view.ViewGroup[@content-desc="btnscanqr"]',
// 				asserters.isEnabled,
// 				4000
// 			);
// 	})
// 	.then(async function(searchElement) {
// 		return await searchElement.click();
// 	})
// 	/* IF NO PERMISSION ASKED - COMMENT THIS SECTION */
// 	.then(async function() {
// 		console.log('Scan QR' + desiredCaps.platformName);

// 		if (
// 			desiredCaps.platformName == 'iOS' ||
// 			desiredCaps.platformName == 'ios' ||
// 			desiredCaps.platformName == 'IOS'
// 		) {
// 			// driver
// 			// 	.sessionCapabilities()
// 			// 	.then(async function() {
// 			// 		let text = driver.hasElementByXPath('//XCUIElementTypeButton[@name="Allow While Using App"]', 4000);
// 			// 		console.log('new ios - Allow ' + text);
// 			if (parseFloat(desiredCaps.os_version) >= 13) {
// 				driver
// 					.sessionCapabilities()
// 					.then(async function() {
// 						return await driver.waitForElementByXPath(
// 							'(//XCUIElementTypeButton[@name="Allow While Using App"])',
// 							asserters.isDisplayed && asserters.isEnabled,
// 							4000
// 						);
// 					})
// 					.then(async function(searchElement) {
// 						return await searchElement.click();
// 					});
// 			} else {
// 				driver
// 					.sessionCapabilities()
// 					.then(async function() {
// 						return await driver.waitForElementByAccessibilityId(
// 							'Allow',
// 							asserters.isDisplayed && asserters.isEnabled,
// 							10000
// 						);
// 					})
// 					.then(async function(searchElement) {
// 						return await searchElement.click();
// 					});
// 			}
// 			// });
// 		} else {
// 			return await driver.acceptAlert(15000);
// 		}
// 	})
// 	.then(async function(){
// 		//Camera
// 		return await driver.pressKeycode(10);
// 		console.log('CAMERA');
// 	})
	
// 	.fin(function() {
// 		// Invoke driver.quit() after the test is done to indicate that the test is completed.
// 		return driver.quit();
// 	})
// 	.done();



let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;
//const driver=data.driver;

desiredCaps.name = 'UC000100 - Get Started - Register as a Company';

// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
//driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');

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
