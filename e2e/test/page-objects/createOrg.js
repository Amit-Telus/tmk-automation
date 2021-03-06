const config = require("../config");
const url = `${config.baseUrl}`;
const Org='AutomationOrg'
const Email='AutomationTestscript@telus.com'
const ApiKey='ED7iQd:ZkVlUG9TNFRaNEd6dzYwS3VrMU9ZaFMySEh4alNHZmQ6YzlmMjVjOWItZGUxOC00MmQ1LTg0MjEtMjRiY2ViMzI4Zjhl'
const CDNPath='Dummy Path'
const SecretToken='Dummy token'

module.exports = {
  url,
  elements: {
    createOrg: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="create-organisation"]',
    },
    orgNameFiled: {
      locateStrategy: "xpath",
      selector: '//input[@name="new_org_name"]',
    },
    ownerFiled: {
      locateStrategy: "xpath",
      selector: '//*[@id="owner"]/option[2]',
    },
    ownerEmailFiled: {
      locateStrategy: "xpath",
      selector: '//*[@name="email"]',
    },
    apiKey: {
      locateStrategy: "xpath",
      selector: '//*[@name="api_key"]',
    },
    baseCDNPath: {
      locateStrategy: "xpath",
      selector: '//*[@name="base_cdn_path"]',
    },
    secretToken: {
      locateStrategy: "xpath",
      selector: '//*[@name="hmac_secret_token"]',
    },
    createBtn: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="create-org-btn"]',
    },
    confrmMSG: {
      locateStrategy: "xpath",
      selector: '//*[text()="Organisation has been created successfully."]',
    },
    closeBtn: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="close_success_modal"]',
    },
  },
  commands: [
    {
      clickOnCreateOrgnstn(browser) {
        
        browser.refresh()
        this
        .waitForElementVisible("@createOrg")
          .assert.elementPresent("@createOrg")
          .click("@createOrg")
          .pause(2000)
          return this
      },
      enterOrgName() {
        return this
        .waitForElementVisible("@orgNameFiled")
          .assert.elementPresent("@orgNameFiled")
          .click("@orgNameFiled")
          .setValue("@orgNameFiled", Org+(Math.floor(Math.random() * 6000)))
          .pause(2000);
      },
      selectOwner() {
        return this
        .waitForElementVisible("@ownerFiled")
          .assert.elementPresent("@ownerFiled")
          .pause(3000)
          .click("@ownerFiled")
          
      },
      enterEmailId() {
        return this
        .waitForElementVisible("@ownerEmailFiled")
          .assert.elementPresent("@ownerEmailFiled")
          .pause(2000)
          .click("@ownerEmailFiled")
          .setValue("@ownerEmailFiled", Email)
          .pause(2000);
      },
      enterApiKey() {
        return this
        .waitForElementVisible("@apiKey")
          .assert.elementPresent("@apiKey")
          .click("@apiKey")
          .setValue("@apiKey", ApiKey)
          .pause(2000);
      },
      enterBaseCDNPath() {
        return this
        .waitForElementVisible("@baseCDNPath")
          .assert.elementPresent("@baseCDNPath")
          .click("@baseCDNPath")
          .setValue("@baseCDNPath", CDNPath)
          .pause(2000);
      },
      enterSecretToken() {
        return this.waitForElementVisible("@secretToken")
          .assert.elementPresent("@secretToken")
          .click("@secretToken")
          .setValue("@secretToken", SecretToken)
          .pause(2000);
      },
      clickOnCreateBtn() {
        return this
        .waitForElementVisible("@createBtn")
          .assert.elementPresent("@createBtn")
          .pause(2000)
          .click("@createBtn")
          .waitForElementPresent("@confrmMSG")
          .getText("@confrmMSG", (result) => {
            console.log(result.value)
          })
          .click("@closeBtn")
      },
      verifySuccessfullCreationOfOrganisation(browser) {
        return this
        .clickOnCreateOrgnstn(browser)
        .enterOrgName()
        .selectOwner()
        .enterEmailId()
        .enterApiKey()
        .enterBaseCDNPath()
        .enterSecretToken()
        .clickOnCreateBtn()
      },
    },
  ],
};
