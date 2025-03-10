function trimChars(str, charList) {
  // The following replacement allows for you to include chars in the charlist that must be escaped
  // Create a character class from charList and escape any regex special characters.
  // '\\$&' -> `\\` = backslash character, '$&' = represents the full match
  const escaped = charList.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  // Build regex for matching characters from the list at the beginning or end of the string.
  const regex = new RegExp(`^[${escaped}]+|[${escaped}]+$`, 'gi');
  return str.replace(regex, '');
}

// Example usage:
let s = "xyxHello, world!xyx";
console.log(trimChars(s, "xy")); // "Hello, world!"


