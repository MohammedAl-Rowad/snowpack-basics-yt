import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'

const { map } = _
export const mapData = () =>
  console.log(
    map({ name: 'rowad', age: 90 }, (key, value) => ({ [value]: key }))
  )
