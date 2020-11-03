CREATE TABLE corporation(
    "companyId" SERIAL PRIMARY KEY,
    "companyName" VARCHAR(80) NOT NULL,
    "ownerId" INTEGER REFERENCES owner,
    profit DECIMAL(15,2),
    "growthRate" DECIMAL(6, 2) NOT NULL,
    "currentAsset" DECIMAL(20,2),
    domain VARCHAR(60) NOT NULL,
    "fundsRequire" DECIMAL(15, 2),
    popular VARCHAR(65), 
);