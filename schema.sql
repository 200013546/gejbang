
DROP TABLE IF EXISTS links;

-- Create the table tasks.
CREATE TABLE `links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sso` varchar(9) COLLATE utf8_unicode_ci DEFAULT NULL,
  `view` int(1) DEFAULT NULL,
  `metadata` text COLLATE utf8_unicode_ci,
  `info` text COLLATE utf8_unicode_ci,
  `typeid` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `popularity` int(11) DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_links_url` (`url`)
) ENGINE=InnoDB AUTO_INCREMENT=380 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
