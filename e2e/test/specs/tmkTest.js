module.exports = {
  "@tags": ["e2e"],
  "@disabled": false,

  "Verify user is able to login successfully and routed to Home Page": (browser) => {
         browser.page.userPage().loginAndVisitPage(browser);
  },

  // "Verify user is able to Navigate to User Page successfully and validate all the attributes on Total User page": (browser) => {
  //        browser.page.userPage().verifySuccessfullNavigationToUserPage();
  // },

  // "Verify Invitation sent successfully to a TELUS user": (browser) => {
  //        const InviteUserObj = browser.page.inviteUser()
  //        InviteUserObj.verifySuccessfullSendInvitation()
  //   },

 

  // "Verify user is able to Navigate to Role Page successfully and validate all the attributes on Role Management page": (browser) => {
  //        const RolePgeObj = browser.page.rolePage();
  //        RolePgeObj.verifySuccessfullNavigationToRolePage();
  //  },

  // "Verify user is able to create a New Role in TMK Portal": (browser) => {
  //        const CreateRoleObj = browser.page.createRole()
  //        CreateRoleObj.verifySuccessfullCreationOfRole(browser)
  //  },

  "Verify user is able to Navigate to Organisation Page successfully and validate header of the page": (browser) => {
         const OrgPgeObj = browser.page.orgPage();
         OrgPgeObj.verifySuccessfullNavigationToOrgnztnPage();
   },

  "Verify user is able to create a new Organisation": (browser) => {
         const CreateOrgObj = browser.page.createOrg();
         CreateOrgObj.verifySuccessfullCreationOfOrganisation(browser);
   },

  // "Verify user is able to Navigate to Live Streams Page successfully and validate all the attributes for selected Active Stream": (browser) => {
  //       browser.page.liveStreamPage().verifySuccessfullNavigationToLiveStrmPage(browser);
  //  },
};
