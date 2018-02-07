CREATE USER 'musicamazeuser'@'localhost' IDENTIFIED BY 'musicamazepassword';

GRANT ALL PRIVILEGES ON cs595_musicamaze.* TO 'musicamazeuser'@'localhost' WITH GRANT OPTION;

SHOW GRANTS FOR 'musicamazeuser'@'localhost';