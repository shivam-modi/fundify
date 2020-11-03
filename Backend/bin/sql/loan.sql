CREATE TABLE loan(
  source VARCHAR(85) NOT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  rate DECIMAL(6, 2) NOT NULL,
  tenure SMALLINT NOT NULL,
  cid INTEGER REFERENCES corporation("companyId") NOT NULL
);