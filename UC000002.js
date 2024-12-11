let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;
const executionType = data.executionType;
const enableScreenshot = executionType.enableScreenshot;

desiredCaps.name = 'UC000002 - User Login';

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
/* Landing page - Screenshot */
// .then(async function() {
// 	try {
// 		if (
// 			desiredCaps.platformName == 'iOS' ||
// 			desiredCaps.platformName == 'ios' ||
// 			desiredCaps.platformName == 'IOS'
// 		)
// 			return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 15000);
// 		else
// 			return await driver.waitForElementByXPath(
// 				'//ancestor::*[*[@text="Login"]]',
// 				asserters.isEnabled,
// 				15000
// 			);
// 	} catch (err) {}
// })
// .then(function() {
// 	try {
// 		driver
// 			.sessionCapabilities()
// 			.then(function() {
// 				try {
// 					return driver.waitForElementByAccessibilityId(
// 						'Allow',
// 						asserters.isDisplayed && asserters.isEnabled,
// 						10000
// 					);
// 				} catch (err) {}
// 			})
// 			.then(function(searchElement) {
// 				try {
// 					return searchElement.click();
// 				} catch (err) {}
// 			});
// 	} catch (err) {}
// })
// .then(async function() {
// 	try {
// 		console.log(enableScreenshot+'enableScreenshot');
// 		if(enableScreenshot){
// 		console.log('screenshot');
// 		return await driver.takeScreenshot();
// 		}
// 		else{
// 			console.log('No screenshot');
// 		}
// 	} catch (err) {}
// })
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
	//Correct Username and Password
	// it('should sign in with correct username and password', () => {

		// .then( function() {
		// 	try {
		// 		if(enableScreenshot){
		// 			console.log('Login screenshot');
		// 			return driver.takeScreenshot();
		// 		}
		// 	}
		// 	catch{}
		// })
	//  driver.init(desiredCaps)
	.then(function() {
		try {
		
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return driver.waitForElementByXPath(
					'//XCUIElementTypeTextField[@name="uname"]',
					asserters.isDisplayed && asserters.isEnabled,
					15000
				);
			else
				return driver.waitForElementByAccessibilityId(
					'uname',
					asserters.isDisplayed && asserters.isEnabled,
					15000
				);
		} catch (err) {}
	})
	.then(function(searchInput) {
		try {
			return driver.clear(searchInput);
		} catch (err) {}
	})
	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeTextField[@name="uname"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'uname',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			return await searchInput.sendKeys('yogaraj@tenantscrm.com');
		} catch (err) {}
	})
	
	.then(function() {
		try {
			if(enableScreenshot){
				console.log('Login screenshot');
				driver.takeScreenshot();
			}
			
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return driver.waitForElementByXPath(
					'//XCUIElementTypeSecureTextField[@name="password"]',
					asserters.isDisplayed && asserters.isEnabled,
					3000
				);
			else
				return driver.waitForElementByAccessibilityId(
					'password',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		} catch (err) {}
	})
	.then(function(searchInput) {
		try {
			return driver.clear(searchInput);
		} catch (err) {}
	})
	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeSecureTextField[@name="password"]',
					asserters.isDisplayed && asserters.isEnabled,
					3000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'password',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (parseFloat(desiredCaps.os_version) >= 13 && desiredCaps.platformName != 'Android') {
				return await searchInput.sendKeys('qweqwe\n');
			} else if (desiredCaps.platformName == 'Android') {
				return await searchInput.sendKeys('qweqwe');
			} else {
				return await searchInput.sendKeys('qweqwe\n');
			}
		} catch (err) {}
	})
	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByAccessibilityId(
					'submit',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 5000);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			return await searchElement.click();
		} catch (err) {}
	})
	//})

	.then(async function() {
		try {
			console.log(await driver.contexts());
			// if(enableScreenshot){
			// 	console.log('Home screen screenshot');
			// 	await driver.takeScreenshot();
			// }
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeButton[@name=", tab, 5 of 5"])',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[4]',
					asserters.isEnabled,
					10000
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
			console.log('Usecase Executed : UC000002');
			return driver.quit();
		} catch (e) {
			console.log('Usecase failed : UC000002');
			console.log(e);
		}
	})
	.done();
