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
	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByAccessibilityId('Get Started', asserters.isEnabled, 15000);
			else
				return await driver.waitForElementByXPath(
					'//ancestor::*[*[@text="Get Started"]]',
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
	//  driver.init(desiredCaps)
	.then(function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return driver.waitForElementByAccessibilityId(
					'registercompany',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return driver.waitForElementByAccessibilityId(
					'registercompany',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
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
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//ancestor::*[*[@text="OK" or @text="Save"]]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeButton[@name="Choose Region"]',
					asserters.isDisplayed /*&& asserters.isEnabled*/,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@content-desc, "Choose Region")]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			console.log('searchElement - choose region');
			console.log(searchElement);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeButton[@name="India"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "India")]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
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
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="OK" or @text="Save"]]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			return await searchElement.click();
		} catch (err) {}
	})


	.then(async function() {
		console.log(driver.source());
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="Company Name *"]/XCUIElementTypeTextField',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					//'android.widget.EditText[@text=Company Name *]',
					'//*[contains(@text, "Company Name *")]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			return await searchInput.sendKeys('Galaxy Pvt Ltd');
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
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="OK" or @text="Save"]]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="Address *"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "Address *")]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (desiredCaps.platformName == 'Android')
			return await searchInput.sendKeys('18th Cross, 786 B, Ten Ants+ Plaza');
			else
			return await searchInput.sendKeys('18th Cross, 786 B, Ten Ants+ Plaza');
		} catch (err) {}
	})
	.then(async function(){
		if (
			desiredCaps.platformName == 'iOS' ||
			desiredCaps.platformName == 'ios' ||
			desiredCaps.platformName == 'IOS'
		)
		{
			await driver.hideKeyboard();
			await driver.hideKeyboard({strategy: 'tapOutside'});
			
			//return await 'adb shell input keyevent 66';
			return await driver.hideDeviceKeyboard();
		//return  driver.hideKeyboard();
		}
	})

	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="State"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "State")]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			if (desiredCaps.platformName != 'Android'){
			await searchElement.click();
			return await searchElement.sendKeys('TN State\n');
			}
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (desiredCaps.platformName == 'Android')
			return await searchInput.sendKeys('TN State');
			// else
			// return await searchInput.sendKeys('TN State\n');
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
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//ancestor::*[*[@text="OK" or @text="Save"]]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="City *"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "City *")]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			if (desiredCaps.platformName != 'Android')
			{
			 await searchElement.click();
			 return await searchElement.sendKeys('CN Metro\n');
			}
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (desiredCaps.platformName == 'Android')
			return await searchInput.sendKeys('CN Metro');
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
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="OK" or @text="Save"]]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="First name *"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "First name *")]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			if (desiredCaps.platformName != 'Android'){
			 await searchElement.click();
			return await searchElement.sendKeys('Micheal Ajay Khan\n');
			}
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (desiredCaps.platformName == 'Android')
			return await searchInput.sendKeys('Micheal Ajay Khan');
			
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
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="OK" or @text="Save"]]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="Last name *"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "Last name *")]',
					asserters.isDisplayed && asserters.isEnabled,
					5000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			if (desiredCaps.platformName != 'Android'){
			 await searchElement.click();
			 return await searchElement.sendKeys('G\n');
			}
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (desiredCaps.platformName == 'Android')
			return await searchInput.sendKeys('G');
		} catch (err) {}
	})
	
	// // })
	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="OK" or @text="Save"]]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="Email *"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "Email *")]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			if (desiredCaps.platformName != 'Android'){
			 await searchElement.click();
			return await searchElement.sendKeys('mail@mail.com\n');
			}
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (desiredCaps.platformName == 'Android')
			searchInput.sendKeys('mail@mail.com');
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
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="OK" or @text="Save"]]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
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
				return await driver.waitForElementByXPath(
					'//XCUIElementTypeOther[@name="Contact *"]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
				return await driver.waitForElementByXPath(
					'//*[contains(@text, "Contact")]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			if (desiredCaps.platformName != 'Android'){
			 await searchElement.click();
			 await searchElement.sendKeys('9');
			 await searchElement.sendKeys('\n');
			 await driver.hideKeyboard({strategy: 'tapOutside'}) 
			 return await driver.hideDeviceKeyboard();
			}
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try {
			if (desiredCaps.platformName == 'Android')
			return await searchInput.sendKeys('100000');
		} catch (err) {}
	})

// // SCROLL ACTION
// 	.then( function ( searchElement) {
// 		console.log('Scroll Action');
// 		  var action = new wd.TouchAction(driver);

// 		  return action
// 			.press({x: 100, y: 100})
// 			.wait(3000)
// 			.moveTo({x: 100, y: 600})
// 			.release()
// 			.perform();
// 	})
.then(async function(){
	try{
		return await 'adb shell input keyevent 111';
	}
	catch(err){

	}
})


	.then(async function() {
		try {
			if (
				desiredCaps.platformName == 'iOS' ||
				desiredCaps.platformName == 'ios' ||
				desiredCaps.platformName == 'IOS'
			)
				return await driver.waitForElementByXPath(
					'(//XCUIElementTypeOther[@name="Save"])[1]',
					asserters.isDisplayed && asserters.isEnabled,
					10000
				);
			else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="OK" or @text="Save"]]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try {
			return await searchElement.click();
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

// SCROLL ACTION
	// .then( function ( searchElement) {
	// 	console.log('Scroll Action');
	// 	  var action = new wd.TouchAction(driver);

	// 	  return action
	// 		.press({x: 100, y: 700})
	// 		.wait(3000)
	// 		.moveTo({x: 100, y: 150})
	// 		.release()
	// 		.perform();
	// })

	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		try {
			console.log('Usecase Executed : UC000100');
			return driver.quit();
		} catch (e) {
			console.log('Usecase failed : UC000100');
			console.log(e);
		}
	})
	.done();
