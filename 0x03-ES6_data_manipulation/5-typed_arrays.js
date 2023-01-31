export default function createInt8TypedArray(length, position, value) {
  const arrBuf = new ArrayBuffer(length);
  const obj = new DataView(arrBuf);

  try {
    obj.setInt8(position, value);
  } catch (error) {
    throw Error('Position outside range');
  }
  return obj;
}
// returns a new ArrayBuffer with an Int8 value at a specific position
// accept three args: length, position, value
