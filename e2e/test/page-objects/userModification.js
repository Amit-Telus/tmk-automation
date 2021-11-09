const config = require("../config");
const url = `${config.baseUrl}`;

module.exports = {
    url,
    elements: {
        editUserIcon: {
          locateStrategy: "xpath",
          selector: '(//*[@data-testid="dependentSvg"])[1]',
      },
      editPageAttributes: {
        locateStrategy: "xpath",
        selector: '//*[@id="app"]/div[2]',
  },

      actionSwitch: {
        locateStrategy: "xpath",
        selector: '(//*[@role="switch"])[1]',
},
      confmModal: {
        locateStrategy: "xpath",
        selector: '//*[text()="Are you sure you want to de-active the user role ?"]',
},
      selectYes: {
        locateStrategy: "xpath",
        selector: '//*[@data-testid="confirm_invite_resend"]',
},
    },

    commands: [
        {
            clickOnEditUserIcon() {
                return this.waitForElementPresent("@editUserIcon")
                    .assert.elementPresent("@editUserIcon")
                    .pause(2000)
                    .click("@editUserIcon")
                    .waitForElementPresent("@editPageAttributes")
                    .pause(2000)
                    .getText("@editPageAttributes", (result) => {
                      console.log(result.value)
                    })
            },
            
            clickOnActionSwitch() {
                return this.waitForElementPresent("@actionSwitch")
                    .assert.elementPresent("@actionSwitch")
                    .pause(2000)
                    .click("@actionSwitch")
                    .waitForElementVisible("@confmModal")
                    .pause(3000)
                    .getText("@confmModal", (result) => {
                      console.log(result.value)
                    })
            },
            clickOnYesCta() {
              return this.waitForElementPresent("@selectYes")
                  .assert.elementPresent("@selectYes")
                  .pause(2000)
                  .click("@selectYes")
                },
         
            verifyUserEditSuccessfully() {
                return this     
                    .clickOnEditUserIcon()
                    .clickOnActionSwitch()
                    .clickOnYesCta()
            },
        },
    ],
};
