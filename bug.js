```javascript
// Incorrect use of $inc operator in MongoDB update operation.
db.collection.updateOne({"_id": 1}, {"$inc": {"field": "value"}});
```