XT.extensions.sip_account.initModels = function () {
  XM.UserAccount = XM.Document.extend({
    recordType: "XM.UserAccount",
    documentKey: "username", // the natural key
    idAttribute: "username" // the natural key
  });

  XM.UserAccountRelation = XM.Info.extend({

    idAttribute: 'username',

    recordType: 'XM.UserAccountRelation',

    editableModel: 'XM.UserAccount'

  });

  XM.UserAccountRelationCollection = XM.Collection.extend({
    model: XM.UserAccountRelation
  });
};