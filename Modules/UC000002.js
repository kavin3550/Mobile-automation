let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
 const data = require('./capability');

 const result='';

 //console.log(data);


 const desiredCaps = data.credentials;
//  const executionType = data.executionType;
const driver=data.driver;

desiredCaps.name = 'UC000002 - User Login';


driver
	.init(desiredCaps)
    .then( function() {
        console.log('UseCase 2');
        //console.log(driver.getSessionId());
    })

// 	//Write your custom code here
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

	//Correct Username and Password
	// it('should sign in with correct username and password', () => {

	//  driver.init(desiredCaps)
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
		return await searchInput.sendKeys('yogaraj@tenantscrm.com');
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
	//})

	.then(async function() {
		console.log(await driver.contexts());

		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name=", tab, 5 of 5"])',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[4]', asserters.isEnabled, 10000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
