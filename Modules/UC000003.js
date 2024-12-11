let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

 const desiredCaps = data.credentials;
 const executionType = data.executionType;
 const driver=data.driver;

 desiredCaps.name = 'UC000003 - Employee - Forgot Password Scenario using Email';

// //UC000003 - Validate login with forgot password
// // If you have uploaded your app, update the test case here.
driver
	.init(desiredCaps)
    .then( function() {
        console.log('UseCase 3');
        //console.log(driver.getSessionId());
    })
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
							15000
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


  .then(async function () {
    console.log('Click forgot password');
    return await driver.waitForElementByAccessibilityId(
      'forgotpassword', asserters.isDisplayed 
      && asserters.isEnabled, 5000);
  })
  .then(async function (searchElement) {
    return await searchElement.click();
  })
  .then(async function () {
    //Used to Redirect to Login page
    console.log('Redirect to Login page');

    if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
    return await driver.waitForElementByAccessibilityId(
      'forgotpassword', asserters.isDisplayed 
      && asserters.isEnabled, 5000);
      else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Login to continue?"]]', asserters.isEnabled, 15000);
  })
  .then(async function (searchElement) {
    return await searchElement.click();
  })


  // .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 15000);
	// 	else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Login"]]', asserters.isEnabled, 15000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })


  .then(async function () {
    console.log('Click forgot password Again');
    return await driver.waitForElementByAccessibilityId(
      'forgotpassword', asserters.isDisplayed 
      && asserters.isEnabled, 5000);
  })
  .then(async function (searchElement) {
    return await searchElement.click();
  })
  
  .then(async function () {
    console.log('Submit');

    if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
    return await driver.waitForElementByAccessibilityId(
      'submit', asserters.isDisplayed 
      && asserters.isEnabled, 5000);
      else
      return await driver.waitForElementByXPath('//ancestor::*[*[@text="Submit"]]', asserters.isEnabled, 5000);
  })
  .then(async function (searchElement) {
    return await searchElement.click();
  })

.then(async function () {
    // if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
		return await driver.waitForElementByAccessibilityId(
			'uname',
			asserters.isDisplayed && asserters.isEnabled,
			15000
		);
		// else
		// return await driver.waitForElementByXPath(
		// 	'android.widget.EditText[@content-desc="uname"]',
		// 	asserters.isEnabled,
		// 	3000
		// );
  })
  .then(async function (searchInput) {
    return await searchInput.sendKeys("yogaraj@tenantscrm.com");
  })

  .then(async function () {
  console.log('Submit');

  if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
  return await driver.waitForElementByAccessibilityId(
    'submit', asserters.isDisplayed 
    && asserters.isEnabled, 5000);
    else
    return await driver.waitForElementByXPath('//ancestor::*[*[@text="Submit"]]', asserters.isEnabled, 5000);
})
.then(async function (searchElement) {
  return await searchElement.click();
})
  .fin(function() { 
    // Invoke driver.quit() after the test is done to indicate that the test is completed.
    return driver.quit(); 
  })
  .done();