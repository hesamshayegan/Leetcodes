// 1768. Merge Strings Alternately


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let maxLen = Math.max(word1.length, word2.length);
    let merged = "";

    for (let i=0; i<maxLen; i++) {

        if (i < word1.length) merged += word1[i];
        if (i < word2.length) merged += word2[i];
    }

    return merged
};