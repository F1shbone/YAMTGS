BEGIN TRANSACTION;
CREATE TABLE "SetType" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`name`	TEXT,
	`display`	TEXT
);
INSERT INTO `SetType` VALUES (1,'core','Core');
INSERT INTO `SetType` VALUES (2,'expansion','Expansion');
INSERT INTO `SetType` VALUES (3,'reprint','Reprint');
INSERT INTO `SetType` VALUES (4,'box','Box');
INSERT INTO `SetType` VALUES (5,'un','Un');
INSERT INTO `SetType` VALUES (6,'from the vault','From the Vault');
INSERT INTO `SetType` VALUES (7,'premium deck','Premium Deck');
INSERT INTO `SetType` VALUES (8,'duel deck','Duel Deck');
INSERT INTO `SetType` VALUES (9,'starter','Starter');
INSERT INTO `SetType` VALUES (10,'commander','Commander');
INSERT INTO `SetType` VALUES (11,'planechase','Planechase');
INSERT INTO `SetType` VALUES (12,'archenemy','Archenemy');
INSERT INTO `SetType` VALUES (13,'promo','Promo');
INSERT INTO `SetType` VALUES (14,'vanguard','Masters');
INSERT INTO `SetType` VALUES (15,'masters','Masters');
INSERT INTO `SetType` VALUES (16,'conspiracy','Conspiracy');
INSERT INTO `SetType` VALUES (17,'masterpiece','Masterpiece');
COMMIT;
