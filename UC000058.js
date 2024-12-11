
let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
let Q = wd.Q;
const data = require('./capability');

const desiredCaps = data.credentials;


desiredCaps.name= 'UC000058 - EMPLOYEE - Create Schedule';

// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
//driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

var today = new Date();
var day = today.getDate();
//var month = today.getMonth()+1;
var day_string=day<10?'0'+day:day;
const month = today.toLocaleString('default', { month: 'short' });
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
	//})

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
		try{
		// Shift Details
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="shiftdetails"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="Shift Settings" or @text="Shift Setting"]]',
				asserters.isEnabled,
				3000
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
	// 			'//XCUIElementTypeOther[@label="View"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//ancestor::*[*[@text="View"]]', asserters.isEnabled, 3000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	return await searchElement.click();
	// } catch (err) {}
	// })
	// .then(async function() {
	// 	try{
	// 		console.log('Go back');
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByXPath(
	// 			'//XCUIElementTypeOther[@name="goback"]',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByAccessibilityId('goback', asserters.isEnabled, 4000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	return await searchElement.click();
	// } catch (err) {}
	// })

	.then(async function() {
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				//'//XCUIElementTypeOther[@label="Create" or @label="Edit Schedule"]',
				'//XCUIElementTypeOther[contains(@content-desc, "Create") or contains(@content-desc, "Edit") or contains(@content-desc, "Waiting")]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath(
			//'//ancestor::*[*[@text="Create" or @text="Edit Schedule]]'
			'//*[contains(@text, "Create") or contains(@text, "Edit") or contains(@text, "Waiting")]'
			, asserters.isEnabled, 3000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
			if(searchElement)
			{
				return await searchElement.click();
			}
			else{
				console.log('Else - View button')
				driver
				.then(async function() {
					try{
					if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
						return await driver.waitForElementByXPath(
							//'//XCUIElementTypeOther[@label="Create" or @label="Edit Schedule"]',
							'//XCUIElementTypeOther[contains(@content-desc, "View")]',
							asserters.isDisplayed && asserters.isEnabled,
							4000
						);
					else return await driver.waitForElementByXPath(
						//'//ancestor::*[*[@text="Create" or @text="Edit Schedule]]'
						'//*[contains(@text, "View")]'
						, asserters.isEnabled, 3000);
				} catch (err) {}
				})
				.then(async function(searchElement) {
					try{
					return await searchElement.click();
				} catch (err) {}
				})
			}
	} catch (err) {}
	})
	//SUNDAY
	// .then(async function() {
	// 	try{
	// 	console.log('Day Name : Sunday');
	// 	if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
	// 		return await driver.waitForElementByAccessibilityId(
	// 			'Sunday ',
	// 			asserters.isDisplayed && asserters.isEnabled,
	// 			4000
	// 		);
	// 	else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Sunday"]', 4000);
	// } catch (err) {}
	// })
	// .then(async function(searchElement) {
	// 	try{
	// 	return await searchElement.click();
	// } catch (err) {}
	// })
	.then(async function() {
		try{
		//console.log('Driver Source');
		//console.log(await driver.source());
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByAccessibilityId('workduration', asserters.isEnabled, 5000);
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
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		//else return driver.waitForElementByXPath('//ancestor::*[*[@content-desc="10"]]', asserters.isEnabled, 4000);
		else return driver.waitForElementByAccessibilityId("10", asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		console.log('Close Day Name : Sunday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Sunday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Sunday"]', 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	//MONDAY
	.then(async function() {
		try{
		console.log('Day Name : Monday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Monday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Monday"]', 4000);
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
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		//else return await driver.waitForElementByXPath('//ancestor::*[*[@text="00:00"]]', asserters.isEnabled, 3000);
		else return await driver.waitForElementByAccessibilityId('workduration', asserters.isEnabled, 5000);
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
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
			else return driver.waitForElementByAccessibilityId("10", asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		console.log('Close Day Name : Monday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Monday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Monday"]', 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	//TUESDAY
	.then(async function() {
		try{
		console.log('Day Name : Tuesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Tuesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Tuesday"]', 4000);
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
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByAccessibilityId('workduration', asserters.isEnabled, 5000);
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
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
			else return driver.waitForElementByAccessibilityId("10", asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		console.log('Close Day Name : Tuesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Tuesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Tuesday"]', 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	//WEDNESDAY
	.then(async function() {
		try{
		console.log('Day Name : Wednesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Wednesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Wednesday"]', 4000);
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
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByAccessibilityId('workduration', asserters.isEnabled, 5000);
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
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
			else return driver.waitForElementByAccessibilityId("10", asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		console.log('Close Day Name : Wednesday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Wednesday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Wednesday"]', 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	//SCROLL ACTION
	.then( function ( searchElement) {
		  var action = new wd.TouchAction(driver);

		  return action
			.press({x: 100, y: 900})
			.wait(3000)
			.moveTo({x: 100, y: 150})
			.release()
			.perform();
	  })

	//THURSDAY
	.then(async function() {
		try{
		console.log('Day Name : Thursday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Thursday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Thursday"]', 4000);
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
				'//XCUIElementTypeOther[@name="workduration"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByAccessibilityId('workduration', asserters.isEnabled, 5000);
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
				'//XCUIElementTypeButton[@label="Confirm"]',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
			else return driver.waitForElementByAccessibilityId("10", asserters.isEnabled, 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			return await driver.waitForElementById('android:id/am_label', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return await searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		if (desiredCaps.platformName == 'Android')
			//Press OK
			return await driver.waitForElementByXPath('//ancestor::*[*[@text="OK"]]', asserters.isEnabled, 4000);
		} catch (err) {}
	})
	.then(function(searchElement) {
		try{
		if (desiredCaps.platformName == 'Android') return searchElement.click();
	} catch (err) {}
	})
	.then(async function() {
		try{
		console.log('Close Day Name : Thursday');
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId(
				'Thursday ',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.TextView[@text="Thursday"]', 4000);
	} catch (err) {}
	})
	.then(async function(searchElement) {
		try{
		return await searchElement.click();
	} catch (err) {}
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
		try{
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId('Submit Shift hours', asserters.isEnabled, 2000);
		else
			return await driver.waitForElementByXPath(
				'//ancestor::*[*[@text="Submit Shift hours"]]',
				asserters.isEnabled,
				2000
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
				'(//XCUIElementTypeButton[@name=", tab, 5 of 5"])',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
			else return await driver.waitForElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[4]",
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
		// Shift Details
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByAccessibilityId("personal",
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Personal"]]', asserters.isEnabled, 3000);
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
					  '(//XCUIElementTypeButton[@name="attendancehistory"])',
					  asserters.isDisplayed && asserters.isEnabled,
					  4000
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
				'(//XCUIElementTypeButton[@name="YES"])',
				asserters.isDisplayed && asserters.isEnabled,
				4000
			);
		else return await driver.waitForElementByXPath('//android.widget.Button[@text="YES"]', asserters.isEnabled, 2000);
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
		  return await driver.waitForElementByAccessibilityId('Login', asserters.isEnabled, 4000);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="Login"]]', asserters.isEnabled, 4000);
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
				1000
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
				1000
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
		return await searchInput.sendKeys('99994554593@my.intellecto.io');
	} catch (err) {}
	})
	.then(function() {
		try{
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
		//My Task
		if (desiredCaps.platformName == 'iOS' || desiredCaps.platformName == 'ios' || desiredCaps.platformName == 'IOS')
			return await driver.waitForElementByXPath(
				'(//XCUIElementTypeOther[@name="attendancehistory"])[1]',
				asserters.isDisplayed && asserters.isEnabled,
				3000
			);
		else return await driver.waitForElementByXPath('//ancestor::*[*[@text="My Desks"]]', asserters.isEnabled, 2000);
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
				3000
			);
		else return await driver.waitForElementByXPath(
			'//ancestor::*[*[@text="Shift approval"]]',
			asserters.isEnabled,
			2000
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
		  'Yogaraj M'+day_string+' '+month+' '+year, asserters.isDisplayed
		  && asserters.isEnabled, 4000);
		} catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
		return await searchElement.click();
	  } catch (err) {}
	  })
	  .then(async function () {
		try{
		return await driver.elementByXPathOrNull('//android.widget.TextView[@text="Low" or @text="Medium" or @text="High"]', asserters.isDisplayed 
		&& asserters.isEnabled, 10000);
	  } catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
		  if(searchElement)
			return await searchElement.click();
	  } catch (err) {}
	  })
	  .then(async function () {
		try{
		return await driver.elementByXPathOrNull('//android.widget.TextView[@text="High"]', asserters.isDisplayed 
		&& asserters.isEnabled, 10000);
	  } catch (err) {}
	  })
	  .then(async function (searchElement) {
		try{
		  if(searchElement)
			return await searchElement.click();
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
		try {
			console.log('Usecase Executed : UC000058');
			return driver.quit();
		} catch (e) {
			console.log('Usecase failed : UC000058');
			console.log(e);
		}
	})
	.done();
