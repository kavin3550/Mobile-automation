let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;


desiredCaps.name= 'UC000053 - EMPLOYEE - Work From Home with Approval';

var today = new Date();
var day = today.getDate();
//var month = today.getMonth()+1;
var day_string=day<10?'0'+day:day;
const month = today.toLocaleString('default', { month: 'short' });
const year = today.getFullYear();

/* Customized Code */
let locationPermission = false;
let storagePermission = false;

driver
	.init(desiredCaps)
	//Write your custom code here

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
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
		  return await driver.waitForElementByXPath(
			'(//XCUIElementTypeOther[@name="attendancehistory"])[2]',
			asserters.isDisplayed && asserters.isEnabled,
			6000
		  );
		else
		  return await driver.waitForElementByXPath(
			'//ancestor::*[*[@text="Attendance"]]',
			asserters.isEnabled,
			6000
		  );
		} catch (err) {}
	  })
	  .then(async function(searchElement) {
		try{
		return await searchElement.click();
	  } catch (err) {}
	  })
	.then(async function() {
		// Work From Home
		// return await driver.waitForElementByAccessibilityId(
		//   'wfhapproval',null, 4000);
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
		return await driver.waitForElementByAccessibilityId(
			'wfhapproval',
			asserters.isDisplayed && asserters.isEnabled,
			4000
		);
		else
		return await driver.waitForElementByXPath(
			'//ancestor::*[*[@text="Work from Home"]]',
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
			'(//XCUIElementTypeOther[@name="Request Work from Home"])[2]',
			asserters.isDisplayed && asserters.isEnabled,
			4000
		);
		else
		return await driver.waitForElementByXPath(
			'//ancestor::*[*[@text="Request Work from Home"]]',
			asserters.isEnabled,
			3000
		);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
		return await driver.waitForElementByAccessibilityId(
			'Cancel',
			asserters.isDisplayed && asserters.isEnabled,
			4000
		);
		else
		return await driver.waitForElementByXPath('//ancestor::*[*[@text="Cancel"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
		return await driver.waitForElementByXPath(
			'(//XCUIElementTypeOther[@name="Request Work from Home"])[2]',
			asserters.isDisplayed && asserters.isEnabled,
			4000
		);
		else
		return await driver.waitForElementByXPath(
			'//ancestor::*[*[@text="Request Work from Home"]]',
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
			'//XCUIElementTypeOther[@name=" Ok"]',
			asserters.isDisplayed && asserters.isEnabled,
			4000
		);
		else
		return await driver.waitForElementByXPath(
			'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]',
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
			'//XCUIElementTypeOther[@name="btnOk"]',
			asserters.isDisplayed && asserters.isEnabled,
			5000
		);
	else
		return await driver.waitForElementByAccessibilityId('btnOk', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

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
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Personal"]]', asserters.isEnabled, 3000);
	  })
	  .then(async function(searchElement) {
		return await searchElement.click();
	  })
	  
	  .then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
				  return await driver.waitForElementByXPath(
					  '(//XCUIElementTypeButton[@name="attendancehistory"])',
					  asserters.isDisplayed && asserters.isEnabled,
					  4000
				  );
			else{
			 return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="attendancehistory"]', asserters.isEnabled, 5000);
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
					  '(//XCUIElementTypeButton[@name="YES"])',
					  asserters.isDisplayed && asserters.isEnabled,
					  4000
				  );
			  else return await driver.waitForElementByXPath('//android.widget.Button[@text="YES"]', asserters.isEnabled, 4000);
		  })
		  .then(async function(searchElement) {
			  return await searchElement.click();
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
		  return await searchInput.sendKeys('super@gmail.com');
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
		.then(async function() {
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
			  '(//XCUIElementTypeOther[@name="attendancehistory"])[1]',
			  asserters.isDisplayed && asserters.isEnabled,
			  3000
			);
		  else 
		  return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Desks"]]', asserters.isDisplayed 
		  && asserters.isEnabled, 5000);
	  })
	  .then(async function (searchElement) {
		return await searchElement.click();
	  })
	  .then(async function () {
		return await driver.waitForElementByXPath('//ancestor::*[*[@text="Work from home Approval"]]', asserters.isDisplayed 
		  && asserters.isEnabled, 4000);
	  })
	  .then(async function (searchElement) {
		return await searchElement.click();
	  })
	  .then(async function () {
		return await driver.waitForElementByAccessibilityId(
			//'btnApprove-Yogaraj M'+day_string+' Mar 2022', asserters.isDisplayed 
			'Yogaraj M'+day_string+' '+month+' '+year, asserters.isDisplayed
			&& asserters.isEnabled, 4000);
	  })
	  .then(async function (searchElement) {
		return await searchElement.click();
	  })
	  

	  .then(async function () {
		try{
		return await driver.waitForElementByXPath('//android.widget.TextView[@text="Pending"]', asserters.isDisplayed 
		&& asserters.isEnabled, 10000);
	  } catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
		return await searchElement.click();
	  } catch (err) {}
	  })
	  .then( function () {
		try{
		return  driver.waitForElementByXPath('//android.widget.TextView[@text="Approve"]', asserters.isDisplayed 
		  && asserters.isEnabled, 25000);
		} catch (err) {}
	  })
	  .then( function (searchElement) {
		try{
		return  searchElement.click();
	  } catch (err) {}
	  })
	  .then( function () {
		try{
		return  driver.waitForElementByXPath(
		  '//android.widget.TextView[@text="NO" or @text="No"]', asserters.isEnabled, 2000);
		} catch (err) {}
	  })
	  .then( function (searchElement) {
		try{
		return  searchElement.click();
	  } catch (err) {}
	  })
	  
	  .then(async function () {
		try{
		return await driver.waitForElementByXPath('//android.widget.TextView[@text="Pending"]', asserters.isDisplayed 
		&& asserters.isEnabled, 10000);
	  } catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
		return await searchElement.click();
	  } catch (err) {}
	  })
	  .then( function () {
		try{
		return  driver.waitForElementByXPath('//android.widget.TextView[@text="Approve"]', asserters.isDisplayed 
		  && asserters.isEnabled, 10000);
		} catch (err) {}
	  })
	  .then( function (searchElement) {
		try{
		return  searchElement.click();
	  } catch (err) {}
	  })
	  .then( function () {
		try{
		return  driver.waitForElementByXPath(
		  '//android.widget.TextView[@text="YES" or @text="Yes"]', asserters.isEnabled, 2000);
		} catch (err) {}
	  })
	  .then( function (searchElement) {
		try{
		return  searchElement.click();
	  } catch (err) {}
	  })
	  
	  
	  .then( function() {
		try{
		if (desiredCaps.platformName == 'Android')
		  return  driver.waitForElementByAccessibilityId('btnOk', asserters.isEnabled, 5000);
		} catch (err) {}
	  })
	  .then( function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return  searchElement.click();
	  } catch (err) {}
	  })


	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
