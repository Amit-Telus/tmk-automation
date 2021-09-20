const config = require("../config");
const url = `${config.baseUrl}`;
const role = "AutomationRole";
module.exports = {
  url,
  elements: {
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
    closeBtn: {
      locateStrategy: "xpath",
      selector: '(//*[@class="Button__ButtonTextWrapper-sa7xo3-1 gbpwM"])[2]',
    },
  },
  commands: [
    {
      clickOnCreateRoleCTA() {
        return this.waitForElementVisible("@createRole")
          .assert.elementPresent("@createRole")
          .click("@createRole")
          .pause(2000);
      },
      enterRoleName() {
        return this.waitForElementVisible("@roleNameFiled")
          .assert.elementPresent("@roleNameFiled")
          .click("@roleNameFiled")
          .setValue("@roleNameFiled", role+(Math.floor(Math.random() * 6000)))
          .pause(3000);
      },
      clickOnCapabltySelector() {
        return (
          this.waitForElementVisible("@capabltyField")
            // .assert.elementPresent("@capabltyField")
            .pause(3000)
            .click("@capabltyField")
        );
      },
      selectCapabilities(browser) {
        this
        .waitForElementVisible("@liveStrmChkbx")
        .click("@liveStrmChkbx")
        .click("@monitorChkbx")
        .click("@recordngChkbx")
        .click("@reportsChkbx")
        .click("@usersChkbx")
        .click("@rolesChkbx")
        .click("@orgChkbx")
        return this;
      },
      clickOnCreateRoleBtn() {
        return this.waitForElementVisible("@createBtn")
          .assert.elementPresent("@createBtn")
          .click("@createBtn")
          
      },
      validateConfirmationMsg() {
        return this.waitForElementPresent("@CnfrmMsg")
          .assert.elementPresent("@CnfrmMsg")
          .getText('@CnfrmMsg', (result) => {
            console.log(result.value);
          })
          
        },
        closeCreateRoleWindow() {
          return this.waitForElementVisible("@closeBtn")
              .assert.elementPresent("@closeBtn")
              .click("@closeBtn")
              .pause(2000);

        },
        
        verifySuccessfullCreationOfRole(browser) {
          return this
          .clickOnCreateRoleCTA()
          .enterRoleName()
          .clickOnCapabltySelector()
          .selectCapabilities(browser)
          .clickOnCreateRoleBtn()
          .validateConfirmationMsg()
          .closeCreateRoleWindow() 
        },
    },
  ],
};
