let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;

desiredCaps = {
  // Set your BrowserStack access credentials
  'browserstack.user' : 'yogaraj_ObFwau',
  'browserstack.key' : 'htCqd4CJdqdyqeCnosDP',
    // Set app_url of the application under test
	// 'app' : 'bs://6e961f4f901bbf7ef9f42bb31ad0954b67e0e0cb',
	// // Specify device and os_version for testing
	// 'device' : 'iPhone 11 Pro Max',
	// 'os_version' : '13',

	'app' : 'bs://7cbd3467c169d2d7722944f7f07517ce643b8fef',
	// Specify device and os_version for testing
	'device' : 'Samsung Galaxy S20 Ultra',
	'os_version' : '10.0',
	// Set other BrowserStack capabilities
	project: 'Manzel 2 - New UI',
	build: 'developer-new-ANDROID-build-1',
	name: 'UC000085 - Employee - Add Claim and Leadership Approval',
	 platformName: 'Android'
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
				10000
			);
		else
			return await driver.waitForElementByAccessibilityId(
				'uname',
				asserters.isDisplayed && asserters.isEnabled,
				1000
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
				10000
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
		return await driver.waitForElementByAccessibilityId(
			'submit',
			asserters.isDisplayed && asserters.isEnabled,
			10000
		  );
		else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 1000);
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
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'myleave',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Claims" or @text="My claims"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Add leave',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Add Claim"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

	.then(async function() {
		console.log('Leave type - 1st Time Load');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="chooseleavetype"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				15000
			);
		else return await driver.waitForElementByAccessibilityId('ChooseClaimtype', asserters.isEnabled, 15000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		console.log('Leave type - 2nd Time Set');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.elementByXPathOrNull(
				'(//XCUIElementTypeOther[@name="chooseleavetype"])[1]',
				10000
			);
		else return await driver.elementByXPathOrNull('//android.view.ViewGroup[@content-desc="ChooseClaimtype"]', 10000);
		
	})
	.then(async function(searchElement) {
		console.log(searchElement);

		if(searchElement)
		return await searchElement.click();
	})

	.then(async function() {
		console.log('Leave type - Selection');
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="Casual or Sick Leave"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				25000
			);
			else 
			return await driver.waitForElementByXPath(
				'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.TextView[@text="Food"]',
				asserters.isEnabled,
				25000
			);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="btnsubmitleave"])[2]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByAccessibilityId('btnsubmitleave', asserters.isEnabled, 10000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		//return await driver.acceptAlert(3000);
		console.log('Confirm OK');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name="OK"])',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.Button[@text="OK"]', asserters.isEnabled, 5000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeTextField[@name="uname"]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else
		return await driver.waitForElementByXPath(
			'//android.widget.EditText[@content-desc="Amount *" or @text="Amount *"]',
			asserters.isEnabled,
			3000
		);
	})
	.then(async function(searchInput) {
		return await searchInput.sendKeys('175');
	})
	
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name=" Date "])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else {
			console.log(driver.source());
			return await driver.waitForElementByXPath('//android.widget.TextView[@content-desc="Date" or @text="Date" or @content-desc="Date  " or @text="Date  "]', asserters.isEnabled, 15000);
		}
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Confirm',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else 
		{
			//return await driver.waitForElementByAccessibilityId('Next month', asserters.isEnabled, 4000);
		}
	})
	.then(async function(searchElement) {
		if(searchElement)
		return await searchElement.click();
	})

	.then(async function() {
		if (desiredCaps.platformName == 'Android')
		return await driver.waitForElementByAccessibilityId('30 April 2022', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		if(searchElement)
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementByXPath('//android.widget.Button[@text="OK"]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		if(searchElement)
		return await searchElement.click();
	})
	
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="btnsubmitleave"])[2]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByAccessibilityId('btnsubmitleave', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

	.then(async function() {
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
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

	//Settings
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
			return await driver.waitForElementByAccessibilityId("personal",
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Personal"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

	//LOGOUT AND REJECT
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'attendancehistory',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
      else{
       return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="attendancehistory"]', asserters.isEnabled, 5000);
		//else return await driver.waitForElementByAccessibilityId('attendancehistory', asserters.isEnabled, 4000);
      }
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		//return await driver.acceptAlert(3000);
		console.log('Confirm Logout');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name="YES" or @name="Yes"])',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//android.widget.Button[@text="YES"]', asserters.isEnabled, 10000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
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
				10000
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
				10000
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
		return await driver.waitForElementByAccessibilityId(
			'submit',
			asserters.isDisplayed && asserters.isEnabled,
			10000
		  );
		else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 1000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'leaveplanner',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Tasks"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'employeeleave',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Claims Approval"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
	
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="profile img ID : NA Casual or Sick Leave 1 day Yogaraj M has applied for Casual or Sick Leave for 1 day (09 Nov 2022)"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				25000
			);
		//else return await driver.waitForElementByAccessibilityId('Yogaraj M-Food-175.00-30 March 2022', asserters.isEnabled, 25000);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Yogaraj M-Food-31 March 2022"]', asserters.isEnabled, 15000);
	})
	.then(async function(searchElement) {
		if(searchElement)
		{
			console.log(searchElement);
			console.log(driver.source());
		 return await searchElement.click();
		}
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="Approve"]',
				asserters.isDisplayed && asserters.isEnabled,
				25000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Approve"]', asserters.isEnabled, 25000);
	})
	.then(async function(searchElement) {
		if(searchElement)
		return await searchElement.click();
	})

	.then(async function() {
		//return await driver.acceptAlert(3000);
		console.log('Confirm Yes');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name="YES" or @name="Yes"])',
				asserters.isDisplayed && asserters.isEnabled,
				25000
			);
		else return await driver.waitForElementByXPath('//android.widget.Button[@text="YES"]', asserters.isEnabled, 25000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

.then(async function() {
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
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
