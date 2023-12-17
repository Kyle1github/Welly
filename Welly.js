/*Welly 面試題目 
請回覆下列3個問題，並將程式碼上傳到 github 後分享鏈接給我們。*/

//1.JavaScript:字串反轉
function reverseString(str) {
    const reversedArray = str.split('').reverse();
    return reversedArray.join('')
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”

/*2.JavaScript: 陣列過濾
問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 */
function filterNumbersGreaterThanFive(numbers) {
    return filteredNumbers = numbers.filter(number => number > 5);
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

/*3. JavaScript: 重構
問題：重構這段程式碼並說明原因*/
function formatName(firstName, lastName) {
    let formattedName = '';

    if (firstName) {
        formattedName += firstName;
    }

    if (lastName) {
        formattedName += ' ' + lastName;
    }

    return formattedName;
}

//答案：
function formatName(firstName, lastName) {
    return (firstName ? firstName : '') + (lastName ? ' ' : '') + (lastName ? lastName : '');
}
//使用條件運算符重構，增加可讀性