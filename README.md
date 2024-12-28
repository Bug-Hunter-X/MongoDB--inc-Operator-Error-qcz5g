# MongoDB $inc Operator Error
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations.  The error occurs when attempting to increment a field with a string value instead of a number.  The solution provides the correct way to use the `$inc` operator.

## Bug Description:
The provided code snippet uses the `$inc` operator incorrectly, resulting in an error because it tries to increment a field with a string value instead of a number.  MongoDB's `$inc` operator expects a numeric value.