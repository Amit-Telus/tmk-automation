const config = require("../config");
const url = `${config.baseUrl}`;
const email='AutomationTestscript3@telus.com'
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
    selector: '(//*[@class="Button__ButtonTextWrapper-sa7xo3-1 gbpwM"])[2]',
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
                .setValue("@emailField", email)
                .pause(3000);
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
          .pause(2000);
  },
  closeInviteUserWindow() {
    return this.waitForElementVisible("@closeBtn")
        .assert.elementPresent("@closeBtn")
        .click("@closeBtn")
        .pause(2000);
  },

            verifySuccessfullSendInvitation() {
                return this     
                    .clickOnInviteUserCta()
                    .enterEmailId()
                    .selectRoleFromDropdown()
                    .selectOrganistnFromDropdown()
                    .clickOnSendInvitationBtn()
                    .closeInviteUserWindow()

            },


        },
    ],
};
