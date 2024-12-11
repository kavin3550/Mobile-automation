let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;
const executionType = data.executionType;
const enableScreenshot = executionType.enableScreenshot;

desiredCaps.name = 'UC000017 - Employee - Checkin and Scan QR code';
// desiredCaps = {
// 	// Set your BrowserStack access credentials
// 	'browserstack.user': 'yogaraj_ObFwau',
// 	'browserstack.key': 'htCqd4CJdqdyqeCnosDP',
// 	// Set app_url of the application under test
// 	// 'app' : 'bs://10737ab84e1be17f3c1914c7154b3a7fe94b6b08',
// 	// // Specify device and os_version for testing
// 	// 'device' : 'iPhone 13 Mini',
// 	// 'os_version' : '15',

// 	'app' : 'bs://7cbd3467c169d2d7722944f7f07517ce643b8fef',
// // Specify device and os_version for testing
// 'device' : 'Google Pixel 2',
// 'os_version' : '8.0',
// 	// Set other BrowserStack capabilities
// 	project: 'Manzel 2 - New UI',
// 	build: 'developer-new-IOS-build-1',
// 	name: 'UC000017 - Employee - Checkin and Scan QR code',
// 	'browserstack.enableCameraImageInjection': 'true',
// 	'browserstack.gpsLocation': '11.20710,78.16802',
// 	//'browserstack.timezone' : 'Kolkata',
// 	'browserstack.resignApp':'true',
// 	platformName: 'Android'
// };
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
//driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');

