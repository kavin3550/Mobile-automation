let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;


desiredCaps.name= 'UC000113 - LEADERSHIP - Add Leave and Owner Chat';

var today = new Date();
var day = today.getDate();
//var month = today.getMonth()+1;
var day_string=day<10?'0'+day:day;
const month = today.toLocaleString('default', { month: 'short' });
const longMonth = today.toLocaleString('default', { month: 'long' });
const year = today.getFullYear();

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
		return await searchInput.sendKeys('99994554593@my.intellecto.io');
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
		return await driver.waitForElementByAccessibilityId(
			'submit',
			asserters.isDisplayed && asserters.isEnabled,
			10000
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
			return await driver.waitForElementByAccessibilityId(
				'leaveplanner',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Leaves"]]', asserters.isEnabled, 10000);
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
			return await driver.waitForElementByAccessibilityId(
				'myleave',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Leaves"]]', asserters.isEnabled, 10000);
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
			return await driver.waitForElementByAccessibilityId(
				'Add leave',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text='+day+']]', asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})

	.then(async function() {
		try{
		console.log('Leave type - 1st Time Load');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="chooseleavetype"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				15000
			);
		else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="chooseleavetype"]', asserters.isEnabled, 15000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})


	.then(async function() {
		try{
		console.log('Leave type - 2nd Time Set');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.elementByXPathOrNull(
				'(//XCUIElementTypeOther[@name="chooseleavetype"])[1]',
				10000
			);
		//else return await driver.waitForElementByXPath('//android.view.ViewGroup[@content-desc="chooseleavetype"]', 15000);
		//else return await driver.elementByXPathOrNull('//android.view.ViewGroup[@content-desc="chooseleavetype"]', 10000);
	} catch (err) {}
		
	})
	.then(async function(searchElement) {
		try{
			if (desiredCaps.platformName != 'Android'){
		console.log(searchElement);

		if(searchElement)
		return await searchElement.click();
			}
	} catch (err) {}
	})

	.then(async function() {
		try{
		console.log('Leave type - Selection');
			if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="Casual Leave"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				25000
			);
			else 
			return await driver.waitForElementByXPath(
				//'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.TextView[@text="Casual or Sick Leave"]',
				'//android.widget.TextView[@text="Casual Leaves" or @text="Casual Leave"]',
				asserters.isEnabled,
				25000
			);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})


	


	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'(//XCUIElementTypeOther[@name=" Date from "])[1]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	// else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Date from "]', asserters.isEnabled, 15000);
	// 	else {
			
	// 		return await driver.waitForElementByXPath('//ancestor::*[*[@text="Date from "]]', asserters.isEnabled, 15000);
	// 	}
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	return await searchElement.click();
	// } catch (err) {}
	// })


	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'Confirm',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByAccessibilityId('Next month', asserters.isEnabled, 4000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	return await searchElement.click();
	// } catch (err) {}
	// })

	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'Android')
	// 	return await driver.waitForElementByAccessibilityId(day+' '+longMonth+' '+year, asserters.isEnabled, 4000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	if(searchElement)
	// 	return await searchElement.click();
	// } catch (err) {}
	// })
	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'Android')
	// 		return await driver.waitForElementByXPath('//android.widget.Button[@text="OK"]', asserters.isEnabled, 3000);
	// 	} catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	if(searchElement)
	// 	return await searchElement.click();
	// } catch (err) {}
	// })



	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'(//XCUIElementTypeOther[@name=" Date to "])[1]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Date to "]]', asserters.isEnabled, 4000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	return await searchElement.click();
	// } catch (err) {}
	// })


	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 	return await driver.waitForElementByAccessibilityId(
	// 		'Confirm',
	// 		asserters.isDisplayed && asserters.isEnabled,
	// 		4000
	// 	);
	// 	else return await driver.waitForElementByAccessibilityId('Next month', asserters.isEnabled, 4000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	if(searchElement)
	// 	return await searchElement.click();
	// } catch (err) {}
	// })

	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'Android')
	// 	return await driver.waitForElementByAccessibilityId(day+' '+longMonth+' '+year, asserters.isEnabled, 4000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	if(searchElement)
	// 	return await searchElement.click();
	// } catch (err) {}
	// })
	// .then(async function() {
	// 	try{
	// 	if (desiredCaps.platformName == 'Android')
	// 		return await driver.waitForElementByXPath('//android.widget.Button[@text="OK"]', asserters.isEnabled, 3000);
	// 	} catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	if(searchElement)
	// 	return await searchElement.click();
	// } catch (err) {}
	// })


	.then(async function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="btnsubmitleave"])[2]',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByAccessibilityId('btnsubmitleave', asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
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

	// .then(async function() {
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="goback"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByAccessibilityId('goback', asserters.isEnabled, 3000);
	// })
	// .then(async function(searchElement) {
	// 	return await searchElement.click();
	// })

	//Settings
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name=", tab, 5 of 5"])',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[4]', asserters.isEnabled, 10000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		// Shift Details
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId("personal",
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Personal"]]', asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})

	//LOGOUT AND REJECT
	.then(async function() {
		try{
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
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		//return await driver.acceptAlert(3000);
		console.log('Confirm Logout');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeButton[@name="YES" or @name="Yes"])',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//android.widget.Button[@text="YES"]', asserters.isEnabled, 10000);
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
		else return driver.waitForElementByAccessibilityId('uname', asserters.isDisplayed && asserters.isEnabled, 1000);
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
				1000
			);
		} catch (err) {}
	})
	.then(async function(searchInput) {
		try{
		return await searchInput.sendKeys('7708508226@my.intellecto.io');
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
				1000
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
				3000
			);
		else
			return await driver.waitForElementByAccessibilityId(
				'password',
				asserters.isDisplayed && asserters.isEnabled,
				1000
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
		return await driver.waitForElementByAccessibilityId(
			'submit',
			asserters.isDisplayed && asserters.isEnabled,
			10000
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
			return await driver.waitForElementByAccessibilityId(
				'leaveplanner',
				asserters.isDisplayed && asserters.isEnabled,
				10000
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
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'employeeleave',
				asserters.isDisplayed && asserters.isEnabled,
				10000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Leave Approval"]]', asserters.isEnabled, 4000);
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

	.then(async function() {
		try{
		
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="profile img ID : NA Casual or Sick Leave 1 day Yogaraj M has applied for Casual or Sick Leave for 1 day (09 Nov 2022)"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				15000
			);
		else return await driver.waitForElementByAccessibilityId('Bhuvanesh tech'+day_string+' '+month+' '+year, asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		return await searchElement.click();
	})

	
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
		  return await searchInput.sendKeys('Chat by - Owner');
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

	.fin(function() {
	  // Invoke driver.quit() after the test is done to indicate that the test is completed.
	  try {
		console.log('Usecase Executed : UC000113');
		return driver.quit();
	} catch (e) {
		console.log('Usecase failed : UC000113');
		console.log(e);
	}
	})
	.done();
