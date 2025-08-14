// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


let s = "LVIII";
function romanToInt(s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];
        
        if (next > current) {
            total += (next - current);
            i++; // skip next since we processed it
        } else {
            total += current;
        }
    }

    return total;
}

// Test
console.log(romanToInt("III"));    // 3
console.log(romanToInt("LVIII"));  // 58
console.log(romanToInt("MCMXCIV")) // 1994
