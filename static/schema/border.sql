BEGIN TRANSACTION;
CREATE TABLE "Border" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`name`	TEXT,
	`display`	TEXT
);
INSERT INTO `Border` VALUES (1,'white','White');
INSERT INTO `Border` VALUES (2,'black','Black');
INSERT INTO `Border` VALUES (3,'silver','Silver');
COMMIT;
