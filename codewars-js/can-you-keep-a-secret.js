/**
 * 2022.04.21
 * 
 * 6 kyu https://www.codewars.com/kata/can-you-keep-a-secret 
 * 
 There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
 *  */

// Моєї рішення
function createSecretHolder(secret) { 
    let secretExternal = secret; 
    return { 
      setSecret: function(value) { secretExternal = value; }, 
      getSecret: function() { return secretExternal; } 
    }; 
  }



// Правильні варіанти:
function createSecretHolder__1(secret) {
    return {
      getSecret: function() { return secret; },
      setSecret: function(v) { secret = v; }
    };
  }

  function createSecretHolder__2(secret) {
    var _secret = secret;
    return {
      setSecret: function(s) {
        _secret = s;
      },
      getSecret: function() {
        return _secret;
      }
    };
  }


  function createSecretHolder__3(secret) {
    return {
      getSecret: () => secret,
      setSecret: (s) => secret = s
    };
  }

/// ------
  class obj {
    constructor(secret) {
      this.sec = secret;
    }
    
    getSecret(){
      return this.sec;
    }
    
    setSecret(val){
      this.sec = val;
    }
  }
  
  function createSecretHolder_4(secret) {
    var y = new obj(secret);
    return y;
  }
  /// ------

  const createSecretHolder__5 = secret =>
  ({getSecret: () => secret,
    setSecret: val => secret = val});

// Тести



