XT.extensions.sip_account.initList = function () {
  
  enyo.kind({
    name: "XV.UserAccountList",
    kind: "XV.List",
    label: "_userAccounts".loc(),
    collection: "XM.UserAccountRelationCollection",
    parameterWidget: "XV.UserAccountListParameters",
    query: {orderBy: [
      {attribute: 'username'}
    ]},
    components: [
      {kind: "XV.ListItem", components: [
        {kind: "FittableColumns", components: [
          {kind: "XV.ListColumn", classes: "short", components: [
            {kind: "XV.ListAttr", attr: "username", isKey: true}
          ]},
          {kind: "XV.ListColumn", classes: "short", components: [
            {kind: "XV.ListAttr", attr: "propername"}
          ]},
          {kind: "XV.ListColumn", classes: "last", components: [
            {kind: "XV.ListAttr", attr: "uri"}
          ]}
        ]}
      ]}
    ]
  });
  
  XV.registerModelList("XM.UserAccountRelation", "XV.UserAccountList");
  
};