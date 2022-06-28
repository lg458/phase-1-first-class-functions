function receivesAFunction(cb) { 
  cb();
} 

function returnsANamedFunction() { 
  return function greeting() { 
    console.log("hi");
  }
} 

function returnsAnAnonymousFunction() { 
  return () => console.log("hi");
}