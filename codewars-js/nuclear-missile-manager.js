/**
 * 2022.04.20
 * 
 * ky6 kyu https://www.codewars.com/kata/nuclear-missile-manageru 
 * 
 Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the launchAll function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...

Can you fix this for us? You know, it's pretty critical code...

Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.


 *  */

// Моєї рішення
function launchMissileGo(n) {
    console.log(n);
}

function launchAll(launchMissile) {
    j = 0;
    for(var i = 0; i < 5; i++) {
      setTimeout(function() {
        launchMissile(j++);
      }, i * 1000);
    }
}

launchAll(launchMissileGo);

// Правильні варіанти:
function launchAll_1(launchMissile) {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => launchMissile(i), i * 1000);
    }
}


function launchAll_2(launchMissile) {
    for(let i = 0; i < 5; i++) {
      setTimeout(function() {
        launchMissile(i);
      }, i * 1000);
    }
  }


  function launchAll_3(launchMissile) {
    for (var i = 0; i < 5; i++) {
      setTimeout(launchMissile.bind(null, i), i * 1000);
    }
  }

// Тести



