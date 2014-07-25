XT.extensions.sip_account.initParameterWidget = function () {
  extensions = [
    {kind: "onyx.GroupboxHeader", content: "_sipAccount".loc()},
    {name: "uri", label: "_uri".loc(), attr: "uri", defaultKind: "XV.InputWidget"},
    {name: "displayName", label: "_displayName".loc(), attr: "displayName", defaultKind: "XV.InputWidget"}
  ];

  XV.appendExtension("XV.UserAccountListParameters", extensions);
};
