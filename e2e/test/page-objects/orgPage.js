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
  },
  commands: [
    {
      clickOnManageSection() {
        return this.waitForElementPresent("@manageMod")
          .assert.elementPresent("@manageMod")
          .click("@manageMod")
          .pause(6000);
      },
      clickOnOrgnstn() {
        return this.waitForElementPresent("@organisationOption")
          .assert.elementPresent("@organisationOption")
          .click("@organisationOption")
          .getText('@orgHeadr', (result) => {
            console.log(result.value)})
          .pause(2000);
      },
      verifySuccessfullNavigationToOrgnztnPage() {
        return this
        .clickOnManageSection()
        .clickOnOrgnstn();
      },
    },
  ],
};
