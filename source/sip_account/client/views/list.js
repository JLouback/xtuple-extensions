var oldUserAccountListCreate = XV.UserAccountList.prototype.create;

XV.UserAccountList.prototype.create = function () {
  oldUserAccountListCreate.apply(this, arguments);
  this.createComponent(
  {kind: "XV.ListColumn", container: this.$.listItem, components: [
       {kind: "XV.ListAttr", attr: "uri"}
   ]})
};
