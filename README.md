# Cat Rehoming API
## Restful API with Express and MongoDB

### Background

We will use the data from the pre-course underscore exercise.
Using that data we are going to build a REST api for re-homing our cats.

The API will have the following routes:

**Get all the cats**
```
GET /api/cats
```

We should also support the following queries:
`upperage=`
`lowerage=`
`readyforhome=`
`personality=`
`personalitynot=`

eg: `/cats?personality=friendly`

**Get an individual cat by its id**
```
GET /api/cats/:cat_id
```

**Create a new cat**
```
POST /api/cats
```

**Update an individual cat**
```
PUT /api/cats/:cat_id
```

You should be able to do the following:
- Change a cats age
- Rename a cat
- Change the ready for home status of a cat
- Remove a certain personality trait from a cat
- Add personality traits to a cat

**Remove a individual cat**
```
DELETE /api/cats/:cat_id
```

### Tasks

1. Use Mongoose to create models and seed your database
2. Get an express server up and running 
3. Create the above endpoints using Express Router 
4. Connect the endpoints to controllers to handle the request
5. Validate your data in the controller not just with your Mongoose Schema
6. Send the correct responses to the client
7. Research the correct status codes especially for client side errors including:
    - A invalid query
    - A query which is valid but returns no results e.g `?personality=grumpy` when we have no grumpy cats
    - Requesting a non existent cat by its id
    - Invalid body for POST/PUT requests

### Extra Credit
Test your api endpoints using Super Test. Here is the [Documentation](https://github.com/visionmedia/supertest)
