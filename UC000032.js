let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;
const executionType = data.executionType;
const enableScreenshot = executionType.enableScreenshot;

desiredCaps.name = 'UC000032 - Manager - Flexi Checkin';

driver
	.init(desiredCaps)
	/* IF NO PERMISSION ASKED - COMMENT THIS SECTION */
	.then(async function() {
		try{
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
		try{
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
		} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 15000);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Login"]]', asserters.isEnabled, 15000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return driver.waitForElementByXPath(
				'//XCUIElementTypeTextField[@name="uname"]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return driver.waitForElementByAccessibilityId('uname', asserters.isDisplayed && asserters.isEnabled, 5000);
	} catch (err) {}
	})
	.then(function(searchInput) {
		try{
		return driver.clear(searchInput);
	} catch (err) {}
	})
	.then(async function() {
		try{
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
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try{
		return await searchInput.sendKeys('5457457457@my.intellecto.io');
	} catch (err) {}
	})
	.then(function() {
		try{
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
		} catch (err) {}
	})
	.then(function(searchInput) {
		try{
		return driver.clear(searchInput);
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeSecureTextField[@name="password"]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
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
		try{
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
			// if(enableScreenshot){
			// 	console.log('Login screen - screenshot');
			// 	await driver.takeScreenshot();
			// }
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
	.then(async function() {
		try {
		
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="checkin"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//android.view.ViewGroup[@content-desc="checkin"]',
					asserters.isEnabled,
					10000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			if(enableScreenshot){
				console.log('Home screen - screenshot');
				await driver.takeScreenshot();
			}
			return await searchElement.click();
		} catch (err) {}
	})
	
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="btnflexi"]',
				asserters.isDisplayed && asserters.isEnabled,
				1000
			);
		else
			return await driver.waitForElementByAccessibilityId(
				'btnflexi',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
			if(enableScreenshot){
				console.log('Flexi checkin - screenshot');
				await driver.takeScreenshot();
			}
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
			if(enableScreenshot){
				console.log('Flexi checkin - screenshot 2');
				await driver.takeScreenshot();
			}
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="btnOk"]',
				asserters.isDisplayed && asserters.isEnabled,
				1000
			);
		else
			return await driver.waitForElementByAccessibilityId(
				'btnOk',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})


	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="checkin"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else
	// 		return await driver.waitForElementByXPath(
	// 			'//android.view.ViewGroup[@content-desc="checkin"]',
	// 			asserters.isEnabled,
	// 			4000
	// 		);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="btnflexi"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			1000
	// 		);
	// 	else
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'btnflexi',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="btnOk"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			1000
	// 		);
	// 	else
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'btnOk',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.

		try {
			console.log('Usecase Executed : UC000032');
			return driver.quit();
		} catch (e) {
			console.log('Usecase failed : UC000032');
			console.log(e);
		}
	})
	.done();
