XT.extensions.sip_account.initPostbooks = function () {
  var panels, relevantPrivileges;

  panels = [
    {name: "userAccounts", kind: "XV.UserAccountList"}
  ];
  XT.app.$.postbooks.appendPanels("setup", panels);
};