--
DROP TABLE IF EXISTS basic_bank;
CREATE TABLE IF NOT EXISTS basic_bank(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  stoped bool NOT NULL DEFAULT  false,
  team_id BIGINT NOT NULL DEFAULT  0,
  no VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  types VARCHAR(20) NOT NULL DEFAULT  '',
  bank_account VARCHAR(50) NOT NULL DEFAULT  '',
  open_bank VARCHAR(80) NOT NULL DEFAULT  '',
  open_zone VARCHAR(20) NOT NULL DEFAULT  '',
  open_city VARCHAR(20) NOT NULL DEFAULT  '',
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  live NUMERIC(28,4) NOT NULL DEFAULT  0,
  init NUMERIC(28,4) NOT NULL DEFAULT  0,
  mint BIGINT NOT NULL DEFAULT  0,
  face BIGINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_bank_delete_trigger on basic_bank;
CREATE OR REPLACE FUNCTION basic_bank_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_bank',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_bank_delete_trigger 
BEFORE DELETE ON basic_bank 
FOR EACH ROW EXECUTE PROCEDURE basic_bank_delete_trigger_fun();
--

DROP TABLE IF EXISTS basic_bill;
CREATE TABLE IF NOT EXISTS basic_bill(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  move_id BIGINT NOT NULL DEFAULT  0,
  link_id BIGINT NOT NULL DEFAULT  0,
  ware VARCHAR(10) NOT NULL DEFAULT  '',
  sort VARCHAR(20) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  auto VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  tick VARCHAR(50) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  term VARCHAR(10) NOT NULL DEFAULT  '',
  some SMALLINT NOT NULL DEFAULT  0,
  user BIGINT NOT NULL DEFAULT  0,
  face BIGINT NOT NULL DEFAULT  0,
  look BIGINT NOT NULL DEFAULT  0,
  book BIGINT NOT NULL DEFAULT  0,
  over BIGINT NOT NULL DEFAULT  0,
  time VARCHAR(20) NOT NULL DEFAULT  '',
  name VARCHAR(20) NOT NULL DEFAULT  '',
  call VARCHAR(20) NOT NULL DEFAULT  '',
  same INTEGER NOT NULL DEFAULT  0,
  back TEXT NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_bill_delete_trigger on basic_bill;
CREATE OR REPLACE FUNCTION basic_bill_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_bill',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_bill_delete_trigger 
BEFORE DELETE ON basic_bill 
FOR EACH ROW EXECUTE PROCEDURE basic_bill_delete_trigger_fun();
DROP TABLE IF EXISTS basic_bond;
CREATE TABLE IF NOT EXISTS basic_bond(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  root VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  view VARCHAR(60) NOT NULL DEFAULT  '',
  text VARCHAR(800) NOT NULL DEFAULT  '',
  rank SMALLINT NOT NULL DEFAULT  1,
  base bool NOT NULL DEFAULT  false,
  mark VARCHAR(120) NOT NULL DEFAULT  '',
  nore VARCHAR(30) NOT NULL DEFAULT  '',
  fact VARCHAR(160) NOT NULL DEFAULT  '',
  bank VARCHAR(30) NOT NULL DEFAULT  '',
  open VARCHAR(60) NOT NULL DEFAULT  '',
  link VARCHAR(30) NOT NULL DEFAULT  '',
  move VARCHAR(20) NOT NULL DEFAULT  '',
  tele VARCHAR(30) NOT NULL DEFAULT  '',
  faxa VARCHAR(30) NOT NULL DEFAULT  '',
  site VARCHAR(120) NOT NULL DEFAULT  '',
  same SMALLINT NOT NULL DEFAULT  0,
  some SMALLINT NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  rate NUMERIC(9,4) NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_bond_delete_trigger on basic_bond;
CREATE OR REPLACE FUNCTION basic_bond_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_bond',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_bond_delete_trigger 
BEFORE DELETE ON basic_bond 
FOR EACH ROW EXECUTE PROCEDURE basic_bond_delete_trigger_fun();
DROP TABLE IF EXISTS basic_item;
CREATE TABLE IF NOT EXISTS basic_item(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  temd_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  root VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  fore VARCHAR(30) NOT NULL DEFAULT  '',
  core VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(160) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  view VARCHAR(60) NOT NULL DEFAULT  '',
  text VARCHAR(800) NOT NULL DEFAULT  '',
  rank SMALLINT NOT NULL DEFAULT  1,
  base bool NOT NULL DEFAULT  false,
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  tick VARCHAR(20) NOT NULL DEFAULT  '',
  fund BIGINT NOT NULL DEFAULT  0,
  used BIGINT NOT NULL DEFAULT  0,
  race BIGINT NOT NULL DEFAULT  0,
  part BIGINT NOT NULL DEFAULT  0,
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_item_delete_trigger on basic_item;
CREATE OR REPLACE FUNCTION basic_item_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_item',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_item_delete_trigger 
BEFORE DELETE ON basic_item 
FOR EACH ROW EXECUTE PROCEDURE basic_item_delete_trigger_fun();
DROP TABLE IF EXISTS basic_mint;
CREATE TABLE IF NOT EXISTS basic_mint(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  code VARCHAR(20) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  data TEXT NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  base bool NOT NULL DEFAULT  false,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_mint_delete_trigger on basic_mint;
CREATE OR REPLACE FUNCTION basic_mint_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_mint',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_mint_delete_trigger 
BEFORE DELETE ON basic_mint 
FOR EACH ROW EXECUTE PROCEDURE basic_mint_delete_trigger_fun();
DROP TABLE IF EXISTS basic_pack;
CREATE TABLE IF NOT EXISTS basic_pack(
  id BIGINT NOT NULL,
  ctime TIMESTAMP DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  root VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  view VARCHAR(60) NOT NULL DEFAULT  '',
  text VARCHAR(800) NOT NULL DEFAULT  '',
  rank SMALLINT NOT NULL DEFAULT  1,
  base bool NOT NULL DEFAULT  false,
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  used VARCHAR(20) NOT NULL DEFAULT  '',
  race BIGINT NOT NULL DEFAULT  0,
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_pack_delete_trigger on basic_pack;
CREATE OR REPLACE FUNCTION basic_pack_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_pack',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_pack_delete_trigger 
BEFORE DELETE ON basic_pack 
FOR EACH ROW EXECUTE PROCEDURE basic_pack_delete_trigger_fun();
DROP TABLE IF EXISTS basic_pact;
CREATE TABLE IF NOT EXISTS basic_pact(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  FALSE,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  bond BIGINT NOT NULL DEFAULT  0,
  link BIGINT NOT NULL DEFAULT  0,
  code VARCHAR(30) NOT NULL DEFAULT  '',
  nore VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(120) NOT NULL DEFAULT  '',
  find VARCHAR(120) NOT NULL DEFAULT  '',
  have VARCHAR(120) NOT NULL DEFAULT  '',
  room BIGINT NOT NULL DEFAULT  0,
  work BIGINT NOT NULL DEFAULT  0,
  user BIGINT NOT NULL DEFAULT  0,
  face BIGINT NOT NULL DEFAULT  0,
  date VARCHAR(10) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  look VARCHAR(10) NOT NULL DEFAULT  '',
  over VARCHAR(10) NOT NULL DEFAULT  '',
  star VARCHAR(10) NOT NULL DEFAULT  '',
  end VARCHAR(10) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  sort VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  tick VARCHAR(20) NOT NULL DEFAULT  '',
  book VARCHAR(20) NOT NULL DEFAULT  '',
  park VARCHAR(20) NOT NULL DEFAULT  '',
  pout TEXT NOT NULL DEFAULT  '',
  gark VARCHAR(20) NOT NULL DEFAULT  '',
  gout TEXT NOT NULL DEFAULT  '',
  zark VARCHAR(20) NOT NULL DEFAULT  '',
  zout TEXT NOT NULL DEFAULT  '',
  same NUMERIC(28,4) NOT NULL DEFAULT  0,
  some NUMERIC(28,4) NOT NULL DEFAULT  0,
  fast NUMERIC(28,4) NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  task VARCHAR(160) NOT NULL DEFAULT  '',
  open VARCHAR(60) NOT NULL DEFAULT  '',
  bank VARCHAR(30) NOT NULL DEFAULT  '',
  site VARCHAR(160) NOT NULL DEFAULT  '',
  used TEXT NOT NULL DEFAULT  '',
  text TEXT NOT NULL DEFAULT  '',
  more TEXT NOT NULL DEFAULT  '',
  dwname VARCHAR(20) NOT NULL DEFAULT  '',
  wtext VARCHAR(80) NOT NULL DEFAULT  '',
  wlook VARCHAR(10) NOT NULL DEFAULT  '',
  cwname VARCHAR(20) NOT NULL DEFAULT  '',
  cwtext VARCHAR(80) NOT NULL DEFAULT  '',
  cwlook VARCHAR(10) NOT NULL DEFAULT  '',
  lsname VARCHAR(20) NOT NULL DEFAULT  '',
  lstext VARCHAR(80) NOT NULL DEFAULT  '',
  lslook VARCHAR(10) NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_pact_delete_trigger on basic_pact;
CREATE OR REPLACE FUNCTION basic_pact_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_pact',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_pact_delete_trigger 
BEFORE DELETE ON basic_pact 
FOR EACH ROW EXECUTE PROCEDURE basic_pact_delete_trigger_fun();
DROP TABLE IF EXISTS basic_part;
CREATE TABLE IF NOT EXISTS basic_part(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  noew(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  plan BIGINT NOT NULL DEFAULT  0,
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  nore VARCHAR(30) NOT NULL DEFAULT  '',
  core VARCHAR(30) NOT NULL DEFAULT  '',
  fact VARCHAR(160) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  more VARCHAR(10) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  form VARCHAR(20) NOT NULL DEFAULT  '',
  fund VARCHAR(60) NOT NULL DEFAULT  '',
  used VARCHAR(20) NOT NULL DEFAULT  '',
  back VARCHAR(60) NOT NULL DEFAULT  '',
  fask VARCHAR(60) NOT NULL DEFAULT  '',
  fast VARCHAR(60) NOT NULL DEFAULT  '',
  fost VARCHAR(60) NOT NULL DEFAULT  '',
  fore NUMERIC(28,4) NOT NULL DEFAULT  0,
  give NUMERIC(28,4) NOT NULL DEFAULT  0,
  have NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  fare NUMERIC(28,4) NOT NULL DEFAULT  0,
  port VARCHAR(10) NOT NULL DEFAULT  '',
  call VARCHAR(10) NOT NULL DEFAULT  '',
  fine VARCHAR(10) NOT NULL DEFAULT  '',
  read VARCHAR(10) NOT NULL DEFAULT  '',
  pick VARCHAR(10) NOT NULL DEFAULT  '',
  past NUMERIC(28,4) NOT NULL DEFAULT  0,
  star VARCHAR(10) NOT NULL DEFAULT  '',
  over VARCHAR(10) NOT NULL DEFAULT  '',
  move VARCHAR(10) NOT NULL DEFAULT  '',
  book VARCHAR(10) NOT NULL DEFAULT  '',
  room BIGINT NOT NULL DEFAULT  0,
  lead VARCHAR(60) NOT NULL DEFAULT  '',
  make VARCHAR(80) NOT NULL DEFAULT  '',
  made VARCHAR(80) NOT NULL DEFAULT  '',
  task VARCHAR(80) NOT NULL DEFAULT  '',
  take VARCHAR(80) NOT NULL DEFAULT  '',
  site VARCHAR(160) NOT NULL DEFAULT  '',
  work TEXT NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_part_delete_trigger on basic_part;
CREATE OR REPLACE FUNCTION basic_part_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_part',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_part_delete_trigger 
BEFORE DELETE ON basic_part 
FOR EACH ROW EXECUTE PROCEDURE basic_part_delete_trigger_fun();
DROP TABLE IF EXISTS basic_plan;
CREATE TABLE IF NOT EXISTS basic_plan(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  temd_id INTEGER NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  part BIGINT NOT NULL DEFAULT  0,
  link BIGINT NOT NULL DEFAULT  0,
  year VARCHAR(10) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  code VARCHAR(50) NOT NULL DEFAULT  '',
  fore VARCHAR(50) NOT NULL DEFAULT  '',
  core VARCHAR(50) NOT NULL DEFAULT  '',
  name VARCHAR(160) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  fund VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  task VARCHAR(160) NOT NULL DEFAULT  '',
  text TEXT NOT NULL DEFAULT  '',
  give NUMERIC(28,4) NOT NULL DEFAULT  0,
  fare NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  item BIGINT NOT NULL DEFAULT  0,
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_plan_delete_trigger on basic_plan;
CREATE OR REPLACE FUNCTION basic_plan_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_plan',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_plan_delete_trigger 
BEFORE DELETE ON basic_plan 
FOR EACH ROW EXECUTE PROCEDURE basic_plan_delete_trigger_fun();
DROP TABLE IF EXISTS basic_race;
CREATE TABLE IF NOT EXISTS basic_race(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  root VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  fore VARCHAR(10) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  view VARCHAR(60) NOT NULL DEFAULT  '',
  text VARCHAR(800) NOT NULL DEFAULT  '',
  rank SMALLINT NOT NULL DEFAULT  1,
  base bool NOT NULL DEFAULT  false,
  nore VARCHAR(30) NOT NULL DEFAULT  '',
  fact VARCHAR(160) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  mode VARCHAR(600) NOT NULL DEFAULT  '',
  more TEXT NOT NULL,
  link BIGINT NOT NULL DEFAULT  0,
  unit VARCHAR(60) NOT NULL DEFAULT  '',
  come VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(60) NOT NULL DEFAULT  '',
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  rlive SMALLINT NOT NULL DEFAULT  0,
  rterm SMALLINT NOT NULL DEFAULT  0,
  rmaxi INTEGER NOT NULL DEFAULT  0,
  rmini INTEGER NOT NULL DEFAULT  0,
  rnote TEXT NOT NULL,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_race_delete_trigger on basic_race;
CREATE OR REPLACE FUNCTION basic_race_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_race',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_race_delete_trigger 
BEFORE DELETE ON basic_race 
FOR EACH ROW EXECUTE PROCEDURE basic_race_delete_trigger_fun();
DROP TABLE IF EXISTS basic_rone;
CREATE TABLE IF NOT EXISTS basic_rone(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  bond BIGINT NOT NULL DEFAULT  0,
  race BIGINT NOT NULL DEFAULT  0,
  ware VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(200) NOT NULL DEFAULT  '',
  find VARCHAR(200) NOT NULL DEFAULT  '',
  made VARCHAR(200) NOT NULL DEFAULT  '',
  mode VARCHAR(200) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  unit VARCHAR(20) NOT NULL DEFAULT  '',
  text TEXT NOT NULL DEFAULT  '',
  live SMALLINT NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL,
  sale NUMERIC(28,4) NOT NULL,
  maxi INTEGER NOT NULL DEFAULT  0,
  mini INTEGER NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_rone_delete_trigger on basic_rone;
CREATE OR REPLACE FUNCTION basic_rone_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_rone',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_rone_delete_trigger 
BEFORE DELETE ON basic_rone 
FOR EACH ROW EXECUTE PROCEDURE basic_rone_delete_trigger_fun();
DROP TABLE IF EXISTS basic_room;
CREATE TABLE IF NOT EXISTS basic_room(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  temd_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  root VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  view VARCHAR(60) NOT NULL DEFAULT  '',
  text VARCHAR(6000) NOT NULL DEFAULT  '',
  rank SMALLINT NOT NULL DEFAULT  0,
  base bool NOT NULL DEFAULT  false,
  same SMALLINT NOT NULL DEFAULT  0,
  some SMALLINT NOT NULL DEFAULT  0,
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  nore VARCHAR(30) NOT NULL DEFAULT  '',
  fact VARCHAR(160) NOT NULL DEFAULT  '',
  post VARCHAR(30) NOT NULL DEFAULT  '',
  site VARCHAR(120) NOT NULL DEFAULT  '',
  tele VARCHAR(30) NOT NULL DEFAULT  '',
  faxa VARCHAR(30) NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_room_delete_trigger on basic_room;
CREATE OR REPLACE FUNCTION basic_room_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_room',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_room_delete_trigger 
BEFORE DELETE ON basic_room 
FOR EACH ROW EXECUTE PROCEDURE basic_room_delete_trigger_fun();
DROP TABLE IF EXISTS basic_rule;
CREATE TABLE IF NOT EXISTS basic_rule(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  ware VARCHAR(20) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  root VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  view VARCHAR(60) NOT NULL DEFAULT  '',
  text VARCHAR(800) NOT NULL DEFAULT  '',
  rank SMALLINT NOT NULL DEFAULT  1,
  base bool NOT NULL DEFAULT  false,
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(60) NOT NULL DEFAULT  '',
  tick VARCHAR(20) NOT NULL DEFAULT  '',
  bind VARCHAR(20) NOT NULL DEFAULT  '',
  book VARCHAR(60) NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_rule_delete_trigger on basic_rule;
CREATE OR REPLACE FUNCTION basic_rule_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_rule',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_rule_delete_trigger 
BEFORE DELETE ON basic_rule 
FOR EACH ROW EXECUTE PROCEDURE basic_rule_delete_trigger_fun();
DROP TABLE IF EXISTS basic_site;
CREATE TABLE IF NOT EXISTS basic_site(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL,
  utime TIMESTAMP NOT NULL,
  temd_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  watr VARCHAR(20) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  area VARCHAR(60) NOT NULL DEFAULT  '',
  unit VARCHAR(60) NOT NULL DEFAULT  '',
  rank VARCHAR(60) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  form VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  used VARCHAR(80) NOT NULL DEFAULT  '',
  tick VARCHAR(80) NOT NULL DEFAULT  '',
  plus VARCHAR(80) NOT NULL DEFAULT  '',
  same SMALLINT NOT NULL DEFAULT  0,
  some SMALLINT NOT NULL DEFAULT  0,
  size NUMERIC(28,4) NOT NULL DEFAULT  0,
  fore NUMERIC(28,4) NOT NULL DEFAULT  0,
  fare NUMERIC(28,4) NOT NULL DEFAULT  0,
  site VARCHAR(160) NOT NULL DEFAULT  '',
  cctv VARCHAR(20) NOT NULL DEFAULT  '',
  face VARCHAR(20) NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_site_delete_trigger on basic_site;
CREATE OR REPLACE FUNCTION basic_site_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_site',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_site_delete_trigger 
BEFORE DELETE ON basic_site 
FOR EACH ROW EXECUTE PROCEDURE basic_site_delete_trigger_fun();
DROP TABLE IF EXISTS basic_team;
CREATE TABLE IF NOT EXISTS basic_team(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  cuid BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  root VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(80) NOT NULL DEFAULT  '',
  find VARCHAR(80) NOT NULL DEFAULT  '',
  view VARCHAR(60) NOT NULL DEFAULT  '',
  text VARCHAR(800) NOT NULL DEFAULT  '',
  rank SMALLINT NOT NULL DEFAULT  1,
  base bool NOT NULL DEFAULT  0,
  same INTEGER NOT NULL DEFAULT  0,
  some INTEGER NOT NULL DEFAULT  0,
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  area VARCHAR(20) NOT NULL DEFAULT  '',
  core VARCHAR(30) NOT NULL DEFAULT  '',
  fore VARCHAR(10) NOT NULL DEFAULT  '',
  nore VARCHAR(150) NOT NULL DEFAULT  '',
  fact VARCHAR(160) NOT NULL DEFAULT  '',
  site VARCHAR(120) NOT NULL DEFAULT  '',
  tele VARCHAR(30) NOT NULL DEFAULT  '',
  faxa VARCHAR(30) NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_team_delete_trigger on basic_team;
CREATE OR REPLACE FUNCTION basic_team_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_team',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_team_delete_trigger 
BEFORE DELETE ON basic_team 
FOR EACH ROW EXECUTE PROCEDURE basic_team_delete_trigger_fun();
DROP TABLE IF EXISTS basic_work;
CREATE TABLE IF NOT EXISTS basic_work(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  room_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  code VARCHAR(100) NOT NULL DEFAULT  '',
  core VARCHAR(30) NOT NULL DEFAULT  '',
  cord VARCHAR(30) NOT NULL DEFAULT  '',
  sacn VARCHAR(50) NOT NULL DEFAULT  '',
  sard VARCHAR(18) NOT NULL DEFAULT  '',
  nore VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(40) NOT NULL DEFAULT  '',
  once VARCHAR(40) NOT NULL DEFAULT  '',
  find VARCHAR(40) NOT NULL DEFAULT  '',
  makr VARCHAR(20) NOT NULL DEFAULT  '',
  role VARCHAR(20) NOT NULL DEFAULT  '',
  task VARCHAR(20) NOT NULL DEFAULT  '',
  face VARCHAR(20) NOT NULL DEFAULT  '',
  born VARCHAR(20) NOT NULL DEFAULT  '',
  bond VARCHAR(20) NOT NULL DEFAULT  '',
  male VARCHAR(10) NOT NULL DEFAULT  '',
  mare VARCHAR(10) NOT NULL DEFAULT  '',
  fine VARCHAR(50) NOT NULL DEFAULT  '',
  moew VARCHAR(200) NOT NULL DEFAULT  '',
  last VARCHAR(20) NOT NULL DEFAULT  '',
  best VARCHAR(20) NOT NULL DEFAULT  '',
  arch VARCHAR(50) NOT NULL DEFAULT  '',
  asch VARCHAR(50) NOT NULL DEFAULT  '',
  most VARCHAR(200) NOT NULL DEFAULT  '',
  time VARCHAR(20) NOT NULL DEFAULT  '',
  fire VARCHAR(10) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  take VARCHAR(10) NOT NULL DEFAULT  '',
  make VARCHAR(10) NOT NULL DEFAULT  '',
  star VARCHAR(10) NOT NULL DEFAULT  '',
  over VARCHAR(10) NOT NULL DEFAULT  '',
  moon VARCHAR(10) NOT NULL DEFAULT  '',
  week VARCHAR(10) NOT NULL DEFAULT  '',
  bind VARCHAR(200) NOT NULL DEFAULT  '',
  post VARCHAR(20) NOT NULL DEFAULT  '',
  rank VARCHAR(50) NOT NULL DEFAULT  '',
  rate VARCHAR(20) NOT NULL DEFAULT  '',
  rard VARCHAR(50) NOT NULL DEFAULT  '',
  lose VARCHAR(10) NOT NULL DEFAULT  '',
  tele VARCHAR(20) NOT NULL DEFAULT  '',
  faxa VARCHAR(20) NOT NULL DEFAULT  '',
  move VARCHAR(20) NOT NULL DEFAULT  '',
  bank VARCHAR(30) NOT NULL DEFAULT  '',
  open VARCHAR(60) NOT NULL DEFAULT  '',
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  fate NUMERIC(28,4) NOT NULL DEFAULT  0,
  size SMALLINT NOT NULL DEFAULT  0,
  some SMALLINT NOT NULL DEFAULT  0,
  sole bool NOT NULL DEFAULT  false,
  kind VARCHAR(30) NOT NULL DEFAULT  '',
  come VARCHAR(10) NOT NULL DEFAULT  '',
  tick VARCHAR(20) NOT NULL DEFAULT  '',
  home VARCHAR(80) NOT NULL DEFAULT  '',
  bite VARCHAR(80) NOT NULL DEFAULT  '',
  site VARCHAR(80) NOT NULL DEFAULT  '',
  pite VARCHAR(80) NOT NULL DEFAULT  '',
  dite VARCHAR(80) NOT NULL DEFAULT  '',
  live VARCHAR(80) NOT NULL DEFAULT  '',
  link VARCHAR(320) NOT NULL DEFAULT  '',
  back VARCHAR(320) NOT NULL DEFAULT  '',
  text TEXT NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
  pose bool NOT NULL DEFAULT  false,
  pure bool NOT NULL DEFAULT  false,
  line SMALLINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS basic_work_delete_trigger on basic_work;
CREATE OR REPLACE FUNCTION basic_work_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'basic_work',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER basic_work_delete_trigger 
BEFORE DELETE ON basic_work 
FOR EACH ROW EXECUTE PROCEDURE basic_work_delete_trigger_fun();
DROP TABLE IF EXISTS bz_data;
CREATE TABLE IF NOT EXISTS bz_data(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  ware VARCHAR(10) NOT NULL DEFAULT  '',
  team_id BIGINT NOT NULL DEFAULT  0,
  buid BIGINT NOT NULL DEFAULT  0,
  part BIGINT NOT NULL DEFAULT  0,
  room BIGINT NOT NULL DEFAULT  0,
  bond BIGINT NOT NULL DEFAULT  0,
  plan BIGINT NOT NULL DEFAULT  0,
  pact BIGINT NOT NULL DEFAULT  0,
  lend BIGINT NOT NULL DEFAULT  0,
  link BIGINT NOT NULL DEFAULT  0,
  sort VARCHAR(20) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  auto VARCHAR(20) NOT NULL DEFAULT  '',
  mark VARCHAR(30) NOT NULL DEFAULT  '',
  time VARCHAR(20) NOT NULL DEFAULT  '',
  star VARCHAR(20) NOT NULL DEFAULT  '',
  back VARCHAR(20) NOT NULL DEFAULT  '',
  look VARCHAR(10) NOT NULL DEFAULT  '',
  book VARCHAR(10) NOT NULL DEFAULT  '',
  port VARCHAR(30) NOT NULL DEFAULT  '',
  cnid BIGINT NOT NULL DEFAULT  0,
  over VARCHAR(10) NOT NULL DEFAULT  '',
  cord VARCHAR(80) NOT NULL DEFAULT  '',
  zwid BIGINT NOT NULL DEFAULT  0,
  fund VARCHAR(20) NOT NULL DEFAULT  '',
  used VARCHAR(20) NOT NULL DEFAULT  '',
  king VARCHAR(60) NOT NULL DEFAULT  '',
  list BIGINT NOT NULL DEFAULT  0,
  pack BIGINT NOT NULL DEFAULT  0,
  item BIGINT NOT NULL DEFAULT  0,
  race BIGINT NOT NULL DEFAULT  0,
  rule BIGINT NOT NULL DEFAULT  0,
  bank BIGINT NOT NULL DEFAULT  0,
  acit VARCHAR(60) NOT NULL DEFAULT  '',
  acio VARCHAR(60) NOT NULL DEFAULT  '',
  acid VARCHAR(30) NOT NULL DEFAULT  '',
  tick VARCHAR(60) NOT NULL DEFAULT  '',
  name VARCHAR(50) NOT NULL DEFAULT  '',
  post VARCHAR(120) NOT NULL DEFAULT  '',
  join VARCHAR(300) NOT NULL DEFAULT  '',
  site VARCHAR(120) NOT NULL DEFAULT  '',
  text TEXT NOT NULL DEFAULT  '',
  same SMALLINT NOT NULL DEFAULT  0,
  some SMALLINT NOT NULL DEFAULT  0,
  give NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  fact NUMERIC(28,4) NOT NULL DEFAULT  0,
  fare NUMERIC(28,4) NOT NULL DEFAULT  0,
  fair NUMERIC(28,4) NOT NULL DEFAULT  0,
  fown NUMERIC(28,4) NOT NULL DEFAULT  0,
  fost NUMERIC(28,4) NOT NULL DEFAULT  0,
  fout NUMERIC(28,4) NOT NULL DEFAULT  0,
  five NUMERIC(28,4) NOT NULL DEFAULT  0,
  fave NUMERIC(28,4) NOT NULL DEFAULT  0,
  lost NUMERIC(28,4) NOT NULL DEFAULT  0,
  note TEXT(255) NOT NULL DEFAULT  '',
  line SMALLINT NOT NULL DEFAULT  0,
  star1 VARCHAR(20) NOT NULL DEFAULT  '',
  back1 VARCHAR(20) NOT NULL DEFAULT  '',
  some1 SMALLINT NOT NULL DEFAULT  0,
  site1 VARCHAR(120) NOT NULL DEFAULT  '',
  fare1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fair1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fown1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fost1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fout1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  five1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fave1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  lost1 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fate2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fair2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fown2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fost2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fout2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  five2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  fave2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  lost2 NUMERIC(28,4) NOT NULL DEFAULT  0,
  kind1 VARCHAR(20) NOT NULL DEFAULT  '',
  acit1 VARCHAR(60) NOT NULL DEFAULT  '',
  acio1 VARCHAR(60) NOT NULL DEFAULT  '',
  acid1 VARCHAR(30) NOT NULL DEFAULT  '',
  kind2 VARCHAR(20) NOT NULL DEFAULT  '',
  acit2 VARCHAR(60) NOT NULL DEFAULT  '',
  acio2 VARCHAR(60) NOT NULL DEFAULT  '',
  acid2 VARCHAR(30) NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS bz_data_delete_trigger on bz_data;
CREATE OR REPLACE FUNCTION bz_data_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'bz_data',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER bz_data_delete_trigger 
BEFORE DELETE ON bz_data 
FOR EACH ROW EXECUTE PROCEDURE bz_data_delete_trigger_fun();
DROP TABLE IF EXISTS cn_bill;
CREATE TABLE IF NOT EXISTS cn_bill(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  part BIGINT NOT NULL DEFAULT  0,
  sore VARCHAR(20) NOT NULL DEFAULT  '',
  bank BIGINT NOT NULL DEFAULT  0,
  kind BIGINT NOT NULL DEFAULT  0,
  link BIGINT NOT NULL DEFAULT  0,
  mark VARCHAR(10) NOT NULL DEFAULT  '',
  moon VARCHAR(10) NOT NULL DEFAULT  '',
  gain VARCHAR(10) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  look VARCHAR(10) NOT NULL DEFAULT  '',
  over VARCHAR(10) NOT NULL DEFAULT  '',
  auto VARCHAR(20) NOT NULL DEFAULT  '',
  cnid BIGINT NOT NULL DEFAULT  0,
  zwid BIGINT NOT NULL DEFAULT  0,
  text VARCHAR(120) NOT NULL DEFAULT  '',
  some SMALLINT NOT NULL DEFAULT  0,
  used SMALLINT NOT NULL DEFAULT  0,
  muck SMALLINT NOT NULL DEFAULT  0,
  none SMALLINT NOT NULL DEFAULT  0,
  core VARCHAR(50) NOT NULL DEFAULT  '',
  code VARCHAR(60) NOT NULL DEFAULT  '',
  name VARCHAR(60) NOT NULL DEFAULT  '',
  fact VARCHAR(60) NOT NULL DEFAULT  '',
  open VARCHAR(60) NOT NULL DEFAULT  '',
  zone VARCHAR(20) NOT NULL DEFAULT  '',
  town VARCHAR(20) NOT NULL DEFAULT  '',
  pass VARCHAR(20) NOT NULL DEFAULT  '',
  past VARCHAR(20) NOT NULL DEFAULT  '',
  time VARCHAR(20) NOT NULL DEFAULT  '',
  user BIGINT NOT NULL DEFAULT  0,
  face BIGINT NOT NULL DEFAULT  0,
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS cn_bill_delete_trigger on cn_bill;
CREATE OR REPLACE FUNCTION cn_bill_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'cn_bill',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER cn_bill_delete_trigger 
BEFORE DELETE ON cn_bill 
FOR EACH ROW EXECUTE PROCEDURE cn_bill_delete_trigger_fun();
DROP TABLE IF EXISTS cn_data;
CREATE TABLE IF NOT EXISTS cn_data(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  buid BIGINT NOT NULL DEFAULT  0,
  ware VARCHAR(10) NOT NULL DEFAULT  '',
  move BIGINT NOT NULL DEFAULT  0,
  part BIGINT NOT NULL DEFAULT  0,
  pact BIGINT NOT NULL DEFAULT  0,
  plan BIGINT NOT NULL DEFAULT  0,
  sort VARCHAR(20) NOT NULL DEFAULT  '',
  auto VARCHAR(30) NOT NULL DEFAULT  '',
  port VARCHAR(30) NOT NULL DEFAULT  '',
  code VARCHAR(30) NOT NULL DEFAULT  '',
  core VARCHAR(30) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  look VARCHAR(20) NOT NULL DEFAULT  '',
  book VARCHAR(20) NOT NULL DEFAULT  '',
  over VARCHAR(20) NOT NULL DEFAULT  '',
  cord VARCHAR(80) NOT NULL DEFAULT  '',
  zwid BIGINT NOT NULL DEFAULT  0,
  over1 VARCHAR(10) NOT NULL DEFAULT  '',
  cord1 VARCHAR(80) NOT NULL DEFAULT  '',
  zwid1 BIGINT NOT NULL DEFAULT  0,
  none bool NOT NULL DEFAULT  false,
  fund VARCHAR(20) NOT NULL DEFAULT  '',
  used VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  mint BIGINT NOT NULL DEFAULT  0,
  bank BIGINT NOT NULL DEFAULT  0,
  bank1 BIGINT NOT NULL DEFAULT  0,
  bond BIGINT NOT NULL DEFAULT  0,
  acit VARCHAR(60) NOT NULL DEFAULT  '',
  acio VARCHAR(60) NOT NULL DEFAULT  '',
  acid VARCHAR(30) NOT NULL DEFAULT  '',
  room BIGINT NOT NULL DEFAULT  0,
  list BIGINT NOT NULL DEFAULT  0,
  pack BIGINT NOT NULL DEFAULT  0,
  item BIGINT NOT NULL DEFAULT  0,
  race BIGINT NOT NULL DEFAULT  0,
  rule BIGINT NOT NULL DEFAULT  0,
  user BIGINT NOT NULL DEFAULT  0,
  face BIGINT NOT NULL DEFAULT  0,
  bill BIGINT NOT NULL DEFAULT  0,
  text VARCHAR(600) NOT NULL DEFAULT  '',
  data TEXT NOT NULL DEFAULT  '',
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  drit NUMERIC(28,4) NOT NULL DEFAULT  0,
  crit NUMERIC(28,4) NOT NULL DEFAULT  0,
  time VARCHAR(20) NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
  line SMALLINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS cn_data_delete_trigger on cn_data;
CREATE OR REPLACE FUNCTION cn_data_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'cn_data',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER cn_data_delete_trigger 
BEFORE DELETE ON cn_data 
FOR EACH ROW EXECUTE PROCEDURE cn_data_delete_trigger_fun();
DROP TABLE IF EXISTS cn_more;
CREATE TABLE IF NOT EXISTS cn_more(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  buid BIGINT NOT NULL DEFAULT  0,
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  text TEXT NOT NULL DEFAULT  '',
  unit BIGINT NOT NULL DEFAULT  0,
  some NUMERIC(28,4) NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  line SMALLINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS cn_more_delete_trigger on cn_more;
CREATE OR REPLACE FUNCTION cn_more_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'cn_more',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER cn_more_delete_trigger 
BEFORE DELETE ON cn_more 
FOR EACH ROW EXECUTE PROCEDURE cn_more_delete_trigger_fun();
DROP TABLE IF EXISTS gz_bank;
CREATE TABLE IF NOT EXISTS gz_bank(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  work BIGINT NOT NULL DEFAULT  0,
  code VARCHAR(30) NOT NULL DEFAULT  '',
  kind VARCHAR(50) NOT NULL DEFAULT  '',
  bank VARCHAR(50) NOT NULL DEFAULT  '',
  open VARCHAR(80) NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS gz_bank_delete_trigger on gz_bank;
CREATE OR REPLACE FUNCTION gz_bank_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'gz_bank',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER gz_bank_delete_trigger 
BEFORE DELETE ON gz_bank 
FOR EACH ROW EXECUTE PROCEDURE gz_bank_delete_trigger_fun();
DROP TABLE IF EXISTS gz_data;
CREATE TABLE IF NOT EXISTS gz_data(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  temd_id BIGINT NOT NULL DEFAULT  0,
  room BIGINT NOT NULL DEFAULT  0,
  race BIGINT NOT NULL DEFAULT  0,
  work BIGINT NOT NULL DEFAULT  0,
  sort VARCHAR(20) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  look VARCHAR(10) NOT NULL DEFAULT  '',
  bzid BIGINT NOT NULL DEFAULT  0,
  code VARCHAR(20) NOT NULL DEFAULT  '',
  name VARCHAR(50) NOT NULL DEFAULT  '',
  card VARCHAR(18) NOT NULL DEFAULT  '',
  post VARCHAR(20) NOT NULL DEFAULT  '',
  bank VARCHAR(50) NOT NULL DEFAULT  '',
  open VARCHAR(80) NOT NULL DEFAULT  '',
  kind VARCHAR(60) NOT NULL DEFAULT  '',
  care NUMERIC(28,4) NOT NULL DEFAULT  0,
  core NUMERIC(28,4) NOT NULL DEFAULT  0,
  kare NUMERIC(28,4) NOT NULL DEFAULT  0,
  kore NUMERIC(28,4) NOT NULL DEFAULT  0,
  live NUMERIC(28,4) NOT NULL DEFAULT  0,
  love NUMERIC(28,4) NOT NULL DEFAULT  0,
  fare NUMERIC(28,4) NOT NULL DEFAULT  0,
  fote NUMERIC(28,4) NOT NULL DEFAULT  0,
  hurt NUMERIC(28,4) NOT NULL DEFAULT  0,
  give NUMERIC(28,4) NOT NULL DEFAULT  0,
  take NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  port NUMERIC(28,4) NOT NULL DEFAULT  0,
  fact NUMERIC(28,4) NOT NULL DEFAULT  0,
  line INTEGER NOT NULL DEFAULT  0,
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS gz_data_delete_trigger on gz_data;
CREATE OR REPLACE FUNCTION gz_data_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'gz_data',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER gz_data_delete_trigger 
BEFORE DELETE ON gz_data 
FOR EACH ROW EXECUTE PROCEDURE gz_data_delete_trigger_fun();
DROP TABLE IF EXISTS gz_work;
CREATE TABLE IF NOT EXISTS gz_work(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  stop bool NOT NULL DEFAULT  false,
  room BIGINT NOT NULL DEFAULT  0,
  race BIGINT NOT NULL DEFAULT  0,
  code VARCHAR(20) NOT NULL DEFAULT  '',
  name VARCHAR(40) NOT NULL DEFAULT  '',
  find VARCHAR(40) NOT NULL DEFAULT  '',
  mark VARCHAR(60) NOT NULL DEFAULT  '',
  post VARCHAR(20) NOT NULL DEFAULT  '',
  card VARCHAR(18) NOT NULL DEFAULT  '',
  male VARCHAR(10) NOT NULL DEFAULT  '',
  move VARCHAR(20) NOT NULL DEFAULT  '',
  time VARCHAR(20) NOT NULL DEFAULT  '',
  note TEXT NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS gz_work_delete_trigger on gz_work;
CREATE OR REPLACE FUNCTION gz_work_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'gz_work',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER gz_work_delete_trigger 
BEFORE DELETE ON gz_work 
FOR EACH ROW EXECUTE PROCEDURE gz_work_delete_trigger_fun();
DROP TABLE IF EXISTS kc_data;
CREATE TABLE IF NOT EXISTS kc_data(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  ware VARCHAR(10) NOT NULL DEFAULT  '',
  team_id BIGINT NOT NULL DEFAULT  0,
  part BIGINT NOT NULL DEFAULT  0,
  site BIGINT NOT NULL DEFAULT  0,
  room BIGINT NOT NULL DEFAULT  0,
  buid BIGINT NOT NULL DEFAULT  0,
  sort VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  auto VARCHAR(20) NOT NULL DEFAULT  '',
  bond BIGINT NOT NULL DEFAULT  0,
  bill BIGINT NOT NULL DEFAULT  0,
  link BIGINT NOT NULL DEFAULT  0,
  word BIGINT NOT NULL DEFAULT  0,
  look VARCHAR(10) NOT NULL DEFAULT  '',
  over VARCHAR(10) NOT NULL DEFAULT  '',
  cord VARCHAR(80) NOT NULL DEFAULT  '',
  zwid BIGINT NOT NULL,
  back VARCHAR(80) NOT NULL DEFAULT  '',
  book VARCHAR(10) NOT NULL DEFAULT  '',
  case VARCHAR(80) NOT NULL DEFAULT  '',
  care VARCHAR(10) NOT NULL DEFAULT  '',
  face BIGINT NOT NULL DEFAULT  0,
  tick VARCHAR(20) NOT NULL DEFAULT  '',
  race BIGINT NOT NULL DEFAULT  0,
  rone BIGINT NOT NULL DEFAULT  0,
  code VARCHAR(30) NOT NULL DEFAULT  '',
  name VARCHAR(200) NOT NULL DEFAULT  '',
  mode VARCHAR(120) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  time VARCHAR(20) NOT NULL DEFAULT  '',
  base VARCHAR(30) NOT NULL DEFAULT  '',
  card VARCHAR(20) NOT NULL DEFAULT  '',
  core VARCHAR(30) NOT NULL DEFAULT  '',
  unit VARCHAR(20) NOT NULL DEFAULT  '',
  fore NUMERIC(19,4) NOT NULL DEFAULT  0,
  fnum NUMERIC(19,4) NOT NULL DEFAULT  0,
  fsum NUMERIC(28,4) NOT NULL DEFAULT  0,
  cost NUMERIC(19,4) NOT NULL DEFAULT  0,
  rate NUMERIC(9,4) NOT NULL DEFAULT  0,
  dnum NUMERIC(19,4) NOT NULL DEFAULT  0,
  dsum NUMERIC(28,4) NOT NULL DEFAULT  0,
  sale NUMERIC(19,4) NOT NULL DEFAULT  0,
  cnum NUMERIC(19,4) NOT NULL DEFAULT  0,
  csum NUMERIC(28,4) NOT NULL DEFAULT  0,
  note TEXT NOT NULL DEFAULT  '',
  line SMALLINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS kc_data_delete_trigger on kc_data;
CREATE OR REPLACE FUNCTION kc_data_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'kc_data',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER kc_data_delete_trigger 
BEFORE DELETE ON kc_data 
FOR EACH ROW EXECUTE PROCEDURE kc_data_delete_trigger_fun();
DROP TABLE IF EXISTS kc_link;
CREATE TABLE IF NOT EXISTS kc_link(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  sort VARCHAR(20) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  name VARCHAR(20) NOT NULL DEFAULT  '',
  xuid BIGINT NOT NULL DEFAULT  0,
  rone BIGINT NOT NULL DEFAULT  0,
  note TEXT NOT NULL DEFAULT  '',
  line SMALLINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS kc_link_delete_trigger on kc_link;
CREATE OR REPLACE FUNCTION kc_link_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'kc_link',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER kc_link_delete_trigger 
BEFORE DELETE ON kc_link 
FOR EACH ROW EXECUTE PROCEDURE kc_link_delete_trigger_fun();
DROP TABLE IF EXISTS kc_live;
CREATE TABLE IF NOT EXISTS kc_live(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  ware VARCHAR(10) NOT NULL DEFAULT  '',
  site BIGINT NOT NULL DEFAULT  0,
  room BIGINT NOT NULL DEFAULT  0,
  date VARCHAR(10) NOT NULL DEFAULT  '',
  over VARCHAR(10) NOT NULL DEFAULT  '',
  rone BIGINT NOT NULL DEFAULT  0,
  user BIGINT NOT NULL DEFAULT  0,
  code VARCHAR(20) NOT NULL DEFAULT  '',
  make VARCHAR(10) NOT NULL DEFAULT  '',
  init NUMERIC(28,4) NOT NULL DEFAULT  0,
  come NUMERIC(28,4) NOT NULL DEFAULT  0,
  give NUMERIC(28,4) NOT NULL DEFAULT  0,
  some NUMERIC(28,4) NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  fact NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  link BIGINT NOT NULL DEFAULT  0,
  mark VARCHAR(10) NOT NULL DEFAULT  '',
  time VARCHAR(20) NOT NULL DEFAULT  '',
  note VARCHAR(160) NOT NULL DEFAULT  '',
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS kc_live_delete_trigger on kc_live;
CREATE OR REPLACE FUNCTION kc_live_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'kc_live',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER kc_live_delete_trigger 
BEFORE DELETE ON kc_live 
FOR EACH ROW EXECUTE PROCEDURE kc_live_delete_trigger_fun();
DROP TABLE IF EXISTS zw_data;
CREATE TABLE IF NOT EXISTS zw_data(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  ware VARCHAR(10) NOT NULL DEFAULT  '',
  buid BIGINT NOT NULL DEFAULT  0,
  sore VARCHAR(20) NOT NULL DEFAULT  '',
  year VARCHAR(10) NOT NULL DEFAULT  '',
  date VARCHAR(10) NOT NULL DEFAULT  '',
  suto VARCHAR(20) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  look VARCHAR(20) NOT NULL DEFAULT  '',
  over VARCHAR(20) NOT NULL DEFAULT  '',
  text TEXT NOT NULL DEFAULT  '',
  cwid BIGINT NOT NULL DEFAULT  0,
  ysid BIGINT NOT NULL DEFAULT  0,
  mint BIGINT NOT NULL DEFAULT  0,
  bank BIGINT NOT NULL DEFAULT  0,
  room BIGINT NOT NULL DEFAULT  0,
  work BIGINT NOT NULL DEFAULT  0,
  bond BIGINT NOT NULL DEFAULT  0,
  race BIGINT NOT NULL DEFAULT  0,
  pack BIGINT NOT NULL DEFAULT  0,
  item BIGINT NOT NULL DEFAULT  0,
  part BIGINT NOT NULL DEFAULT  0,
  pact BIGINT NOT NULL DEFAULT  0,
  fund BIGINT NOT NULL DEFAULT  0,
  used BIGINT NOT NULL DEFAULT  0,
  bill VARCHAR(50) NOT NULL DEFAULT  '',
  book VARCHAR(10) NOT NULL DEFAULT  '',
  term INTEGER NOT NULL DEFAULT  0,
  live INTEGER NOT NULL DEFAULT  0,
  tick VARCHAR(80) NOT NULL DEFAULT  '',
  turn VARCHAR(80) NOT NULL DEFAULT  '',
  unit VARCHAR(20) NOT NULL DEFAULT  '',
  rate NUMERIC(9,4) NOT NULL DEFAULT  0,
  some NUMERIC(19,4) NOT NULL DEFAULT  0,
  cost NUMERIC(28,4) NOT NULL DEFAULT  0,
  cast NUMERIC(28,4) NOT NULL DEFAULT  0,
  dsum NUMERIC(28,4) NOT NULL DEFAULT  0,
  csum NUMERIC(28,4) NOT NULL DEFAULT  0,
  draw NUMERIC(28,4) NOT NULL DEFAULT  0,
  craw NUMERIC(28,4) NOT NULL DEFAULT  0,
  line SMALLINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS zw_data_delete_trigger on zw_data;
CREATE OR REPLACE FUNCTION zw_data_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'zw_data',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER zw_data_delete_trigger 
BEFORE DELETE ON zw_data 
FOR EACH ROW EXECUTE PROCEDURE zw_data_delete_trigger_fun();
DROP TABLE IF EXISTS zw_mode;
CREATE TABLE IF NOT EXISTS zw_mode(
  id BIGINT NOT NULL,
  ctime TIMESTAMP NOT NULL DEFAULT  now(),
  utime TIMESTAMP NOT NULL DEFAULT  now(),
  team_id BIGINT NOT NULL DEFAULT  0,
  date VARCHAR(10) NOT NULL DEFAULT  '',
  kind VARCHAR(20) NOT NULL DEFAULT  '',
  name VARCHAR(160) NOT NULL DEFAULT  '',
  code TEXT NOT NULL DEFAULT  '',
  rule BIGINT NOT NULL DEFAULT  0,
  mark VARCHAR(20) NOT NULL DEFAULT  '',
  bind VARCHAR(20) NOT NULL DEFAULT  '',
  line SMALLINT NOT NULL DEFAULT  0,
    PRIMARY KEY (id)
);

DROP TRIGGER IF EXISTS zw_mode_delete_trigger on zw_mode;
CREATE OR REPLACE FUNCTION zw_mode_delete_trigger_fun()
returns trigger as $$
begin
 INSERT INTO log_delete(name,mark,cont) 
 SELECT 'zw_mode',0,row_to_json(old);
RETURN old;
end;
$$
language plpgsql;
CREATE TRIGGER zw_mode_delete_trigger 
BEFORE DELETE ON zw_mode 
FOR EACH ROW EXECUTE PROCEDURE zw_mode_delete_trigger_fun();
