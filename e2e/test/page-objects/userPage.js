const config = require("../config");
const url = `${config.baseUrl}`;
module.exports = {
  url,
  elements: {
    manageMod: {
      locateStrategy: "xpath",
      selector: '//a[contains(@href,"/en/bc/manage")]',
    },
    userOption: {
      locateStrategy: "xpath",
      selector:
        '//div[contains(text(),"Users")]',
    },
    userName: {
      selector: '[id="username"]',
    },

    password: {
      selector: '[id="password"]',
    },
    loginBtn: {
      selector: '[data-label-ignore="login"]',
    },
    totalHeadr: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="heading"])[2]',
    },
    homePageHeader: {
      locateStrategy: "xpath",
      selector: '//*[text()="Welcome to TELUS Media Kloud"]',
    },
    userPageCol1: {
      locateStrategy: "xpath",
      selector: '//*[text()="Name"]',
    },
    userPageCol2: {
      locateStrategy: "xpath",
      selector: '//*[text()="Email ID"]',
    },
    userPageCol3: {
      locateStrategy: "xpath",
      selector: '//*[text()="Status"]',
    },
    userPageCol4: {
      locateStrategy: "xpath",
      selector: '//*[text()="Account(s)"]',
    },
    userPageCol5: {
      locateStrategy: "xpath",
      selector: '//*[text()="Action"]',
    },
    totalSection: {
      locateStrategy: "xpath",
      selector: '//*[text()="Total"]',
    },
    actvSection: {
      locateStrategy: "xpath",
      selector: '//*[text()="Active"]',
    },
    inactvSection: {
      locateStrategy: "xpath",
      selector: '//*[text()="Inactive"]',
    },
    invitedSection: {
      locateStrategy: "xpath",
      selector: '//*[text()="Invited"]',
    },
  },
  commands: [
    {
      loginAndVisitPage(browser) {
        const route = "/tmkadmin";
        const appurl = `${config.baseUrl}${route}`;
        browser.url(appurl, () => {
          //browser.log(`Visiting Internet Page: ${route}`)
        });
        browser.windowMaximize().execute("scrollTo(0,3000)");
        this.waitForElementVisible("@userName")
          .setValue("@userName", config.userName)
          .waitForElementVisible("@password")
          .setValue("@password", config.password)
          .click("@loginBtn");
        //browser.pause(5000);
        this.waitForElementVisible("@homePageHeader").getText(
          "@homePageHeader",
          (result) => {
            console.log(result.value);
          }
        );
        return this;
      },
      clickOnManageSection() {
        return this.waitForElementVisible("@manageMod")
          .assert.elementPresent("@manageMod")
          .click("@manageMod")
          .pause(2000);
      },
      clickOnUser() {
        return this.waitForElementPresent("@userOption")
         .assert.elementPresent("@userOption")
         .click("@userOption")
         .pause(2000)
         .waitForElementPresent("@totalSection")
         .waitForElementPresent("@actvSection")
         .waitForElementPresent("@inactvSection")
         .waitForElementPresent("@invitedSection")
         .waitForElementVisible("@totalHeadr")
         .getText("@totalHeadr", (result) => {
           console.log(result.value);
    })
         .assert.elementPresent('@userPageCol1')
         .getText("@userPageCol1", (result) => {
           console.log(result.value);
    })
        .assert.elementPresent('@userPageCol2')
        .getText("@userPageCol2", (result) => {
          console.log(result.value);
    })
       .assert.elementPresent('@userPageCol3')
       .getText("@userPageCol3", (result) => {
         console.log(result.value);
    })
       .assert.elementPresent('@userPageCol4')
       .getText("@userPageCol4", (result) => {
         console.log(result.value);
    })
       .assert.elementPresent('@userPageCol5')
       .getText("@userPageCol5", (result) => {
        console.log(result.value);
    })
},
      verifySuccessfullNavigationToUserPage() {
        return this
        .clickOnManageSection()
        .clickOnUser();
      },
    },
  ],
};
