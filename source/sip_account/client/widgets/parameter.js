XT.extensions.sip_account.initParameterWidget = function () {
  extensions = [
    {kind: "onyx.GroupboxHeader", content: "_sipAccount".loc()},
    {name: "uri", label: "_uri".loc(), attr: "uri", defaultKind: "XV.InputWidget"},
    {name: "display_name", label: "_displayName".loc(), attr: "display_name", defaultKind: "XV.InputWidget"},
    {name: "sip_password", label: "_sipPassword".loc(), attr: "sip_password", defaultKind: "XV.InputWidget"}
  ];

  XV.appendExtension("XV.UserAccountWidget", extensions);
};