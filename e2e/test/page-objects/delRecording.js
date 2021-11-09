const config = require("../config");
const url = `${config.baseUrl}`;
module.exports = {
  url,
  elements: {
    recrdingModule: {
      locateStrategy: "xpath",
      selector: '//a[text()=“Recordings”]',
    },
    downldRecordng: {
      locateStrategy: "xpath",
      selector: '//a[@title="Download"]',
    },
    delRecordng: {
      locateStrategy: "xpath",
      selector: '//a[@title="Delete"]',
    },
    
    delConfMSG: {
      locateStrategy: "xpath",
      selector: '//*[text()="Are you sure you want to delete this Recording ?"]',
    },
    clickYes: {
      locateStrategy: "xpath",
      selector: '//*[text()="Yes"]',
    },
  },

  commands: [
    {
      clickOnRecordingSection() {
        return this.waitForElementVisible("@recrdingModule")
          .assert.elementPresent("@recrdingModule")
          .click("@recrdingModule")
      },
      clickOnDelIcon() {
        return this.waitForElementVisible("@delRecordng")
          .assert.elementPresent("@delRecordng")
          .click("@delRecordng")
          .waitForElementVisible("@delConfMSG")
          .getText("@delConfMSG", (result) => {
      console.log(result.value);
    })
      },
      clickOnYes() {
        return this.waitForElementVisible("@clickYes")
          .assert.elementPresent("@clickYes")
          .click("@clickYes")
      },
      
      verifyRecrdngDeletedSuccessfully() {
        return this
        .clickOnRecordingSection()
        .clickOnDelIcon()
        //.clickOnYes()
      },
    },
  ],
};
