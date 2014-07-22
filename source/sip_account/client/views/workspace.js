var extensions = [
  {kind: "onyx.GroupboxHeader", container: "mainGroup", content: "_sipAccount".loc()},
  {kind: "XV.InputWidget", container: "mainGroup", attr: "uri" },
  {kind: "XV.InputWidget", container: "mainGroup", attr: "display_name" },
  {kind: "XV.InputWidget", container: "mainGroup", attr: "sip_password" }
];

XV.appendExtension("XV.UserAccountWorkspace", extensions);