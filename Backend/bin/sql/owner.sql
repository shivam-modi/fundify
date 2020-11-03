CREATE TABLE ceo(
  id SERIAL PRIMARY KEY,
  "usernameHash" CHARACTER(64) NOT NULL,
  "passwordHash" CHARACTER(64) NOT NULL,
  "companyId" INTEGER REFERENCES corporation("companyId")
);