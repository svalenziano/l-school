function foo(bar) {
  console.log(bar());
}

function return123() {
  return [1,2,3]
}


foo(function(){return 'Welcome'});    // Should print 'Welcome'
foo(_ => '3.1415');    // Should print 3.1415
foo(return123);    // Should print [1, 2, 3]