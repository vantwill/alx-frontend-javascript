export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](convType) {
    if (convType === 'number') {
      return this._size;
    }
    return this._location;
  }
}
// convType is conversion type
