let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;


desiredCaps.name= 'UC000055 - MANAGER - Work From Home';

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
		return await searchInput.sendKeys('5457457457@my.intellecto.io');
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
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="submit"])[2]',
				asserters.isDisplayed && asserters.isEnabled,
				3000
			);
		else return await driver.waitForElementByAccessibilityId('submit', asserters.isEnabled, 1000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
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
		return await driver.waitForElementByXPath('//ancestor::*[*[@text="Cancel"]]', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
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
		return await driver.waitForElementByAccessibilityId('btnOk', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		return await driver.waitForElementByAccessibilityId('goback', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
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
		// Set Location - Button
		return await driver.waitForElementByAccessibilityId('btnStatus', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		//Save Location -Button
		return await driver.waitForElementByAccessibilityId('btnscanqr', asserters.isEnabled, 3000);
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})
	.then(async function() {
		try{
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

	.then(async function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name=", tab, 1 of 5"])',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
			else return await driver.waitForElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[1]",
			asserters.isDisplayed && asserters.isEnabled,
			20000
		  );
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})

	.then(async function() {
		try{
		//My Task
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="attendancehistory"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Desks"]]', asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		//Shift Approval
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="employeestatistics"]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
		else return await driver.waitForElementByXPath(
			'//ancestor::*[*[@text="Work from home Approval"]]',
			asserters.isEnabled,
			5000
		);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})

	.then(async function() {
		try{
		//Shift Approval
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="Closed"]',
				asserters.isDisplayed && asserters.isEnabled,
				5000
			);
		else return await driver.waitForElementByXPath(
			'//ancestor::*[*[@text="Closed"]]',
			asserters.isEnabled,
			5000
		);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})

	.then(async function () {
		try{
		return await driver.waitForElementByAccessibilityId(
		  //'btnApprove-Yogaraj M'+day_string+' Mar 2022', asserters.isDisplayed 
		  'Manager Test'+day_string+' '+month+' '+year, asserters.isDisplayed
		  && asserters.isEnabled, 4000);
		} catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
		return await searchElement.click();
	  } catch (err) {}
	  })
	//   .then(async function () {
	// 	try{
	// 	return await driver.elementByXPathOrNull('//android.widget.TextView[@text="Low" or @text="Medium" or @text="High"]', asserters.isDisplayed 
	// 	&& asserters.isEnabled, 10000);
	//   } catch (err) {}
	//   })
	//   .then(async function (searchElement) {
	// 	try{
	// 	  if(searchElement)
	// 		return await searchElement.click();
	//   } catch (err) {}
	//   })
	//   .then(async function () {
	// 	try{	
	// 		return await driver.waitForElementByXPath('//android.widget.TextView[@text="High"]', asserters.isDisplayed 
	// 		, 15000);
	//   } catch (err) {}
	//   })
	//   .then(async function (searchElement) {
	// 	try{
	// 		if(searchElement)
	// 		return await searchElement.click();
	//   } catch (err) {}
	//   })

	  .then(async function () {
		try{
			//console.log('Source' +driver.source());
		return await driver.waitForElementByAccessibilityId('btnChat', asserters.isDisplayed 
		&& asserters.isEnabled, 10000);
	  } catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
			if(searchElement)
			return await searchElement.click();
	  } catch (err) {}
	  })

	  .then(async function() {
		try{
			console.log('Source - '+driver.source());
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
		  return await driver.waitForElementByXPath(
			'//XCUIElementTypeTextField[@name="uname"]',
			asserters.isDisplayed && asserters.isEnabled,
			10000
		  );
		else
		  return await driver.waitForElementByXPath(
			'//android.widget.EditText[@text="Type message here"]',
			asserters.isDisplayed && asserters.isEnabled,
			25000
		  );
		} catch (err) {}
	  })
	.then(async function(searchInput) {
		if(searchInput)
			return await searchInput.sendKeys('Chat by - Manager Test');
	})

	.then(async function () {
		try{
			return await driver.waitForElementByAccessibilityId('btnSend', asserters.isDisplayed 
			&& asserters.isEnabled, 25000);
	  	} catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
			return await searchElement.click();
	  } catch (err) {}
	  })

	//   .then(async function () {
	// 	try{
	// 	return await driver.waitForElementByXPath('//android.widget.TextView[@text="//*["Type message here"]', asserters.isDisplayed 
	// 	&& asserters.isEnabled, 10000);
	//   } catch (err) {}
	//   })
	//   .then(async function(searchInput) {
	// 	try{
	// 	return await searchInput.sendKeys('Test Chat - 7708508226@my.intellecto.io');
	// } catch (err) {}
	// })

	.fin(function() {
		// Invoke driver.quit() after the test is done to indicate that the test is completed.
		return driver.quit();
	})
	.done();
