XT.extensions.sip_account.initWorkspace = function () {


	var extensions = [
  		{kind: "onyx.GroupboxHeader", container: "mainGroup", content: "_sipAccount".loc()},
  		{kind: "XV.InputWidget", container: "mainGroup", attr: "uri" },
  		{kind: "XV.InputWidget", container: "mainGroup", attr: "displayName" },
  		{kind: "XV.InputWidget", container: "mainGroup", type:"password", attr: "sipPassword" }
	];

	XV.appendExtension("XV.UserAccountWorkspace", extensions);
};