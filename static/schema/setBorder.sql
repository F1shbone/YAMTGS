BEGIN TRANSACTION;
CREATE TABLE "SetBorder" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`name`	TEXT,
	`display`	TEXT
);
INSERT INTO `SetBorder` VALUES (1,'white','White');
INSERT INTO `SetBorder` VALUES (2,'black','Black');
INSERT INTO `SetBorder` VALUES (3,'silver','Silver');
COMMIT;
