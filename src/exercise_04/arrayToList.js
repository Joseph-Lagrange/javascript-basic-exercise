export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
    if (array == undefined) {
        throw new Error('Creating list from undefined array');
    } else if (!array.length) {
        throw new Error('Creating list from empty array');
    }
    let header = {value:array[0], next:null};
    let obj = header;
    for (let i = 1; i < array.length; i++) {
      obj.next = {value:array[i], next:null};
      obj = obj.next;
    }
    return header;
}
