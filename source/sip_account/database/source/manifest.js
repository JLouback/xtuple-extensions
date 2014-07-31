{
  "name": "sip_account",
  "version": "1.4.1",
  "comment": "Sip Account extension",
  "loadOrder": 999,
  "dependencies": ["crm"],
  "databaseScripts": [
    "create_sa_schema.sql",
    "usrlitesip.sql",
    "register.sql"
  ]
}