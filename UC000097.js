let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;

desiredCaps = {
  // Set your BrowserStack access credentials
  'browserstack.user' : 'yogaraj_ObFwau',
  'browserstack.key' : 'htCqd4CJdqdyqeCnosDP',
    // Set app_url of the application under test
	'app' : 'bs://cca400798bd82c3bb62303a0d3ab5d143919d5b3',
	// Specify device and os_version for testing
	'device' : 'iPhone 12 Pro Max',
	'os_version' : '14',

	// 'app' : 'bs://7cbd3467c169d2d7722944f7f07517ce643b8fef',
	// // Specify device and os_version for testing
	// 'device' : 'Samsung Galaxy S20 Ultra',
	// 'os_version' : '10.0',
	// Set other BrowserStack capabilities
	project: 'Manzel 2 - New UI',
	build: 'developer-new-ANDROID-build-1',
	name: 'UC000097 - Manager - Payroll and Payslip',
	 platformName: 'ios'
};
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');
// Test case for the BrowserStack Android app.
driver
	.init(desiredCaps)
	//Write your custom code here
	.then(async function() {
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
							15000
						);
					})
					.then(async function(searchElement) {
						return await searchElement.click();
					});
			}
		}
	})
	.then( function() {
			driver
				.sessionCapabilities()
				.then(function() {
					return driver.waitForElementByAccessibilityId(
						'Allow',
						asserters.isDisplayed && asserters.isEnabled,
						10000
					);
				})
				.then(function(searchElement) {
					return searchElement.click();
				});
	})



	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 15000);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Login"]]', asserters.isEnabled, 15000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return driver.waitForElementByXPath(
				'//XCUIElementTypeTextField[@name="uname"]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return driver.waitForElementByAccessibilityId('uname', asserters.isDisplayed && asserters.isEnabled, 5000);
	})
	.then(function(searchInput) {
		return driver.clear(searchInput);
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeTextField[@name="uname"]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else
			return await driver.waitForElementByAccessibilityId(
				'uname',
				asserters.isDisplayed && asserters.isEnabled,
				5000
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
				10000
			);
		else
			return driver.waitForElementByAccessibilityId(
				'password',
				asserters.isDisplayed && asserters.isEnabled,
				5000
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
				5000
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
		return await driver.waitForElementByAccessibilityId(
			'submit',
			asserters.isDisplayed && asserters.isEnabled,
			10000
		  );
		else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 5000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'payroll',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Payroll"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		//let contexts = await driver.context("WEBVIEW");
		//console.log(JSON.stringify(contexts));

		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'mypayroll',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Payroll" or @text="My payroll"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'01 January 2022 - 31 January 2022',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="10 January 2022 - 20 January 2022"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

	.then(async function() {
		console.log('Click Download Button');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="chooseleavetype"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				15000
			);
		else return await driver.waitForElementByAccessibilityId('btnflexi', asserters.isEnabled, 15000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
