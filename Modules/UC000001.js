let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const response='';
const data = require('./capability');

 const desiredCaps = data.credentials;
 const executionType = data.executionType;
 const driver=data.driver;

 desiredCaps.name = 'UC000001 - Get Started to Login';

 //console.log(desiredCaps);
 console.log(executionType);

// // Initialize the remote Webdriver using BrowserStack remote URL
// // and desired capabilities defined above
// driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');
driver
	.init(desiredCaps)
	.then( function() {
        console.log('UseCase 1');
        //console.log(driver.getSessionId());
    })
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

	.fin(function() {
		// get details of the session
		// driver
		// .sessionCapabilities()
		// .then(async function(){
		// 	const response = await driver.executeScript('browserstack_executor: {"action": "getSessionDetails"}');
		// 	// print session details in your IDE's console if required
		// 	console.log('response');
		// 	console.log(response);
		//})	
		// driver
		// .sessionCapabilities()
		// .then(async function(){
		// 	response = await driver.execute('browserstack_executor: {"action": "getSessionDetails"}');
		// 	// print session details in your IDE's console if required
		// 	return response.status;
		// })	
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	// .then(function(){
	// 	//const response = await driver.execute('browserstack_executor: {"action": "getSessionDetails"}');
	// 	// print session details in your IDE's console if required
	// 	console.log('RESPONSE HERE');
	// 	return response.status;
	// })	
	.done();

