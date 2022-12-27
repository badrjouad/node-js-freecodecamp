# **		NodeJS		**



#### Notes : Plural sight :

- ***Why node JS?*** : it uses asynchronous APIs

- ***Callbacks*** : functions that are called late at the end of the program ( example : 

  star bucks : u give your name and what u want and when it's ready they call you to take what u want)

  ```javascript
  function Samer(readyLatte)
  {
      //DRINK readyLatte
  }
  
  starbucks.makeMeLatte(Samer);
  ```

  

- ***Promises***: little bit different that callback : imagine that u asked someone that give u something but give u something else  : they promise u that mystery might eventually turn that a thing that u originally asked for 

- example : 

  ```js
  const egg = chicken.makeChick(); // it's a promise
  
  egg
  .then(chick=>raiseChick()) // Success outcome
  .catch(badEgg=> throw badEgg) // fail outcome
  ```

  



