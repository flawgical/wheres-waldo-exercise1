# Where's Waldo?

Waldo has gone off on another adventure traveling through time and space. This time he's taken to exploring the DOM. Let's write a script to see if we can find him!

## Running the project

1. Fork and clone.
1. In your terminal change directories to the cloned repo.
1. Run `http-server`.
  - If the command is not found you can install it, `npm install -g http-server`
1. Open your browser window to `localhost:8080`.

## Instructions

For the following project you cannot use jQuery, `getElement*` or `querySelector*` methods.

Instead, you must rely on:

- `childNodes`
- `firstChild`
- `lastChild`
- `parentNode`
- `nextSibling`
- `previousSibling`


Update the function `findWaldo` in [app.js](/app.js) to:

- Search the document for an element that contains the text, 'Waldo'
- Once the element is found, add a style to make it visible.
- Finally, return the ID of the element.

Once you have completed the task, submit a pull request.

## Example

There is a simplified example of how to search a tree in [example.js](/example.js).

**Disclaimer:**

- There are many other solutions, many of which are more effective.
- This solution only exists to get you thinking about how to traverse from one node to another.

**Considerations:**

The nodes in this example are simplified. They do not have `sibling` and `parent` properties.

In addition, the example relies primarily on iterations instead of recursion.
