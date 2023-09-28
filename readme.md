```markdown
# Random Utility Class

The `random` utility class provides methods for generating random values in JavaScript. This class includes two static methods: `choice` and `randint`.

## Installation

You can include the `random` class in your JavaScript project by copying the code into a file and then importing it as needed.

```javascript
// Import the random class
const Random = require('./random.js');
```

## Usage

### `choice(list)`

The `choice` method takes an array (`list`) as input and returns a random element from that array.

Example:

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];

const randomFruit = Random.choice(fruits);
console.log(randomFruit); // Output will be a random fruit from the array.
```

### `randint(min, max)`

The `randint` method takes a minimum and maximum value as input and returns a random integer within the specified range, inclusive of both the minimum and maximum values.

Example:

```javascript
const randomNumber = Random.randint(1, 10);
console.log(randomNumber); // Output will be a random integer between 1 and 10.
```

## License

This `random` utility class is open-source and available under the [MIT License](LICENSE). You are free to use and modify it in your projects.

## Contributions

Contributions and improvements are welcome! If you have any suggestions or find any issues, please create a GitHub issue or submit a pull request.

## Author

This `random` utility class was created by ravenMF.

## Acknowledgments

Special thanks to the JavaScript community for their support and inspiration.
```
