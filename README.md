# Unexpected Type Coercion in JavaScript
This example demonstrates a common issue in JavaScript: unexpected type coercion with the + operator.  When adding a number and a string in JavaScript, the number is automatically converted to a string and concatenation occurs instead of numerical addition.

## The Bug
The `foo` function intends to add two numbers. However, if either input is a string, it results in string concatenation.

## Solution
The solution is to explicitly type check inputs and use `parseInt()` or `parseFloat()` to convert strings to numbers before performing arithmetic operations to ensure that the '+' operator performs addition and not concatenation.  Alternatively, the use of the `-`, `*`, or `/` operators will result in type conversion to numbers implicitly.   