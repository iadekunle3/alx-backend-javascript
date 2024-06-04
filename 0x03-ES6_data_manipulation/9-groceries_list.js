/**
 * Retrieves a map of grocery names and their quantity.
 * @author Onifade Isaac Adekunle <https://github.com/iadekunle3>
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
  return groceries;
}
