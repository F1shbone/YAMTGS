BEGIN TRANSACTION;
CREATE TABLE "Sets" (
	`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`name` TEXT NOT NULL,
	`code` TEXT NOT NULL,
	`releaseDate` TEXT NOT NULL,
	`gathererCode` TEXT,
	`magicCardsInfoCode` TEXT,
	`border_id` INTEGER NOT NULL,
	`type_id` INTEGER NOT NULL,
	`block` TEXT,
	`onlineOnly` INTEGER,

	FOREIGN KEY(border_id) REFERENCES Border(id),
	FOREIGN KEY(type_id) REFERENCES SetType(id)
);
COMMIT;
