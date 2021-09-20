module.exports = {
  "@tags": ["e2e"],
  "@disabled": false,
  "Verify user is able to login successfully and routed to Home Page": (browser) => {
    browser.page.userPage().loginAndVisitPage(browser);
  },

  "Verify user is able to Navigate to User Page successfully and validate Total User page by default": (browser) => {
    browser.page.userPage().verifySuccessfullNavigationToUserPage();
  },

  "Verify Invitation sent successfully to a TELUS user": (browser) => {
    //const InviteUserObj = browser.page.inviteUser()
    //InviteUserObj.verifySuccessfullSendInvitation()
  },
  "Verify user is able to Navigate to Role Page successfully and validate Role Management page by default": (browser) => {
    const RolePgeObj = browser.page.rolePage();
    RolePgeObj.verifySuccessfullNavigationToRolePage();
  },
};
