/**
 You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
 If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.

 @param {string} word1
 @param {string} word2
 @return {string}
*/

function mergeAlternately(word1, word2) {
    let result = '';
    const wordLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < wordLength; i++) {
        if (word1[i]) {
            result += word1[i];
        }
        if (word2[i]) {
            result += word2[i];
        }
    }
    return result;
};

console.log(mergeAlternately('abc', 'pqr') === 'apbqcr');
console.log(mergeAlternately('ab', 'pqrs') === 'apbqrs');
console.log(mergeAlternately('abcd', 'pq') === 'apbqcd');