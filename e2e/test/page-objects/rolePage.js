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
        rolePageCol1: {
            locateStrategy: "xpath",
            selector: '//*[text()="Role Name"]',
          },
          rolePageCol2: {
            locateStrategy: "xpath",
            selector: '//*[text()="Total Users"]',
          },
          rolePageCol3: {
            locateStrategy: "xpath",
            selector: '(//*[text()="Live Streams"])[3]',
          },
          rolePageCol4: {
            locateStrategy: "xpath",
            selector: '(//*[text()="Monitor"])[3]',
          },
          rolePageCol5: {
            locateStrategy: "xpath",
            selector: '(//*[text()="Reports"])[3]',
          },
          rolePageCol6: {
            locateStrategy: "xpath",
            selector: '(//*[text()="Users"])[3]',
          },
          rolePageCol7: {
            locateStrategy: "xpath",
            selector: '//*[text()="Roles"]',
          },
          rolePageCol8: {
            locateStrategy: "xpath",
            selector: '(//*[text()="Organisation"])[3]',
          },
          rolePageCol9: {
            locateStrategy: "xpath",
            selector: '//*[text()="Action"]',
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
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol1')
                    .getText("@rolePageCol1", (result) => {
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol2')
                    .getText("@rolePageCol2", (result) => {
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol3')
                    .getText("@rolePageCol3", (result) => {
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol4')
                    .getText("@rolePageCol4", (result) => {
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol5')
                    .getText("@rolePageCol5", (result) => {
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol6')
                    .getText("@rolePageCol6", (result) => {
                      console.log(result.value);
                    }).assert.elementPresent('@rolePageCol7')
                    .getText("@rolePageCol7", (result) => {
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol8')
                    .getText("@rolePageCol8", (result) => {
                      console.log(result.value);
                    })
                    .assert.elementPresent('@rolePageCol9')
                    .getText("@rolePageCol9", (result) => {
                      console.log(result.value);
                    })
            },
            verifySuccessfullNavigationToRolePage() {
                return this
                    .clickOnManageSection()
                    .clickOnRole()
            },


        },
    ],
};
