CREATE TABLE donation(
  did INTEGER REFERENCES nonCeo(id) NOT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  "fId" INTEGER REFERENCES corporation("companyId") NOT NULL,
  "yearOfDonation" SMALLINT NOT NULL,
);