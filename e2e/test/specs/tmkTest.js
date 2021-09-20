module.exports = {
  "@tags": ["e2e"],
  "@disabled": false,
  "Verify user is able to login successfully and routed to Home Page": (browser) => {
    browser.page.userPage().loginAndVisitPage(browser);
  },

  "Verify user is able to Navigate to User Page successfully and validate all the attributes on Total User page": (browser) => {
    browser.page.userPage().verifySuccessfullNavigationToUserPage();
  },

  "Verify Invitation sent successfully to a TELUS user": (browser) => {
    //const InviteUserObj = browser.page.inviteUser()
    //InviteUserObj.verifySuccessfullSendInvitation()
  },
  "Verify user is able to Navigate to Role Page successfully and validate all the attributes on Role Management page": (browser) => {
    const RolePgeObj = browser.page.rolePage();
    RolePgeObj.verifySuccessfullNavigationToRolePage();
  },
};
