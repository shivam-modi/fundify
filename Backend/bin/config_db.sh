#!/bin/bash

echo "Configuring fundifydb"

export PGPASSWORD='dr@g0n'

dropdb -U node_user fundifydb

psql -U node_user fundifydb < ./bin/sql/company.sql
psql -U node_user fundifydb < ./bin/sql/owner.sql
psql -U node_user fundifydb < ./bin/sql/investor.sql
psql -U node_user fundifydb < ./bin/sql/loan.sql
psql -U node_user fundifydb < ./bin/sql/donation.sql

echo "fundifydb configured"