---
sidebar_position: 2
title: ORM
description: Object Relational Mapping
---

# ORM: Object-Relational Mapping

Object-Relational Mapping (ORM) is a technique that allows developers to use objects and classes to interact with a database. Instead of writing SQL queries manually, the ORM provides a way to perform CRUD (Create, Read, Update, Delete) operations using objects.

The PHP code provided by the user is a simple ORM framework that allows developers to interact with a database using objects. The framework uses the PDO (PHP Data Objects) extension to interact with the database.

The ORM framework provides the following methods:

- create: inserts a new record into the database table.
- read: retrieves a record from the database table based on the primary key.
- update: updates a record in the database table based on the primary key.
- delete: deletes a record from the database table based on the primary key.
- find: retrieves records from the database table based on the specified criteria.

The framework also supports the concept of relations between database tables. Developers can define relationships between tables, such as one-to-one, one-to-many, or many-to-many, and the ORM will handle the joins and relationships automatically.

The create method is used to insert a new record into the database table. The method takes two arguments: the name of the table and an array of field values. The method automatically generates an SQL insert statement based on the field values provided.

The read method retrieves a record from the database table based on the primary key. The method takes two arguments: the name of the table and the primary key value. The method automatically generates an SQL select statement to retrieve the record from the database.

The update method updates a record in the database table based on the primary key. The method takes three arguments: the name of the table, the primary key value, and an array of field values to update. The method automatically generates an SQL update statement based on the field values provided.

The delete method deletes a record from the database table based on the primary key. The method takes two arguments: the name of the table and the primary key value. The method automatically generates an SQL delete statement to delete the record from the database.

The find method retrieves records from the database table based on the specified criteria. The method takes two arguments: the name of the table and an array of parameters. The method automatically generates an SQL select statement based on the parameters provided.

The ORM framework also supports the concept of relationships between database tables. Developers can define relationships between tables, such as one-to-one, one-to-many, or many-to-many, and the ORM will handle the joins and relationships automatically. The framework provides a static property called $relations, which is an array of relationships between tables.

Overall, the ORM framework provided by the user is a simple and effective way for PHP developers to interact with a database using objects. It provides a useful set of CRUD methods and supports the concept of relationships between tables. Developers can use this framework to build web applications quickly and efficiently.
