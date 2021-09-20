const config = require("../config");
const url = `${config.baseUrl}`;
const role = "TELUS Automation Test3";
module.exports = {
  url,
  elements: {
    manageMod: {
      locateStrategy: "xpath",
      selector: '//a[contains(@href,"/en/bc/manage")]',
    },
    roleOption: {
      locateStrategy: "xpath",
      selector: '//div[contains(text(),"Role")]',
    },
    createRole: {
      locateStrategy: "xpath",
      selector: '//span[@class="Button__ButtonTextWrapper-sa7xo3-1 gbpwM"]',
    },

    roleNameFiled: {
      locateStrategy: "xpath",
      selector: '//input[@id="role-name"]',
    },
    capabltyField: {
      locateStrategy: "xpath",
      selector: '//button[@data-testid="dropdown-permissions"]',
    },

    liveStrmChkbx: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="fake-input"])[1]',
    },
    monitorChkbx: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="fake-input"])[2]',
    },
    recordngChkbx: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="fake-input"])[3]',
    },
    reportsChkbx: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="fake-input"])[4]',
    },
    usersChkbx: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="fake-input"])[5]',
    },
    rolesChkbx: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="fake-input"])[6]',
    },
    orgChkbx: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="fake-input"])[7]',
    },
    createBtn: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="create_role"]',
    },
    CnfrmMsg: {
      locateStrategy: "xpath",
      selector: '//*[text()="Role has been created Successfully"]',
    },
  },
  commands: [
    {
      clickOnManageSection() {
        return this.waitForElementPresent("@manageMod")
          .assert.elementPresent("@manageMod")
          .click("@manageMod")
          .pause(2000);
      },
      clickOnRole() {
        return this.waitForElementPresent("@roleOption")
          .assert.elementPresent("@roleOption")
          .click("@roleOption")
          .pause(2000);
      },

      clickOnCreateRoleCTA() {
        return this.waitForElementPresent("@createRole")
          .assert.elementPresent("@createRole")
          .click("@createRole")
          .pause(2000);
      },
      enterRoleName() {
        return this.waitForElementPresent("@roleNameFiled")
          .assert.elementPresent("@roleNameFiled")
          .click("@roleNameFiled")
          .setValue("@roleNameFiled", role)
          .pause(3000);
      },
      clickOnCapabltySelector() {
        return (
          this.waitForElementPresent("@capabltyField")
            // .assert.elementPresent("@capabltyField")
            .pause(3000)
            .click("@capabltyField")
        );
      },
      selectLiveStrm(browser) {
        this.waitForElementPresent("@liveStrmChkbx")
          //.assert.elementPresent("@liveStrmChkbx")
          .pause(2000);
        browser.execute("scrollTo(0,1000)");
        this.click("@liveStrmChkbx");
        return this;
      },
      selectMonitor() {
        return (
          this.waitForElementPresent("@monitorChkbx")
            //.assert.elementPresent("@monitorChkbx")
            .click("@monitorChkbx")
            .pause(1000)
        );
      },
      selectRecording() {
        return this.waitForElementPresent("@recordngChkbx")
          .assert.elementPresent("@recordngChkbx")
          .click("@recordngChkbx")
          .pause(2000);
      },
      selectReports() {
        return this.waitForElementPresent("@reportsChkbx")
          .assert.elementPresent("@reportsChkbx")
          .click("@reportsChkbx")
          .pause(2000);
      },
      selectUsers() {
        return this.waitForElementPresent("@usersChkbx")
          .assert.elementPresent("@usersChkbx")
          .click("@usersChkbx")
          .pause(2000);
      },
      selectRole() {
        return this.waitForElementPresent("@rolesChkbx")
          .assert.elementPresent("@rolesChkbx")
          .click("@rolesChkbx")
          .pause(2000);
      },
      selectOrg() {
        return this.waitForElementPresent("@orgChkbx")
          .assert.elementPresent("@orgChkbx")
          .click("@orgChkbx")
          .pause(2000);
      },
      clickOnCreateRoleBtn() {
        return this.waitForElementPresent("@createBtn")
          .assert.elementPresent("@createBtn")
          .click("@createBtn")
          .pause(6000);
      },
      validateConfirmationMsg() {
        return this.waitForElementPresent("@CnfrmMsg")
          .assert.elementPresent("@CnfrmMsg")
          .click("@CnfrmMsg")
          .pause(2000);
        },
        verifySuccessfullCreationOfRole() {
          return this
          .clickOnCreateRoleCTA()
          .enterRoleName()
          .clickOnCapabltySelector()
          .selectLiveStrm()
          .selectMonitor()
          .selectRecording()
          .selectReports()
          .selectUsers()
          .selectRole()
          .selectOrg()
          .clickOnCreateRoleBtn()
          .validateConfirmationMsg()
        },
    },
  ],
};
