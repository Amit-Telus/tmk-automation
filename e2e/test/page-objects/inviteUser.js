const config = require("../config");
const url = `${config.baseUrl}`;
const email='AutomationUser@telus.com'
module.exports = {
    url,
    elements: {
        inviteUser: {
          locateStrategy: "xpath",
          selector: '//button[@data-testid="invite-user"]',
      },
      emailField: {
        locateStrategy: "xpath",
        selector: '//input[@name="email"]',
  },

  //*****Select Role as Telus Superadmin*****//

      roleField: {
        locateStrategy: "xpath",
        selector: '//select[@id="role"]/option[@value="1"]',
},

//*****Select Organisation as TELUS*****//

      organisationField: {
        locateStrategy: "xpath",
        selector: '//select[@id="organisation"]/option[@value="1"]',
},
submitBtn: {
  locateStrategy: "xpath",
  selector: '//button[@type="submit"]',
},
inviteMSG: {
    locateStrategy: "xpath",
    selector: '//*[text()="Invitation has been sent !!!"]',
  },
  closeBtn: {
    locateStrategy: "xpath",
    selector: '//*[@data-testid="close"]',
  },
  clickOnInvitedTab: {
    locateStrategy: "xpath",
    selector: '(//*[text()="Invited"])[1]',
  },
  clickResendIcon: {
    locateStrategy: "xpath",
    selector: '(//*[@alt="resend Invitation"])[1]',
  },
  confrmModal1: {
    locateStrategy: "xpath",
    selector: '//*[text()="Are you sure you want to resend welcome invitation?"]',
  },
  selectYesOptn: {
    locateStrategy: "xpath",
    selector: '//*[text()="Yes"]',
},
  confrmModal2: {
    locateStrategy: "xpath",
    selector: '//*[text()="Welcome invitation mail has been re-sent successfully."]',
},
  closeBtn1:{
    locateStrategy: "xpath",
    selector: '//*[@data-testid="close"]',
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
            clickOnUser() {
                return this.waitForElementPresent("@userOption")
                    .assert.elementPresent("@userOption")
                    .click("@userOption")
                    .pause(20000);
            },
            clickOnInviteUserCta() {
              return this.waitForElementPresent("@inviteUser")
                  .assert.elementPresent("@inviteUser")
                  .click("@inviteUser")
                  .pause(5000);

          },
          enterEmailId() {
            return this.waitForElementPresent("@emailField")
                .assert.elementPresent("@emailField")
                .click("@emailField")
                .setValue("@emailField", 'AutomationUser'+(Math.floor(Math.random() * 6000))+'@telus.com')
                .pause(3000)      
        },
        selectRoleFromDropdown() {
          return this.waitForElementPresent("@roleField")
              .assert.elementPresent("@roleField")
              .click("@roleField")
              .pause(3000);
      },
      selectOrganistnFromDropdown() {
        return this.waitForElementPresent("@organisationField")
            .assert.elementPresent("@organisationField")
            .click("@organisationField")
            .pause(3000);
    },
    clickOnSendInvitationBtn() {
      return this.waitForElementPresent("@submitBtn")
          .assert.elementPresent("@submitBtn")
          .click("@submitBtn")
          .waitForElementPresent("@inviteMSG")
          .getText("@inviteMSG", (result) => {
            console.log(result.value);
          })
          .waitForElementPresent("@closeBtn")
          .click("@closeBtn")
  },
  clickOnInvitedTab() {
    return this.waitForElementVisible("@clickOnInvitedTab")
        .assert.elementPresent("@clickOnInvitedTab")
        .click("@clickOnInvitedTab")
        .pause(2000)
        .waitForElementPresent("@clickResendIcon")
        .click("@clickResendIcon")
        .pause(3000)
      //   .waitForElementPresent("confrmModal1")
      //   .getText("@confrmModal1", (result) => {
      //    console.log(result.value)
      // })
      //   .pause(2000)
        .waitForElementPresent("@selectYesOptn")
        .click("@selectYesOptn")
        .waitForElementPresent("@confrmModal2")
        .pause(2000)
        .getText("@confrmModal2", (result) => {
         console.log(result.value)
      })
        .waitForElementPresent("@closeBtn1")
        .click("@closeBtn1")
  },

            verifySuccessfullSendInvitation() {
                return this     
                    .clickOnInviteUserCta()
                    .enterEmailId()
                    .selectRoleFromDropdown()
                    .selectOrganistnFromDropdown()
                    .clickOnSendInvitationBtn()
                    .clickOnInvitedTab()

            },
        },
    ],
};
