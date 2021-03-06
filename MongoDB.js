/*
* What is MongoDB?
MongoDb is a document database with the scalability and flexibility that you want with the querying and indexing that you need.

* Features 
-- Document Based - MongoDb stores data in documents (field-value pair data structures,NoSQL)
-- Scalable - Very easy to distribute data across multiple machines as your users and amount of data grows;
-- Flexible - No document data schema requires,so each document can have different number and types of field.
-- Performant - Embedded data models,indexing,sharing,flexible documents,native duplication etc.
-- Free and Open source published under the SSPL License.

# MongoDb Uses a data format similar to JSON for data storage called BSON.BSON are typed meaning all values will have a datatype 
  such as string,Boolean,date,integer,double and more.

# Embedding/Denormalising :- Including related data into a single document.This allows for quicker access and easier data models.
                            It is not always the best solution though.

# Commands

-- use Name - switches to the Name database or creates it if it doesnot exist.
-- insertOne() - Inserts a field in the database.
-- show dbs - shows all databases.
-- quit() - Exits the command line
-- insertMany() --Inserts Many fields in a database.
                            
MongoDb Driver -- It is basically a software that allows node code to access and interact with a MongoDB database.
                  The most popular MongoDb driver is Mongoose.

Mongoose -- Mongoose is an Object Data Modelling (ODM) library for MongoDB and Node.js. It provides a higher level of Abstraction.
            Mongoose allows for rapid and simple development of MongoDB database Interactions.
            Some of its features Includes , schemas to model data and relationships,eady data validation,simple query API ,middleWare etc.

Mongoose Schema -- Where we model our Data by describing the structure of the data,default values and validation.

Mongoose Model --  A wrapper for the schema providing an interface to the database for CRUD opreations.
  
*/
