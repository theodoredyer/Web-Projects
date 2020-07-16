### REpresentation State Transfer
- Refers to the fact that a server responds to creates, reads, updates, and deletes in a standard way

- Treat all server URLS as access points to server resources.

http://example.com/users 

/users is the resource

- GET http://example.com/users 
used to get a list of all users, when get doesnt have an ID it returns a list of all resources. 

- POST http://example.com/users 
used to create a new resource, acts on the entire resource. 

- GET http://example.com/users/1
Used to get a resource with a given ID, a single resource from a collection.

- PUT http://example.com/users/1
Used to update the user with the given ID, acts on a single resource updating some field

- DELETE http://example.com/users/1
Used to delete a single resource


