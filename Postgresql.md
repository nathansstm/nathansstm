psql -U postgres -d app -c "SELECT * FROM posts;"

sudo apt-get update
sudo apt-get install postgresql
sudo systemctl status postgresql
sudo -i -u postgres
psql
CREATE DATABASE app;
\c app
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    date DATE
);
INSERT INTO posts (type, date) VALUES
('Type1', '2024-01-01'),
('Type2', '2024-01-02'),
('Type3', '2024-01-03'),
('Type4', '2024-01-04'),
('Type5', '2024-01-05'),
('Type6', '2024-01-06'),
('Type7', '2024-01-07'),
('Type8', '2024-01-08'),
('Type9', '2024-01-09'),
('Type10', '2024-01-10');
pg_dump app > app_backup.sql
CREATE DATABASE app;
psql app < app_backup.sql
sudo -i -u postgres
psql
\l
\list
\c your_database_name
\dt
CREATE USER new_user WITH PASSWORD 'new_password';
ALTER USER existing_user WITH PASSWORD 'new_password';
GRANT CONNECT ON DATABASE your_database_name TO new_user;
GRANT USAGE ON SCHEMA public TO new_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO new_user;
\q
exit

CREATE USER app WITH PASSWORD 'app';
ALTER USER app WITH PASSWORD 'app';
GRANT CONNECT ON DATABASE app TO app;
GRANT USAGE ON SCHEMA public TO app;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app;













