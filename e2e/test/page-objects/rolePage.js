const config = require("../config");
//const user = require("/userPage");
const url = `${config.baseUrl}`;
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
        roleHeader: {
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
                    .pause(2000);
            },
            clickOnRole() {
                return this.waitForElementPresent("@roleOption")
                    .assert.elementPresent("@roleOption")
                    .click("@roleOption")
                    .waitForElementPresent("@roleHeader")
                    .getText('@roleHeader', (result) => {
                      console.log(result.value)})
                    .pause(3000);
            },
            verifySuccessfullNavigationToRolePage() {
                return this
                    .clickOnManageSection()
                    .clickOnRole()
            },


        },
    ],
};
