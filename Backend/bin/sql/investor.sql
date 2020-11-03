CREATE TABLE investor(
  "investorId" INTEGER REFERENCES corporation("companyId") NOT NULL,
  "fundedId" INTEGER REFERENCES corporation("companyId") NOT NULL,
  stocks DECIMAL(15, 2) NOT NULL,
  "yearOfInvestment" SMALLINT NOT NULL,
  shares DECIMAL(6, 2) NOT NULL,
  "fundingType" VARCHAR(85) NOT NULL
);