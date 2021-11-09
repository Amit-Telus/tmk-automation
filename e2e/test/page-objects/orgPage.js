const config = require("../config");
const url = `${config.baseUrl}`;
module.exports = {
  url,
  elements: {
    manageMod: {
      locateStrategy: "xpath",
      selector: '//a[contains(@href,"/en/bc/manage")]',
    },
    organisationOption: {
      locateStrategy: "xpath",
      selector: '//div[contains(text(),"Organisation")]',
    },
    orgHeadr: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="heading"])[2]',
    },
    orgPageCol1: {
      locateStrategy: "xpath",
      selector: '(//*[text()="Organisation"])[4]',
    },
    orgPageCol2: {
      locateStrategy: "xpath",
      selector: '//*[text()="Owner"]',
    },
    orgPageCol3: {
      locateStrategy: "xpath",
      selector: '//*[text()="Email"]',
    },
    orgPageCol4: {
      locateStrategy: "xpath",
      selector: '//*[text()="Total Users"]',
    },
    orgPageCol5: {
      locateStrategy: "xpath",
      selector: '//*[text()="Base CDN path"]',
    },
    orgPageCol6: {
      locateStrategy: "xpath",
      selector: '//*[text()="Action"]', 
    },
  },
  commands: [
    {
      clickOnManageSection() {
        return this.waitForElementVisible("@manageMod")
          .assert.elementPresent("@manageMod")
          .click("@manageMod")
          .pause(6000);
      },
      clickOnOrgnstn() {
        return this.waitForElementVisible("@organisationOption")
          .assert.elementPresent("@organisationOption")
          .click("@organisationOption")
          .getText('@orgHeadr', (result) => {
            console.log(result.value);
          })
          .assert.elementPresent('@orgPageCol1')
          .getText("@orgPageCol1", (result) => {
            console.log(result.value);
          })
          .assert.elementPresent('@orgPageCol2')
          .getText("@orgPageCol2", (result) => {
            console.log(result.value);
          })
          .assert.elementPresent('@orgPageCol3')
          .getText("@orgPageCol3", (result) => {
            console.log(result.value);
          })
          .assert.elementPresent('@orgPageCol4')
          .getText("@orgPageCol4", (result) => {
            console.log(result.value);
          })
          .assert.elementPresent('@orgPageCol5')
          .getText("@orgPageCol5", (result) => {
            console.log(result.value);
          })
          .assert.elementPresent('@orgPageCol6')
          .getText("@orgPageCol6", (result) => {
            console.log(result.value);
          })
      },
      verifySuccessfullNavigationToOrgnztnPage() {
        return this
        .clickOnManageSection()
        .clickOnOrgnstn();
      },
    },
  ],
};
