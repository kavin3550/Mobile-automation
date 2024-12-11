let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;

/* Customized Code */
let locationPermission = false;
let storagePermission = false;
const arrWorkDays = [ 'Sunday' ];
//, 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'
//const arrWeekoff = [ 'Friday' ];

desiredCaps = {
	// Set your BrowserStack access credentials
	'browserstack.user': 'yogaraj_ObFwau',
	'browserstack.key': 'htCqd4CJdqdyqeCnosDP',
	// Set app_url of the application under test
	app: 'bs://19d31de6c2b29439d3bba5dfbd575d597f4c1a26',
	// Specify device and os_version for testing
	device: 'iPhone 8',
	os_version: '11',
	// Set other BrowserStack capabilities
	project: 'Test Manzel 2 - New UI',
	build: 'Test developer-new-IOS-build-1',
	name: 'UC000061 - LEADERSHIP - Create Schedule',
	platformName: 'ios'
};
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');
// Test case for the BrowserStack app.

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
	//})

	.then(async function() {
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
	.then(async function() {
		// Shift Details
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="shiftdetails"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="Shift Settings"]]',
				asserters.isEnabled,
				3000
			);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@label="View"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="View"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="goback"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByAccessibilityId('goback', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@label="Create"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Create"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	//SUNDAY
	.then(async function() {
		console.log('Day Name : Sunday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Sunday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Sunday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function(searchElement) {
		//console.log('Driver Source');
		//console.log(await driver.source());
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return driver.waitForElementByXPath('//ancestor::*[*[@content-desc="10"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
	})
	.then(function(searchElement) {
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	})
	.then(async function() {
		console.log('Close Day Name : Sunday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Sunday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Sunday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	//MONDAY
	.then(async function() {
		console.log('Day Name : Monday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Monday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Monday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return driver.waitForElementByXPath('//ancestor::*[*[@content-desc="10"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
	})
	.then(function(searchElement) {
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	})
	.then(async function() {
		console.log('Close Day Name : Monday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Monday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Monday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	//TUESDAY
	.then(async function() {
		console.log('Day Name : Tuesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Tuesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Tuesday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return driver.waitForElementByXPath('//ancestor::*[*[@content-desc="10"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
	})
	.then(function(searchElement) {
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	})
	.then(async function() {
		console.log('Close Day Name : Tuesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Tuesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Tuesday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	//WEDNESDAY
	.then(async function() {
		console.log('Day Name : Wednesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Wednesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Wednesday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return driver.waitForElementByXPath('//ancestor::*[*[@content-desc="10"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
	})
	.then(function(searchElement) {
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	})
	.then(async function() {
		console.log('Close Day Name : Wednesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Wednesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Wednesday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	// SCROLL ACTION
	// .then( function ( searchElement) {
	// 	  var action = new wd.TouchAction(driver);

	// 	  return action
	// 		.press({x: 100, y: 900})
	// 		.wait(3000)
	// 		.moveTo({x: 100, y: 150})
	// 		.release()
	// 		.perform();
	//   })

	//THURSDAY
	.then(async function() {
		console.log('Day Name : Thursday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Thursday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Thursday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return driver.waitForElementByXPath('//ancestor::*[*[@content-desc="10"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
	})
	.then(function(searchElement) {
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	})
	.then(async function() {
		console.log('Close Day Name : Thursday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Thursday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Thursday"]', 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	//SATURDAY
	// .then(async function() {
	// 	console.log('Day Name : Saturday');
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'Saturday ',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Saturday"]', 4000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function(searchElement) {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="workduration"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 3000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeButton[@label="Confirm"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return driver.waitForElementByXPath('//ancestor::*[*[@content-desc="10"]]', asserters.isEnabled, 4000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'Android')
	// 		return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
	// })
	// .then(async function(searchElement) {
	// 	if (desiredCaps.platformName == 'Android') return await searchElement.click();
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'Android')
	// 		//Press OK
	// 		return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
	// })
	// .then(function(searchElement) {
	// 	if (desiredCaps.platformName == 'Android') return searchElement.click();
	// })
	// .then(async function() {
	// 	console.log('Close Day Name : Saturday');
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'Saturday ',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Saturday"]', 4000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	
	//SUBMIT CLICK
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId('Submit Shift hours', asserters.isEnabled, 2000);
		else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="Submit Shift hours"]]',
				asserters.isEnabled,
				2000
			);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
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
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name=", tab, 5 of 5"])',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Settings"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		// Shift Details
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId("personal",
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Personal"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'(//XCUIElementTypeButton[@name="attendancehistory"])',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Logout"]]', asserters.isEnabled, 4000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	//return await driver.acceptAlert(3000);
	// 	console.log('Confirm Logout');
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'(//XCUIElementTypeButton[@name="YES"])',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//android.widget.Button[@text="YES"]', asserters.isEnabled, 2000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return driver.waitForElementByXPath(
	// 			'//XCUIElementTypeTextField[@name="uname"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			1000
	// 		);
	// 	else return driver.waitForElementByAccessibilityId('uname', asserters.isDisplayed && asserters.isEnabled, 1000);
	// })
	// .then(function(searchInput) {
	// 	return driver.clear(searchInput);
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeTextField[@name="uname"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			1000
	// 		);
	// 	else
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'uname',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			1000
	// 		);
	// })
	// .then(async function(searchInput) {
	// 	return await searchInput.sendKeys('99994554593@my.intellecto.io');
	// })
	// .then(function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return driver.waitForElementByXPath(
	// 			'//XCUIElementTypeSecureTextField[@name="password"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			3000
	// 		);
	// 	else
	// 		return driver.waitForElementByAccessibilityId(
	// 			'password',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			1000
	// 		);
	// })
	// .then(function(searchInput) {
	// 	return driver.clear(searchInput);
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeSecureTextField[@name="password"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			3000
	// 		);
	// 	else
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'password',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			1000
	// 		);
	// })
	// .then(async function(searchInput) {
	// 	if (parseFloat(desiredCaps.os_version) >= 13 && desiredCaps.platformName != 'Android') {
	// 		return await searchInput.sendKeys('qweqwe\n');
	// 	} else if (desiredCaps.platformName == 'Android') {
	// 		return await searchInput.sendKeys('qweqwe');
	// 	} else {
	// 		return await searchInput.sendKeys('qweqwe\n');
	// 	}
	// })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'(//XCUIElementTypeOther[@name="submit"])[2]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			3000
	// 		);
	// 	else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 1000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	//My Task
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'(//XCUIElementTypeOther[@name="attendancehistory"])[1]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			3000
	// 		);
	// 	else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Task"]]', asserters.isEnabled, 2000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	//Shift Approval
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="employeestatistics"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			3000
	// 		);
	// 	else return await driver.waitForElementByXPath(
	// 		'//ancestor::*[*[@text="Shift approval"]]',
	// 		asserters.isEnabled,
	// 		2000
	// 	);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	
	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
