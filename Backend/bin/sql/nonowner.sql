CREATE TABLE nonCeo{
    id SERIAL PRIMARY KEY,
    "usernameHash" CHARACTER(64) NOT NULL,
    "passwordHash" CHARACTER(64) NOT NULL,
    funds INTEGER NOT NULL
}