/**
 * 2022.04.16
 * 
 * 6 kyu https://www.codewars.com/kata/handshake-problems
 * 
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
 * 
 * */

// Моє рішення
getParticipants = handshakes => Math.ceil( 0.5 + Math.sqrt(0.25 + 2 * handshakes) );

function getParticipants1(handshakes) {
    let d = 0.25 + 2 * handshakes;
    let x = Math.ceil( 0.5 + Math.sqrt(d) );
    console.log('handshakes:', handshakes, ' d: ', d, ' x: ', x);
}

  
// Правильне рішення
function getParticipants_1(h){
    return Math.ceil((1+Math.sqrt(1+8*h))/2)}

function getParticipants_2(h){
    for(var i=0,k=1;i<h;i+=k++){}
    return k;
}

function getParticipants_3(handshakes){
    var sum=0, i=1;
    while (sum<handshakes)
      sum+=i++;
    return i;
}

// Тести
getParticipants(0); //, 1)
getParticipants(1); //, 2)
getParticipants(3); //, 3)
getParticipants(6); //, 4)
getParticipants(7); //, 5)

getParticipants(8); //, 5)
getParticipants(10); //, 5)
getParticipants(11); //, 6)

