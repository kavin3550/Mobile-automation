let wd = require('wd');
let assert = require('assert');
//const { driver } = require('./capability');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;


desiredCaps.name = 'UC000079 - Employee - Add Claim and Supervisor Rejection'

var today = new Date();
var day = today.getDate();
//var month = today.getMonth()+1;
var day_string=day<10?'0'+day:day;
const month = today.toLocaleString('default', { month: 'short' });
const longMonth = today.toLocaleString('default', { month: 'long' });
const year = today.getFullYear();
//console.log(month);



// Test case for the BrowserStack sample iOS app. 
// If you have uploaded your app, update the test case here.
driver.init(desiredCaps)

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
		return await searchInput.sendKeys('yogaraj@tenantscrm.com');
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
				'myclaims',
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
				'Add Claim',
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
				'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.TextView[@text="Food" or @text="Food claim" or @text="Food Claim"]',
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


	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'Confirm',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else 
	// 	{
	// 		return await driver.waitForElementByAccessibilityId('Next month', asserters.isEnabled, 4000);
	// 	}
	// })
	// .then(async function(searchElement) {
	// 	if(searchElement)
	// 	return await searchElement.click();
	// })

	.then(async function() {
		if (desiredCaps.platformName == 'Android')
		return await driver.waitForElementByXPath('//ancestor::*[*[@text="'+day+'"]]', asserters.isEnabled, 5000);
		//return await driver.waitForElementByAccessibilityId(day+' '+longMonth+' '+year, asserters.isEnabled, 4000);
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
		return await searchInput.sendKeys('kumaravel@tenantscrm.com');
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
			return await searchInput.sendKeys('1234\n');
		} else if (desiredCaps.platformName == 'Android') {
			return await searchInput.sendKeys('1234');
		} else {
			return await searchInput.sendKeys('1234\n');
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
			//return await driver.waitForElementByAccessibilityId('payroll', asserters.isDisplayed, 10000);
			return await driver.waitForElementByAccessibilityId('attendancehistory', asserters.isDisplayed, 10000);
			// driver.waitForElementByXPath(
			// 	'(//XCUIElementTypeOther[@label="attendancehistory"])[1]',
			// 	asserters.isDisplayed && asserters.isEnabled,
			// 	10000
			// );
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Desks"]]', asserters.isEnabled, 4000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})


	.then(async function() {
		// console.log('Source content');
		// console.log(driver.source());
		// return await driver.waitForElementByAccessibilityId(
		// 	'workfromhome',
		// 	asserters.isDisplayed && asserters.isEnabled,
		// 	10000
		// );
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementById(
				//'//*[@id=" Claims Approval"]',
				//'//ancestor::*[*[@text="Claims Approval"]]',
				'Claims Approval',
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
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="Yogaraj M"+'+day_string+' '+month+' '+year+']', asserters.isEnabled, 15000);
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
				'//XCUIElementTypeOther[@name="Reject"]',
				asserters.isDisplayed && asserters.isEnabled,
				25000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Reject"]', asserters.isEnabled, 25000);
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
