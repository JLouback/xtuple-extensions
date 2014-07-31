select xt.create_table('usrlitesip', 'sa');

select xt.add_column('usrlitesip','usrlitesip_id', 'serial', 'primary key', 'sa');
select xt.add_column('usrlitesip','usrlitesip_usr_username', 'text', 'references xt.usrlite (usr_username)', 'sa');
select xt.add_column('usrlitesip','usrlitesip_uri', 'text', '', 'sa');
select xt.add_column('usrlitesip','usrlitesip_name', 'text', '', 'sa');
select xt.add_column('usrlitesip','usrlitesip_password', 'text', '', 'sa');

comment on table sa.usrlitesip is 'Joins User with SIP account';