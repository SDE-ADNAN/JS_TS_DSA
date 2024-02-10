"use strict";
/**
 * Find the length of the longest substring without repeating characters in a given string.
 * @param s - The input string
 * @returns The length of the longest substring without repeating characters
 *
 * Time Complexity: O(n) because we traverse the string only once
 * Space Complexity: O(min(m, n)) where m is the size of the character set and n is the size of the string
 *                   In the worst case, we need to store all characters of the string in the map.
 */
function lengthOfLongestSubstring(s) {
    // Create a map to store the most recent index of each character
    const charIndices = new Map();
    let leftPointer = 0; // Start of the current substring
    let rightPointer = 0; // End of the current substring
    let longestSubstringLength = 0; // Length of the longest substring found
    // Iterate over each character in the string
    while (rightPointer < s.length) {
        const char = s[rightPointer];
        // Check if the character is already in the map
        if (charIndices.has(char)) {
            // If it is, move the left pointer to the next index after the duplicate character
            leftPointer = Math.max(leftPointer, charIndices.get(char) + 1);
        }
        // Update the map with the current character's index
        charIndices.set(char, rightPointer);
        // Calculate the length of the current substring
        const currentSubstringLength = rightPointer - leftPointer + 1;
        // Update the longest substring length if needed
        longestSubstringLength = Math.max(longestSubstringLength, currentSubstringLength);
        // Move the right pointer forward
        rightPointer++;
    }
    return longestSubstringLength;
}
// Example usage:
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output:  3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output:  1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output:  3
