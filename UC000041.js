let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;

desiredCaps = {
	// Set your BrowserStack access credentials
	'browserstack.user': 'yogaraj_ObFwau',
	'browserstack.key': 'htCqd4CJdqdyqeCnosDP',
	// Set app_url of the application under test
	app: 'bs://4c439dc1a0197cb3c2f523768e6e43d22f6fce7a',
	// Specify device and os_version for testing
	device: 'Vivo Y50',
	os_version: '10.0',
	// Set other BrowserStack capabilities
	project: 'Manzel 2 - New UI',
	build: 'developer-new-ANDROID-build-1',
	name: 'UC000041 - Employee Manual Attendance created by Leadership ',
	platformName: 'Android'
};
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');

// Test case for the BrowserStack sample iOS app.
// If you have uploaded your app, update the test case here.
driver
	.init(desiredCaps)
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
							10000
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
					.then(function() {
						return driver.waitForElementById(
							'com.android.permissioncontroller:id/permission_allow_button',
							asserters.isDisplayed && asserters.isEnabled,
							15000
						);
					})
					.then(function(searchElement) {
						return searchElement.click();
					});
			} else {
				//return await driver.acceptAlert(4000);
				driver
					.sessionCapabilities()
					.then( function() {
						return  driver.waitForElementById(
							'com.android.permissioncontroller:id/permission_allow_foreground_only_button',
							asserters.isDisplayed && asserters.isEnabled,
							15000
						);
					})
					.then( function(searchElement) {
						return  searchElement.click();
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
		return await searchInput.sendKeys('99994554593@my.intellecto.io');
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
				'(//XCUIElementTypeOther[@name="attendancehistory"])[2]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="Attendance"]]',
				asserters.isEnabled,
				4000
			);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="employeeattendance"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="Employee Attendance"]]',
				asserters.isEnabled,
				4000
			);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByAccessibilityId(
				'txtsearch',
				asserters.isDisplayed && asserters.isEnabled,
				1000
			);
	})
	.then(async function(searchInput) {
		if (desiredCaps.platformName == 'Android') return await searchInput.sendKeys('Yogaraj');
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByAccessibilityId('btnfilter', asserters.isEnabled, 10000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath(
				'//android.widget.TextView[@text="Yogaraj M"]',
				asserters.isEnabled,
				4000
			);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="10"]]', asserters.isEnabled, 2000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="Update"]]', asserters.isEnabled, 2000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByAccessibilityId('presentcomments', asserters.isEnabled, 1000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.sendKeys('Test Automation Present entry');
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 2000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="0"]]', asserters.isEnabled, 2000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	// Start Time - Hour Selection in ANDROID
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath(
				'//android.widget.CheckedTextView[@text="10"]',
				asserters.isEnabled,
				2000
			);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="Done"]]', asserters.isEnabled, 2000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByAccessibilityId('btnupdate', asserters.isEnabled, 2000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByAccessibilityId('btnOk', asserters.isEnabled, 2000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
