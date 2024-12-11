let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
/* NOTE: for IOS device only use OS>=13 */
desiredCaps = {
	// Set your BrowserStack access credentials
	'browserstack.user': 'yogaraj_ObFwau',
	'browserstack.key': 'htCqd4CJdqdyqeCnosDP',
	// Set app_url of the application under test
	app: 'bs://19d31de6c2b29439d3bba5dfbd575d597f4c1a26',
	// Specify device and os_version for testing
	device: 'iPhone 8',
	os_version: '13',
	// Set other BrowserStack capabilities
	project: 'Manzel 2 - New UI',
	build: 'developer-new-IOS-build-1',
	name: 'UC000065 - MANAGER - Selfie Checkin',
	'browserstack.enableCameraImageInjection' : 'true',
	'browserstack.gpsLocation': '11.20710,78.16802',
	'browserstack.timezone' : 'Kolkata',
	platformName: 'ios'
};
/* NOTE: for IOS device only use OS>=13 */
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');

// Test case for the BrowserStack app.
// If you have uploaded your app, update the test case here.
driver
	.init(desiredCaps)
	//Write your custom code here

		/* IF NO PERMISSION ASKED - COMMENT THIS SECTION */
		.then(async function() {
			console.log('IOS or ANDROID : ' + desiredCaps.platformName);
	
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			) {
				// driver
				// 	.sessionCapabilities()
				// 	.then(async function() {
				// 		let text = driver.hasElementByXPath('//XCUIElementTypeButton[@name="Allow While Using App"]', 4000);
				// 		console.log('new ios - Allow ' + text);
				if (parseFloat(desiredCaps.os_version) >= 13) {
					driver
						.sessionCapabilities()
						.then(async function() {
							return await driver.waitForElementByXPath(
								'(//XCUIElementTypeButton[@name="Allow While Using App"])',
								asserters.isDisplayed && asserters.isEnabled,
								4000
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
								4000
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
								'com.android.permissioncontroller:id/permission_allow_button',
								asserters.isDisplayed && asserters.isEnabled,
								10000
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
								4000
							);
						})
						.then(async function(searchElement) {
							return await searchElement.click();
						});
				}
			}
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 4000);
			else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Login"]]', asserters.isEnabled, 4000);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return driver.waitForElementByXPath(
					'//XCUIElementTypeTextField[@name="uname"]',
					asserters.isDisplayed && asserters.isEnabled,
					1000
				);
			else return driver.waitForElementByAccessibilityId('uname', asserters.isDisplayed && asserters.isEnabled, 1000);
		})
		.then(function(searchInput) {
			return driver.clear(searchInput);
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeTextField[@name="uname"]',
					asserters.isDisplayed && asserters.isEnabled,
					1000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'uname',
					asserters.isDisplayed && asserters.isEnabled,
					1000
				);
		})
		.then(async function(searchInput) {
			return await searchInput.sendKeys('5457457457');
		})
		.then(function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return driver.waitForElementByXPath(
					'//XCUIElementTypeSecureTextField[@name="password"]',
					asserters.isDisplayed && asserters.isEnabled,
					3000
				);
			else
				return driver.waitForElementByAccessibilityId(
					'password',
					asserters.isDisplayed && asserters.isEnabled,
					1000
				);
		})
		.then(function(searchInput) {
			return driver.clear(searchInput);
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeSecureTextField[@name="password"]',
					asserters.isDisplayed && asserters.isEnabled,
					3000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'password',
					asserters.isDisplayed && asserters.isEnabled,
					1000
				);
		})
		.then(async function(searchInput) {
			if (parseFloat(desiredCaps.os_version) >= 13 && desiredCaps.platformName != 'Android') {
				return await searchInput.sendKeys('qweqwe\n');
			} else if (desiredCaps.platformName == 'Android') {
				return await searchInput.sendKeys('qweqwe');
			} else {
				return await searchInput.sendKeys('qweqwe\n');
			}
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="submit"])[2]',
					asserters.isDisplayed && asserters.isEnabled,
					3000
				);
			else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 1000);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="checkin"]',
					asserters.isDisplayed && asserters.isEnabled,
					4000
				);
			else
				return await driver.waitForElementByXPath(
					'//android.view.ViewGroup[@content-desc="checkin"]',
					asserters.isEnabled,
					4000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				/*return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="btnselfiecheckin"]',*/
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="btnselfiecheckin"])',
					asserters.isDisplayed && asserters.isEnabled,
					2000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'btnselfiecheckin',
					asserters.isDisplayed && asserters.isEnabled,
					4000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		// .then(async function(searchElement) {
		// 	return await driver.acceptAlert(15000);
		// })
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeButton[@name="OK"])',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
			else
				return await driver.waitForElementByXPath(
					'//android.widget.Button[@text="Allow"]',
					asserters.isEnabled,
					5000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			await driver.execute(
				'browserstack_executor: {"action":"cameraImageInjection", "arguments": {"imageUrl" : "media://46852ace95d1c806d136398547b42e219bfb3b1f"}}'
			);
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="btnselfiecheckin"])[4]',
					asserters.isDisplayed && asserters.isEnabled,
					4000
				);
			else
				return await driver.waitForElementByXPath(
					'//ancestor::*[*[@text="Take Selfie"]]',
					asserters.isDisplayed && asserters.isEnabled,
					4000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			//Camera
			console.log('CAMERA');
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await 'adb shell input keyevent 10'
			else return await driver.pressKeycode(10);
			
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="btnOk"]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'btnOk',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="checkin"]',
					asserters.isDisplayed && asserters.isEnabled,
					4000
				);
			else
				return await driver.waitForElementByXPath(
					'//android.view.ViewGroup[@content-desc="checkin"]',
					asserters.isEnabled,
					4000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			await driver.execute(
				'browserstack_executor: {"action":"cameraImageInjection", "arguments": {"imageUrl" : "media://46852ace95d1c806d136398547b42e219bfb3b1f"}}'
			);
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="btnselfiecheckin"]',
					asserters.isDisplayed && asserters.isEnabled,
					3000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'btnselfiecheckin',
					asserters.isDisplayed && asserters.isEnabled,
					4000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="btnselfiecheckin"])[4]',
					asserters.isDisplayed && asserters.isEnabled,
					2000
				);
			else
				return await driver.waitForElementByXPath(
					'//ancestor::*[*[@text="Take Selfie"]]',
					asserters.isDisplayed && asserters.isEnabled,
					4000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
		.then(async function() {
			//Camera
			console.log('CAMERA');
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await 'adb shell input keyevent 10'
			else return await driver.pressKeycode(10);
		})
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="btnOk"]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
			else
				return await driver.waitForElementByAccessibilityId(
					'btnOk',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		})
		.then(async function(searchElement) {
			return await searchElement.click();
		})
	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
