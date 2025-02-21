// What logs and why?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();





// my solution
/* 
This is an example of closure.

When `logger` is defined, `status` isn't definied within it's scope.  
JS will create a closure that includes the variable from the outer scope
That variable will be used when the function is called.
 */


// REAL ANSWER
/* 
NO! NOT CLOSURE! 
 
There is no 'cell object' or JS equivalent returned by debugIt.  This is simply an example of lexical scoping rules.  When logger is invoked, the `status` variable isn't in the function scopes.  JS searches the next enclosing scope for a variable with that name.
*/