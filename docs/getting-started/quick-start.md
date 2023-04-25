---
sidebar_position: 2
title: Quick Start
description: A quick start guide to PiePHP framework for developers.
---

# Installation

PiePHP is a PHP framework that can be installed using Composer. To install PiePHP, run the following command in your terminal:

```bash
git clone git@github.com:EpitechWebAcademiePromo2024/W-PHP-502-MLN-2-2-PiePHP-lucas.firmin.git
```

# Configuration

### Setting up a database

In order to use PiePHP, you'll need to set up a database connection. This is done in the config.json file.

To get started, open the Database.php file and look for the following lines:

```php
{
    "db_name": "piephp",
    "user": "root",
    "password": "password"
}
```

Replace the values for $db_name, $user and $password with the appropriate values for your database. If you're not sure what these values should be, check with your hosting provider or database administrator.

Once you've updated the database connection details, you'll need to create a table in your database. Each table name should be plural and the category names in the tables should be singular. For example, if you have a table for blog posts, the table name should be posts and the category name should be post.

Each table should have a unique ID field, which is typically named id. This field should be set as the primary key.

Each table should have a unique ID field, which is typically named id. This field should be set as the primary key.

If you don't have a table in your database yet, you can create one by running the following SQL command:

```sql
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

This will create a posts table with columns for id, title, content, and created_at. You can modify this SQL command to suit your specific needs.

Once you've set up your database connection and created your table, you're ready to start using PiePHP to build your web application.
