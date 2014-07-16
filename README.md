# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

"Higher order functions are functions that operate over other fucntions. Whether it's to take other functions as arguments or returning them.  HOF allows us to abstract over actions, therefore, we don't have to create new functions over and over again.  We can implement functions within functions, create functions using functions, and replace functions with functions."


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max`
	max will be a HOF that selects the highest value in an array.

* `min`
	min will be a HOF that selects the lowest value in an array.
* `each`
	each will be a HOF that applies a certain function to each of the elements of the variable. 
* `map`

* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
	filter will be a HOF that only selects a certain element will it's met a certain condition.

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
	reduce will be a HOF that reduces the values or elements.

* `reject`: [note](http://underscorejs.org/#reject)
	reject will be a HOF that rejects a certain condition of the elements.
Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




