CREATE TABLE `genre` (
  `id` char(36) PRIMARY KEY NOT NULL,
  `title` varchar(45) NOT NULL,
  `image_path` varchar(255) DEFAULT null,
  `created_at` timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `users` (
  `id` char(36) PRIMARY KEY NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT null,
  `verified` tinyint(1) DEFAULT '0',
  `is_admin` tinyint(1) DEFAULT '0',
  `email_verified_at` timestamp DEFAULT null,
  `gender` varchar(45) DEFAULT null,
  `brithday` datetime DEFAULT null
);

CREATE TABLE `songs` (
  `id` char(36) PRIMARY KEY NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` char(36) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `song_path` varchar(255) NOT NULL,
  `genre_id` char(36) DEFAULT null,
  `public` tinyint(1) DEFAULT '1',
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` timestamp DEFAULT (now()),
  `update_at` timestamp DEFAULT null
);

CREATE TABLE `playlists` (
  `id` char(36) PRIMARY KEY NOT NULL,
  `title` varchar(255) NOT NULL,
  `desc` varchar(500),
  `image_path` varchar(255) DEFAULT null,
  `genre_id` char(36) DEFAULT null,
  `user_id` char(36) DEFAULT null,
  `public` tinyint(1) DEFAULT '1',
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` timestamp DEFAULT (now())
);

CREATE TABLE `favourite_playlists` (
  `user_id` char(36) NOT NULL,
  `playlist_id` char(36) NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  PRIMARY KEY (`user_id`, `playlist_id`)
);

CREATE TABLE `favourite_songs` (
  `user_id` char(36) NOT NULL,
  `song_id` char(36) NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  PRIMARY KEY (`user_id`, `song_id`)
);

CREATE TABLE `follows` (
  `follower_user_id` char(36) NOT NULL,
  `followed_user_id` char(36) NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  PRIMARY KEY (`follower_user_id`, `followed_user_id`)
);

CREATE TABLE `playlist_songs` (
  `playlist_id` char(36) NOT NULL,
  `song_id` char(36) NOT NULL,
  `num_song` int,
  `created_at` datetime DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`playlist_id`, `song_id`)
);

CREATE TABLE `song_plays` (
  `user_id` char(36) NOT NULL,
  `song_id` char(36) NOT NULL,
  `created_at` timestamp DEFAULT (CURRENT_TIMESTAMP),
  PRIMARY KEY (`user_id`, `song_id`)
);

CREATE TABLE `user_songs` (
  `user_id` char(36) NOT NULL,
  `song_id` char(36) NOT NULL,
  `confirm` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`user_id`, `song_id`)
);

CREATE TABLE `verification_codes` (
  `user_id` char(36) PRIMARY KEY NOT NULL,
  `code` varchar(4) NOT NULL,
  `created_at` timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE INDEX `songs_ibfk_1` ON `songs` (`user_id`);

CREATE INDEX `song_ibfk_2_idx` ON `songs` (`genre_id`);

CREATE INDEX `user_id` ON `playlists` (`user_id`);

CREATE INDEX `playlist_ubfk_2_idx` ON `playlists` (`genre_id`);

CREATE INDEX `favourite_playlists_ibfk_2` ON `favourite_playlists` (`playlist_id`);

CREATE INDEX `favourite_songs_ibfk_2` ON `favourite_songs` (`song_id`);

CREATE INDEX `followed_user_id` ON `follows` (`followed_user_id`);

CREATE INDEX `playlist_songs_ibfk_1` ON `playlist_songs` (`song_id`);

CREATE INDEX `song_plays_fk2_idx` ON `song_plays` (`song_id`);

CREATE INDEX `user_songs_ibfk_1` ON `user_songs` (`song_id`);

ALTER TABLE `favourite_playlists` ADD CONSTRAINT `favourite_playlists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `favourite_playlists` ADD CONSTRAINT `favourite_playlists_ibfk_2` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `favourite_songs` ADD CONSTRAINT `favourite_songs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `favourite_songs` ADD CONSTRAINT `favourite_songs_ibfk_2` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `follows` ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`follower_user_id`) REFERENCES `users` (`id`);

ALTER TABLE `follows` ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`followed_user_id`) REFERENCES `users` (`id`);

ALTER TABLE `playlist_songs` ADD CONSTRAINT `playlist_songs_ibfk_1` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `playlist_songs` ADD CONSTRAINT `playlist_songs_ibfk_2` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `playlists` ADD CONSTRAINT `playlist_ubfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

ALTER TABLE `playlists` ADD CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `song_plays` ADD CONSTRAINT `song_plays_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `song_plays` ADD CONSTRAINT `song_plays_fk2` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `songs` ADD CONSTRAINT `song_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

ALTER TABLE `songs` ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `user_songs` ADD CONSTRAINT `user_songs_ibfk_1` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`);

ALTER TABLE `verification_codes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