// Test case for the BrowserStack app.
// If you have uploaded your app, update the test case here.

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
		return await searchInput.sendKeys('yogaraj@tenantscrm.com');
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
		try {
			await driver.execute(
				//'browserstack_executor: {"action":"cameraImageInjection", "arguments": {"imageUrl" : "media://db4a81428067592092d928afd94c3bc996bb378a"}}'
				'browserstack_executor: {"action":"cameraImageInjection", "arguments": {"imageUrl" : "media://9ca85ab9786e5be9d49d5e8384b3410db9c0694a"}}'
			);
		} catch (err) {}
	})
	.then(async function() {
		try {
			console.log('CAMERA');
			//Camera
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			) {
				//return await driver.execute('mobile: pressButton', { name: 'volumeUp' });
				//return await driver.execute("mobile: pressButton", {"name": "volumeUp"});
				//return await driver.pressKeycode(10,15000);
				console.log('IOS keycode 10');
				return await 'adb shell input keyevent 10';
			} else return await driver.pressKeycode(10);
			console.log('CAMERA A2');
		} catch (err) {}
	})
	// .then(async function() {
	// 	console.log('CAMERA');
	// 	//Camera
	// 	if (
	// 		desiredCaps.platformName == 'iOS' ||
	// 		desiredCaps.platformName == 'ios' ||
	// 		desiredCaps.platformName == 'IOS'
	// 	) {
	// 		//return await driver.execute('mobile: pressButton', { name: 'volumeUp' });
	// 		//return await driver.execute("mobile: pressButton", {"name": "volumeUp"});
	// 		//return await driver.pressKeycode(10,15000);
	// 		return await 'adb shell input keyevent 10'

	// 	} else return await driver.pressKeycode(10);
	// 	console.log('CAMERA A1');
	// })
	.then(async function() {
		try {
			if(enableScreenshot){
				console.log('Home screen - screenshot');
				await driver.takeScreenshot();
			}
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="btnscanqr"]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else
			return await driver.waitForElementByXPath(
				'//android.view.ViewGroup[@content-desc="btnscanqr"]',
				asserters.isEnabled,
				4000
			);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
			if(enableScreenshot){
				console.log('Scan QR code - screenshot');
				driver.takeScreenshot();
			}
		return await searchElement.click();
	} catch (err) {}
	})
	/* IF NO PERMISSION ASKED - COMMENT THIS SECTION */
	.then(async function() {
		console.log('Scan QR : ' + desiredCaps.platformName);

		// if (
		// 	desiredCaps.platformName == 'iOS' ||
		// 	desiredCaps.platformName == 'ios' ||
		// 	desiredCaps.platformName == 'IOS'
		// ) {
		// if (parseFloat(desiredCaps.os_version) >= 13) {
		// 	driver
		// 		.sessionCapabilities()
		// 		.then(async function() {
		// 			return await driver.waitForElementByXPath(
		// 				'(//XCUIElementTypeButton[@name="Allow While Using App"])',
		// 				asserters.isDisplayed && asserters.isEnabled,
		// 				10000
		// 			);
		// 		})
		// 		.then(async function(searchElement) {
		// 			return await searchElement.click();
		// 		});
		// } else {
		// 	driver
		// 		.sessionCapabilities()
		// 		.then(async function() {
		// 			return await driver.waitForElementByAccessibilityId(
		// 				'Allow',
		// 				asserters.isDisplayed && asserters.isEnabled,
		// 				15000
		// 			);
		// 		})
		// 		.then(async function(searchElement) {
		// 			return await searchElement.click();
		// 		});
		// }
		// });
		// } else {
		//return await driver.acceptAlert(15000);
		//	console.log(driver.source());
		// try{
			try{
		driver
			.sessionCapabilities()
			.then(async function() {
				return await driver.waitForElementByXPath(
					'//android.widget.Button[@text="Allow" or @text="ALLOW"]',
					asserters.isEnabled,
					5000
				);
			})
			.then(async function(searchElement) {
				return await searchElement.click();
			});
		} catch (err) {}

		//}
	})
	.then(async function() {
		try {
			console.log('Scan QR : ' + desiredCaps.platformName);
			// if (
			// 	desiredCaps.platformName == 'iOS' ||
			// 	desiredCaps.platformName == 'ios' ||
			// 	desiredCaps.platformName == 'IOS'
			// ) {
			// 	driver
			// 		.sessionCapabilities()
			// 		.then(async function() {
			// 			return await driver.waitForElementByXPath(
			// 				'(//XCUIElementTypeButton[@name="Allow While Using App"])',
			// 				asserters.isDisplayed && asserters.isEnabled,
			// 				10000
			// 			);
			// 		})
			// 		.then(async function(searchElement) {
			// 			return await searchElement.click();
			// 		});
			// } else {
			// 	driver
			// 		.sessionCapabilities()
			// 		.then(async function() {
			// 			return await driver.waitForElementByAccessibilityId(
			// 				'Allow',
			// 				asserters.isDisplayed && asserters.isEnabled,
			// 				15000
			// 			);
			// 		})
			// 		.then(async function(searchElement) {
			// 			return await searchElement.click();
			// 		});
			// }
			// } else {
			//return await driver.acceptAlert(15000);
			//	console.log(driver.source());
		console.log('CAMERA AFTER');
		//Camera
		if (
			desiredCaps.platformName == 'iOS' ||
			desiredCaps.platformName == 'ios' ||
			desiredCaps.platformName == 'IOS'
		) {
			//return await driver.execute('mobile: pressButton', { name: 'volumeUp' });
			//return await driver.execute("mobile: pressButton", {"name": "volumeUp"});
			//return await driver.pressKeycode(10,15000);
			console.log('IOS keycode 10 - AFTER');
			//return await 'adb shell input keyevent 10'
			('adb shell "input keyevent KEYCODE_FOCUS"');
			console.log('IOS keycode KEYCODE_FOCUS');
			return await 'adb shell "input keyevent KEYCODE_CAMERA"';
		} else return await driver.pressKeycode(10);
		console.log('CAMERA A2');
	} catch (err) {}
	})
	.then(async function() {
		try{
		console.log('OK Button');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="btnOk"]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else
			return await driver.waitForElementByAccessibilityId(
				'btnOk',
				asserters.isDisplayed && asserters.isEnabled,
				10000
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
	// 		return driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="checkin"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			10000
	// 		);
	// 	else
	// 		return await driver.waitForElementByXPath(
	// 			'//android.view.ViewGroup[@content-desc="checkin"]',
	// 			asserters.isEnabled,
	// 			10000
	// 		);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	await driver.execute(
	// 		'browserstack_executor: {"action":"cameraImageInjection", "arguments": {"imageUrl" : "media://db4a81428067592092d928afd94c3bc996bb378a"}}'
	// 	);
	// })

	// // .then(async function() {
	// // 	//Camera
	// // 	if (
	// // 		desiredCaps.platformName == 'iOS' ||
	// // 		desiredCaps.platformName == 'ios' ||
	// // 		desiredCaps.platformName == 'IOS'
	// // 	) {
	// // 		//return await driver.execute('mobile: pressButton', { name: 'volumeUp' });
	// // 		return await 'adb shell input keyevent 10'
	// // 	} else return await driver.pressKeycode(10);
	// // 	console.log('CAMERA 1');
	// // })
	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="btnscanqr"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			10000
	// 		);
	// 	else
	// 		return await driver.waitForElementByXPath(
	// 			'//android.view.ViewGroup[@content-desc="btnscanqr"]',
	// 			asserters.isEnabled,
	// 			4000
	// 		);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })
	// .then(async function() {
	// 	//Camera
	// 	if (
	// 		desiredCaps.platformName == 'iOS' ||
	// 		desiredCaps.platformName == 'ios' ||
	// 		desiredCaps.platformName == 'IOS'
	// 	) {
	// 		//return await driver.execute('mobile: pressButton', { name: 'volumeUp' });
	// 		return await 'adb shell input keyevent 10'
	// 	} else return await driver.pressKeycode(10);
	// 	console.log('CAMERA 2');
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
			console.log('Usecase Executed : UC000017');
			return driver.quit();
		} catch (e) {
			console.log('Usecase failed : UC000017');
			console.log(e);
		}
	})
	.done();
