import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // _(items); returns a lodash object _.value() returns a regular array
  return _(items).slice(startIndex).take(pageSize).value();
}
