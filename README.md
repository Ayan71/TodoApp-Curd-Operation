# TodoApp-Curd-Operation


Create an item:

When a POST request is made to the /items endpoint, the API creates a new item in the database.
The request body should contain the name and description of the item.
The API creates a new instance of the Item model using the provided data and saves it to the database.
If the item is successfully created, the API responds with a status code of 201 (Created) and returns the created item as a JSON response.
If there is an error during the creation process, the API responds with a status code of 500 (Internal Server Error) and returns an error message as a JSON response.
Retrieve all items:

When a GET request is made to the /items endpoint, the API retrieves all items from the database.
The API uses the find() method of the Item model to query the database and fetch all items.
If the retrieval is successful, the API responds with a JSON array containing all the items.
If there is an error during the retrieval process, the API responds with a status code of 500 (Internal Server Error) and returns an error message as a JSON response.
Retrieve a single item:

When a GET request is made to the /items/:id endpoint, the API retrieves a specific item from the database based on the provided id.
The API uses the findById() method of the Item model to query the database and find the item with the specified id.
If the item is found, the API responds with a JSON object containing the item.
If the item is not found, the API responds with a status code of 404 (Not Found) and returns an error message as a JSON response.
If there is an error during the retrieval process, the API responds with a status code of 500 (Internal Server Error) and returns an error message as a JSON response.
Update an item:

When a PUT request is made to the /items/:id endpoint, the API updates a specific item in the database based on the provided id.
The request body should contain the updated name and description of the item.
The API uses the findByIdAndUpdate() method of the Item model to find the item with the specified id and update its properties.
If the update is successful, the API responds with a JSON object containing the updated item.
If the item is not found, the API responds with a status code of 404 (Not Found) and returns an error message as a JSON response.
If there is an error during the update process, the API responds with a status code of 500 (Internal Server Error) and returns an error message as a JSON response.
