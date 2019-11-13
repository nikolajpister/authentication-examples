drop table if exists oauth_client_details;
create table oauth_client_details (
  client_id VARCHAR(256) PRIMARY KEY,
  resource_ids VARCHAR(256),
  client_secret VARCHAR(256),
  scope VARCHAR(256),
  authorized_grant_types VARCHAR(256),
  web_server_redirect_uri VARCHAR(256),
  authorities VARCHAR(256),
  access_token_validity INTEGER,
  refresh_token_validity INTEGER,
  additional_information VARCHAR(4096),
  autoapprove VARCHAR(256)
);

drop table if exists oauth_client_token;
create table oauth_client_token (
token_id VARCHAR(255),
token bytea ,
authentication_id VARCHAR(255),
user_name VARCHAR(255),
client_id VARCHAR(255)
);

drop table if exists oauth_access_token;
create table oauth_access_token (
token_id VARCHAR(255),
token bytea,
authentication_id VARCHAR(255),
user_name VARCHAR(255),
client_id VARCHAR(255),
authentication bytea,
refresh_token VARCHAR(255)
);
drop table if exists oauth_refresh_token;
create table oauth_refresh_token (
token_id VARCHAR(255),
token bytea,
authentication bytea
);
drop table if exists oauth_code;
create table oauth_code (
code VARCHAR(255), authentication bytea
);


-- insert client details
insert into oauth_client_details
   (client_id, client_secret, scope, authorized_grant_types,
   authorities, access_token_validity, refresh_token_validity)
values
   ('myclientid', '$2a$10$anKl2VDeEWPhntoB0g9pU.Oxk8pOS5H.JcOowh7fIuqTg1dawBYaG', 'read,write', 'password,refresh_token,client_credentials,authorization_code', 'ROLE_CLIENT,ROLE_TRUSTED_CLIENT', 900, 2592000);


insert into my_user (id, username, password, firstname, lastname, role) values (1, 'user', '$2a$10$oJRjgyB35svO3.cKJMHuFuG7koYfmz6C7T181P/wik9een5E2G0b.', 'donald', 'duck', 'ROLE_USER');
insert into my_user (id, username, password, firstname, lastname, role) values (2, 'admin', '$2a$10$IjU5R1XSRDwX2fQg0h.SneyBcgyvzX.ABRfI6v.KdMh.B3CdbqnuG', 'scrooge', 'mcduck', 'ROLE_ADMIN');