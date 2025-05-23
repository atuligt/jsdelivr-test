# UtilHelpers.js

A lightweight JavaScript utility library with useful helper functions.

## Features

- **Format Numbers** - Add thousand separators to numbers
- **Random Integers** - Generate random integers within a range
- **Debounce** - Prevent functions from being called too frequently
- **Slugify** - Convert strings to URL-friendly slugs
- **Array Shuffling** - Randomly reorder array elements
- **Date Formatting** - Get current date in consistent format

## Installation

### Using npm

```bash
npm install util-helpers
```

### Using CDN (jsDelivr)

```html
<!-- For a specific version -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/util-helpers@1.0.0/util-helpers.js"></script>

<!-- For the latest version (not recommended for production) -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/util-helpers/util-helpers.js"></script>
```

## Usage

### Browser

```html
<script src="https://cdn.jsdelivr.net/gh/yourusername/util-helpers@1.0.0/util-helpers.js"></script>
<script>
  // Format a number with thousand separators
  const formattedNumber = UtilHelpers.formatNumber(1234567);
  console.log(formattedNumber); // "1,234,567"
  
  // Generate a random integer
  const randomNumber = UtilHelpers.randomInt(1, 100);
  console.log(randomNumber); // Random number between 1 and 100
</script>
```

### Node.js

```javascript
const UtilHelpers = require('util-helpers');

// Format a number with thousand separators
const formattedNumber = UtilHelpers.formatNumber(1234567);
console.log(formattedNumber); // "1,234,567"

// Generate a random integer
const randomNumber = UtilHelpers.randomInt(1, 100);
console.log(randomNumber); // Random number between 1 and 100
```

## API Reference

### `UtilHelpers.formatNumber(num)`

Formats a number with commas as thousands separators.

```javascript
UtilHelpers.formatNumber(1234567); // Returns "1,234,567"
```

### `UtilHelpers.randomInt(min, max)`

Returns a random integer between min and max (inclusive).

```javascript
UtilHelpers.randomInt(1, 10); // Returns a number between 1 and 10
```

### `UtilHelpers.debounce(func, wait)`

Returns a debounced version of the provided function.

```javascript
const debouncedFunction = UtilHelpers.debounce(function() {
  console.log('This will only run once after 500ms of inactivity');
}, 500);

// Call the function multiple times rapidly
debouncedFunction();
debouncedFunction();
debouncedFunction(); // Only this call will actually execute (after 500ms)
```

### `UtilHelpers.slugify(str)`

Converts a string to a URL-friendly slug.

```javascript
UtilHelpers.slugify('Hello World! This is a test.'); // Returns "hello-world-this-is-a-test"
```

### `UtilHelpers.shuffleArray(array)`

Returns a shuffled copy of the provided array.

```javascript
UtilHelpers.shuffleArray([1, 2, 3, 4, 5]); // Returns array with elements in random order
```

### `UtilHelpers.getCurrentDate()`

Returns the current date in YYYY-MM-DD format.

```javascript
UtilHelpers.getCurrentDate(); // Returns something like "2025-05-07"
```

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

Your Name