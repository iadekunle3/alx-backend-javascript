/**
 * Changes the quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 * @author Onifade Isaac Adekunle <https://github.com/iadekunle3>
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((quantity, key) => {
    if (quantity === 1) {
      map.set(key, 100);
    }
  });
}
