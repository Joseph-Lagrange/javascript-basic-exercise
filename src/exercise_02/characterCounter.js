export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  if (string == undefined || !string) {
      return 0;
  }
  if (prediction == undefined) {
    return string.length;
  }
  for (let i = 0; i < string.length; i++) {
    if (prediction(string.charAt(i))) {
      const regex = new RegExp(string.charAt(i), 'g');
      const result = string.match(regex);
      return !result ? 0 : result.length;
    }
  }
}
