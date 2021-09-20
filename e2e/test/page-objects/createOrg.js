const config = require("../config");
const url = `${config.baseUrl}`;
const Org='Automation Dummy Org1'
const Email='AutomationTestscript@telus.com'
const ApiURL='http://apiurl.com'
const ApiKey='ED7iQd:ZkVlUG9TNFRaNEd6dzYwS3VrMU9ZaFMySEh4alNHZmQ6YzlmMjVjOWItZGUxOC00MmQ1LTg0MjEtMjRiY2ViMzI4Zjhl'
const CDNPath='Dummy Path'
const SecretToken='Dummy token'

module.exports = {
  url,
  elements: {
    manageMod: {
      locateStrategy: "xpath",
      selector: '//a[contains(@href,"/en/bc/manage")]',
    },
    orgOption: {
      locateStrategy: "xpath",
      selector: '//div[contains(text(),"Organisation")]',
    },
    createOrg: {
      locateStrategy: "xpath",
      selector: '//span[@class="Button__ButtonTextWrapper-sa7xo3-1 gbpwM"]',
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
    apiUrl: {
      locateStrategy: "xpath",
      selector: '//*[@name="api_url"]',
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
  },
  commands: [
    {
      clickOnCreateOrgnstn() {
        return this.waitForElementPresent("@createOrg")
          .assert.elementPresent("@createOrg")
          .click("@createOrg")
          .pause(2000);
      },
      enterOrgName() {
        return this.waitForElementPresent("@orgNameFiled")
          .assert.elementPresent("@orgNameFiled")
          .click("@orgNameFiled")
          .setValue("@orgNameFiled", Org)
          .pause(2000);
      },
      selectOwner() {
        return this.waitForElementPresent("@ownerFiled")
          .assert.elementPresent("@ownerFiled")
          .click("@ownerFiled")
          .pause(2000);
      },
      enterEmailId() {
        return this.waitForElementPresent("@ownerEmailFiled")
          .assert.elementPresent("@ownerEmailFiled")
          .click("@ownerEmailFiled")
          .setValue("@ownerEmailFiled", Email)
          .pause(2000);
      },
      enterApiURL() {
        return this.waitForElementPresent("@apiUrl")
          .assert.elementPresent("@apiUrl")
          .click("@apiUrl")
          .setValue("@apiUrl", ApiURL)
          .pause(2000);
      },
      enterApiKey() {
        return this.waitForElementPresent("@apiKey")
          .assert.elementPresent("@apiKey")
          .click("@apiKey")
          .setValue("@apiKey", ApiKey)
          .pause(2000);
      },
      enterBaseCDNPath() {
        return this.waitForElementPresent("@baseCDNPath")
          .assert.elementPresent("@baseCDNPath")
          .click("@baseCDNPath")
          .setValue("@baseCDNPath", CDNPath)
          .pause(2000);
      },
      enterSecretToken() {
        return this.waitForElementPresent("@secretToken")
          .assert.elementPresent("@secretToken")
          .click("@secretToken")
          .setValue("@secretToken", SecretToken)
          .pause(2000);
      },
      clickOnCreateBtn() {
        return this.waitForElementPresent("@createBtn")
          .assert.elementPresent("@createBtn")
          .click("@createBtn")
          .waitForElementPresent("@confrmMSG")
          .getText("@confrmMSG", (result) => {
            console.log(result.value);
          })
          .pause(2000);

      },
      verifySuccessfullCreationOfOrganisation() {
        return this
        .clickOnCreateOrgnstn()
        .enterOrgName()
        .selectOwner()
        .enterEmailId()
        .enterApiURL()
        .enterApiKey()
        .enterBaseCDNPath()
        .enterSecretToken()
        .clickOnCreateBtn()
      },
    },
  ],
};
