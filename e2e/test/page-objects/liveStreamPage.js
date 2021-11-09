const config = require("../config");
const url = `${config.baseUrl}`;
module.exports = {
  url,
  elements: {
    liveStrmModule: {
      locateStrategy: "xpath",
      selector: '//a[text()="Live Streams"]',
    },
    liveStrmHeadr: {
      locateStrategy: "xpath",
      selector: '//h1[text()="Live Streams"]',
    },

    statusDrpDwn: {
      locateStrategy: "xpath",
      selector: '//*[@id="select-type"]/option[3]',
    },
    searchField: {
      locateStrategy: "xpath",
      selector: '//*[@name="search"]',
    },
    searchIcon: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="streams_search_button"]',
    },
    strmValSerchResPage:{
      locateStrategy: "xpath",
      selector: '//*[text()="metrics-test-0"]'
      //selector: '//*[@data-testid="headerWrapper"]',
    },
    validateAttributes:{
      locateStrategy: "xpath",
      selector: '//div[@data-testid="content"]',

    },

    expndStrm: {
      locateStrategy: "xpath",
      selector: '(//*[@data-testid="headerWrapper"])[1]',
    },
    
    attribute1: {
      locateStrategy: "xpath",
      selector: '(//h4[text()="Stream Username"])[1]',
    },
    attribute2: {
      locateStrategy: "xpath",
      selector: '(//h4[text()="Stream Password"])[1]',
    },
    attribute3: {
      locateStrategy: "xpath",
      selector: '(//h4[text()="Created On"])[1]',
    },
    attribute4: {
      locateStrategy: "xpath",
      selector: '(//h4[text()="Labels"])[1]',
    },
    attribute5: {
      locateStrategy: "xpath",
      selector: '(//h4[text()="Stream ID"])[1]',
    },
    attribute6: {
      locateStrategy: "xpath",
      selector: '(//h4[text()="Playback URL"])[1]',
    },
    clickOnBtn: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="back_stream_accordion_0"]',
    },
    headingH1DetailPage: {
      locateStrategy: "xpath",
      selector: '//h1',
    },
    overviewTab: {
      locateStrategy: "xpath",
      selector: '//*[text()="Overview"]',
    },
    audioSectn: {
      locateStrategy: "xpath",
      selector: '//div[@id="stream-audio"]',
    },
    videoSectn: {
      locateStrategy: "xpath",
      selector: '//div[@id="stream-video"]',
    },
    generalSectn: {
      locateStrategy: "xpath",
      selector: '//div[@id="stream-general"]',
    },
    selectVideoCodec: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="selectLabel"]'
    },
    selectVideoDrpDwn: {
      locateStrategy: "xpath",
      selector: '//*[@id="video-player"]'
    },
    strmQualityTab: {
      locateStrategy: "xpath",
      selector: '//*[text()="Stream Quality"]',
    },
    strmHeadr: {
      locateStrategy: "xpath",
      selector: '//*[text()="Stream Health Details"]',
    },
    strmQualityAttributes: {
      locateStrategy: "xpath",
      selector: '//*[@id="app"]/div[2]/div[4]/div[2]',
    },
    timeWindwTab: {
      locateStrategy: "xpath",
      selector: '//*[text()="Time Windows"]',
    },
    timeWindwAttributes: {
      locateStrategy: "xpath",
      selector: '//*[@id="app"]/div[2]/div[4]/div[2]',
    },
    bckToStrm: {
      locateStrategy: "xpath",
      selector: '//*[@data-testid="back-to-streams-btn"]',
    },
  },
  commands: [
    {
      clickOnLiveStrmSection() {
        return this.waitForElementVisible("@liveStrmModule")
          .assert.elementPresent("@liveStrmModule")
          .click("@liveStrmModule")
          .waitForElementVisible("@liveStrmHeadr")
          .getText("@liveStrmHeadr", (result) => {
      console.log(result.value);
    })
  },
  searchStream(browser){
    this
    .waitForElementPresent("@bckToStrm")
    .click("@bckToStrm")
    .waitForElementPresent("@searchField")
    .setValue("@searchField", 'metrics-test-0')
    .pause(2000)
    .waitForElementVisible("@searchIcon")
    .click("@searchIcon")
    .waitForElementPresent("@strmValSerchResPage")
    .getText("@strmValSerchResPage", (result) => {
      //console.log(result.value);
       const data = result.value.split('\n')[0]
       console.log(data)
        browser.assert.equal(data, 'metrics-test-0')
    })
    this
    .click("@strmValSerchResPage")
    .pause(2000)
    .waitForElementPresent("@validateAttributes")
    .getText("@validateAttributes", (result) => {
      console.log(result.value);
    })
    this
    .waitForElementPresent("@clickOnBtn")
    .pause(2000)
    .click("@clickOnBtn")
    .waitForElementPresent('@overviewTab')
    .waitForElementVisible("@audioSectn")
    .pause(2000)
  .click("@audioSectn")
  .pause(2000)
  .getText("@audioSectn", (result) => {
    console.log(result.value)
  })
  .waitForElementPresent("@videoSectn")
  .click("@videoSectn")
  .pause(2000)
  .getText("@videoSectn", (result) => {
    console.log(result.value)  
  })
  .waitForElementPresent("@generalSectn")
  .click("@generalSectn")
  .pause(2000)
  .getText("@generalSectn", (result) => {
    console.log(result.value)
  })
    return this
  },

  selectActiveStrm(browser) {
     var data1
     var data2
     this
    .waitForElementVisible("@statusDrpDwn")
      .click("@statusDrpDwn")
      .waitForElementPresent("@expndStrm")
      .getText("@expndStrm", (result) => {
        data1 = result.value.split('\n')[0]
        console.log(data1)
        //console.log(data[1])
      })
      this
      .click("@expndStrm")
      .waitForElementVisible("@attribute1")
      .getText("@attribute1", (result) => {
  console.log(result.value);
})
.assert.elementPresent('@attribute2')
.getText("@attribute2", (result) => {
  console.log(result.value);
})
.assert.elementPresent('@attribute3')
.getText("@attribute3", (result) => {
  console.log(result.value);
})
.assert.elementPresent('@attribute4')
.getText("@attribute4", (result) => {
  console.log(result.value);
})
.assert.elementPresent('@attribute5')
.getText("@attribute5", (result) => {
  console.log(result.value);
})
.assert.elementPresent('@attribute6')
.getText("@attribute6", (result) => {
  console.log(result.value);
})
this
.waitForElementVisible('@clickOnBtn')
.pause(5000)
.click('@clickOnBtn')
.waitForElementPresent('@overviewTab')
.getText("@overviewTab", (result) => {
  console.log(result.value)
})
.waitForElementPresent('@strmQualityTab')
.getText("@strmQualityTab", (result) => {
  console.log(result.value)
})
.waitForElementPresent('@timeWindwTab')
.getText("@timeWindwTab", (result) => {
  console.log(result.value)
})
.waitForElementPresent('@headingH1DetailPage')
.getText("@headingH1DetailPage", (result) => {
  data2 = result.value
  console.log(data2)
})
browser.perform(()=>{browser.assert.equal(data1,data2)})
return this
},

validateOverviewTab(browser){
  this
  .waitForElementPresent("@overviewTab")
  .waitForElementVisible("@audioSectn")
  .pause(2000)
  .click("@audioSectn")
  .pause(2000)
  .getText("@audioSectn", (result) => {
    console.log(result.value)
    const data = result.value.split('\n')
    browser.assert.equal(data[1],'Codec')
    browser.assert.equal(data[3],'Samples Per Frame')
    browser.assert.equal(data[5],'Samples Frequency')
    browser.assert.equal(data[7],'Channels')
    browser.assert.equal(data[9],'Bitrate')
  })
  .waitForElementPresent("@videoSectn")
  .click("@videoSectn")
  .pause(2000)
  .getText("@videoSectn", (result) => {
    console.log(result.value)
    const data = result.value.split('\n')
    browser.assert.equal(data[1],'Profile')
    browser.assert.equal(data[3],'Frame Rate')
    browser.assert.equal(data[5],'Keyframe Interval')
    browser.assert.equal(data[7],'Video Dimensions')
    browser.assert.equal(data[9],'Codec')
    browser.assert.equal(data[11],'Bitrate')
    browser.assert.equal(data[13],'Encoding Profile')
    browser.assert.equal(data[15],'Encoding Level')
    
  })
  .waitForElementPresent("@generalSectn")
  .click("@generalSectn")
  .pause(2000)
  .getText("@generalSectn", (result) => {
    console.log(result.value)
    const data = result.value.split('\n')
    browser.assert.equal(data[1],'Audio Bitrate')
    browser.assert.equal(data[3],'Audio Codec')
    browser.assert.equal(data[5],'Video Bitrate')
    browser.assert.equal(data[7],'Video Codec')
    browser.assert.equal(data[9],'Bytes In')
    browser.assert.equal(data[11],'Bytes Out')
    browser.assert.equal(data[13],'Elapsed Time Milli')
    browser.assert.equal(data[15],'Frame Rate')
    browser.assert.equal(data[17],'Key Frame Interval')
    browser.assert.equal(data[19],'Loss Bytes')
    browser.assert.equal(data[21],'Stream Name')
    browser.assert.equal(data[23],'Timestamp')
  })
  this
  .waitForElementPresent("@selectVideoCodec")
  .getText("@selectVideoCodec", (result) => {
    console.log(result.value)
  })
  .waitForElementPresent("@selectVideoDrpDwn")
  .getText("@selectVideoDrpDwn", (result) => {
    console.log(result.value)
    const data = result.value.split('\n')
    browser.assert.equal(data[1],'HLS')
    browser.assert.equal(data[2],'Smooth Streaming')
  })
//   browser.elements('css selector', '#drop_ddl option', function(result) {
//     return result.value.length;
// })  

return this
},
validateStrmQualityTab(browser){
  var streamstatus = []
  this
  .waitForElementPresent("@strmQualityTab")
  .click("@strmQualityTab")
  .waitForElementPresent("@strmQualityAttributes")
  .pause(3000)
  .getText("@strmQualityAttributes", (result) => {
    console.log(result.value)
  })
  browser.elements('xpath', '//*[@id="app"]/div[2]/div[4]/div[2]/div/div/div[2]/div', function(result) {
          for (let i=1;i<=result.value.length;i+=1){
            browser
            .useXpath()
            .getText(`//*[@id="app"]/div[2]/div[4]/div[2]/div/div/div[2]/div[${i}]/div/div/div/div/div[1]/span[2]/div/div[2]`, (result1) => {
            streamstatus[i]=result1.value
            })
          }
          browser.perform(()=>{
            var redcounter=0
            var ambercounter=0
            var greencounter=0
          for (let i=1;i<streamstatus.length;i+=1){
            if(streamstatus[i] === 'Red') {redcounter = redcounter+1}
            else if(streamstatus[i] === 'Amber') {ambercounter = ambercounter+1}
            else {greencounter = greencounter+1}
          }
          if (redcounter > 0) {
            this.getText('//*[@id="app"]/div[2]/div[4]/div[2]/div/div/div[1]/div[3]/div[1]/div/div[2]', (result2) => {
                browser.assert.equal(result2.value,'Red')
              })
          }
          else {
            if (ambercounter > 0) {
            this.getText('//*[@id="app"]/div[2]/div[4]/div[2]/div/div/div[1]/div[3]/div[1]/div/div[2]', (result2) => {
                browser.assert.notEqual(result2.value,'Amber')
              })
            }
            else{
              this.getText('//*[@id="app"]/div[2]/div[4]/div[2]/div/div/div[1]/div[3]/div[1]/div/div[2]', (result2) => {
                  browser.assert.notEqual(result2.value,'Green')
                })
              }
          }
        })
           
      })
return this
},

validateTimeWindowTab(browser){
  this
  .waitForElementPresent("@timeWindwTab")
  .click("@timeWindwTab")
  .waitForElementPresent("@timeWindwAttributes")
  .pause(2000)
  .getText("@timeWindwAttributes", (result) => {
    console.log(result.value)
  })
  
return this
},

verifySuccessfullNavigationToLiveStrmPage(browser) {
        return this
        .clickOnLiveStrmSection()
        .selectActiveStrm(browser)
        .validateOverviewTab(browser)
        .searchStream(browser)
        .validateStrmQualityTab(browser)
        .validateTimeWindowTab(browser)
      },
    },
  ],
};
