/**
 @param {number[]} candies
 @param {number} extraCandies
 @return {boolean[]}
*/

function kidsWithCandies(candies, extraCandies) {
    const results = [];
    const maxCandies = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        results.push(candies[i] + extraCandies >= maxCandies)
    }

    return results;
};

console.log(JSON.stringify(kidsWithCandies([2, 3, 5, 1, 3], 3)) === JSON.stringify([true, true, true, false, true]));
console.log(JSON.stringify(kidsWithCandies([4, 2, 1, 1, 2], 1)) === JSON.stringify([true, false, false, false, false]));
console.log(JSON.stringify(kidsWithCandies([12, 1, 12], 10)) === JSON.stringify([true, false, true]));
