const config = require("../config");
const url = `${config.baseUrl}`;
module.exports = {
  url,
  elements: {
    recrdingModule: {
      locateStrategy: "xpath",
      selector: '//a[text()="Recordings"]',
    },
    recrdingHeadr: {
      locateStrategy: "xpath",
      selector: '//h1[text()="Recordings"]',
    },

    streamDrpDwn: {
      locateStrategy: "xpath",
      selector: '//*[@id="stream-selection"]',
    },
    
    recrdPageCol1: {
      locateStrategy: "xpath",
      selector: '//p[@title="Recording Name"]',
    },
    recrdPageCol2: {
      locateStrategy: "xpath",
      selector: '//p[@title="Start Date Time"]',
    },
    recrdPageCol3: {
      locateStrategy: "xpath",
      selector: '//p[@title="End Date Time"]',
    },
    recrdPageCol4: {
      locateStrategy: "xpath",
      selector: '//p[@title="Action"]',
    },
    downldRecordng: {
      locateStrategy: "xpath",
      selector: '//a[@title="Download"]',
    },
    delRecordng: {
      locateStrategy: "xpath",
      selector: '//a[@title="Delete"]',
    },
  },
  commands: [
    {
      clickOnRecordingSection() {
        return this.waitForElementVisible("@recrdingModule")
          .assert.elementPresent("@recrdingModule")
          .click("@recrdingModule")
          .waitForElementVisible("@recrdingHeadr")
          .getText("@recrdingHeadr", (result) => {
      console.log(result.value);
    })
  },
      validateRecordngForStreams(browser)
       {
        browser.elements('css selector', 'option', function(result) {
          var recordelm
          for (let i = 2; i <= result.value.length; i += 1){
          browser
          .useXpath()
          // .waitForElementVisible('//*[@id="stream-selection"]')
          // .click('//*[@id="stream-selection"]')
          .click(`(//option)[${i}]`)
          .pause(5000)
          browser.element('css selector','[class="table-rows"]', (res) => {
            if (res.status === 0) {
              recordelm = i
            }
              
          })  
          }
          this
          .click("@streamDrpDwn")
          browser.perform(()=>{
            browser.useXpath().waitForElementVisible(`(//option)[${recordelm}]`)
            browser.useXpath().click(`(//option)[${recordelm}]`)
          })
          this
          .assert.elementPresent('@recrdPageCol1')
          .getText("@recrdPageCol1", (result) => {
      console.log(result.value);
    })
          .assert.elementPresent('@recrdPageCol2')
          .getText("@recrdPageCol2", (result) => {
      console.log(result.value);
    })
          .assert.elementPresent('@recrdPageCol3')
          .getText("@recrdPageCol3", (result) => {
      console.log(result.value);
    })
          .assert.elementPresent('@recrdPageCol4')
          .getText("@recrdPageCol4", (result) => {
      console.log(result.value);
    })
           .assert.elementPresent('@downldRecordng')
           .assert.elementPresent('@delRecordng')
          })
    return this
},
visitRecordingPage(browser) {
  browser
   .useXpath()
   .waitForElementPresent('//a[text()="Recordings"]')
   .click('//a[text()="Recordings"]')
   .waitForElementPresent('//h1[text()="Recordings"]')
   .waitForElementPresent('//*[@id="stream-selection"]')
   browser.elements('css selector', 'option', function(result) {
     var recordel
     for (let i = 2; i <= result.value.length; i += 1){
       browser
       .useXpath()
       .click('//*[@id="stream-selection"]')
       .waitForElementPresent(`(//option)[${i}]`)
       .click(`(//option)[${i}]`)
       .pause(5000)
       browser.element('css selector','[class="table-rows"]', (res) => {
         if (res.status === 0) {
           recordel= i
           i = result.value.length+5
           //break;
         }
       })           
     }
     browser
     .useXpath()
     .click('//*[@id="stream-selection"]')
     .perform(()=>{
       browser
       .waitForElementPresent(`(//option)[${recordel}]`)
       .click(`(//option)[${recordel}]`)
     })
     .waitForElementPresent('//*[@class="table-rows"]')
     .waitForElementPresent('//*[@class="table table-header"]')
     .assert.elementPresent('//p[@title="Recording Name"]')
     .assert.elementPresent('//p[@title="Start Date Time"]')
     .assert.elementPresent('//p[@title="End Date Time"]')
     .assert.elementPresent('//p[@title="Action"]')
 })
},

           verifySuccessfullNavigationToRecordingPage(browser) {
        return this
        .clickOnRecordingSection()
        .validateRecordngForStreams(browser)
      },
    },
  ],
};
