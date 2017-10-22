BEGIN TRANSACTION;
CREATE TABLE "Type" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`name`	TEXT,
	`display`	TEXT
);
INSERT INTO `Type` VALUES (1,'core','Core');
INSERT INTO `Type` VALUES (2,'expansion','Expansion');
INSERT INTO `Type` VALUES (3,'reprint','Reprint');
INSERT INTO `Type` VALUES (4,'box','Box');
INSERT INTO `Type` VALUES (5,'un','Un');
INSERT INTO `Type` VALUES (6,'from the vault','From the Vault');
INSERT INTO `Type` VALUES (7,'premium deck','Premium Deck');
INSERT INTO `Type` VALUES (8,'duel deck','Duel Deck');
INSERT INTO `Type` VALUES (9,'starter','Starter');
INSERT INTO `Type` VALUES (10,'commander','Commander');
INSERT INTO `Type` VALUES (11,'planechase','Planechase');
INSERT INTO `Type` VALUES (12,'archenemy','Archenemy');
INSERT INTO `Type` VALUES (13,'promo','Promo');
INSERT INTO `Type` VALUES (14,'vanguard','Masters');
INSERT INTO `Type` VALUES (15,'masters','Masters');
INSERT INTO `Type` VALUES (16,'conspiracy','Conspiracy');
INSERT INTO `Type` VALUES (17,'masterpiece','Masterpiece');
COMMIT;
