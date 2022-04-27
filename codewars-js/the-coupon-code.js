/**
 * 2022.04.21
 * 
 * 7 kyu https://www.codewars.com/kata/the-coupon-code 
 * 
 Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
 *  */

// Моєї рішення
function checkCoupon_1(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode == correctCode &&  Date(currentDate) <= Date(expirationDate);
    // if (enteredCode != correctCode) return false;
    // current = Date(currentDate);
    // expiration = Date(expirationDate);
    // // onsole.log(current);
    // return current <= expiration ;
}
checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    let current = new Date(currentDate);
    let expiration = new Date(expirationDate);

    // return enteredCode === correctCode &&  current.getTime() <= expiration.getTime();
    return enteredCode === correctCode &&  new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}
checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => 
    enteredCode === correctCode &&  new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
// Правильні варіанти:


// Тести
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);


