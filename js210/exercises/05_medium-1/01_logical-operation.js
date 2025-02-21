


// what runs and why?


(false && undefined);
(false || undefined);
((false && undefined) || (false || undefined));
((false || undefined) || (false && undefined));
((false && undefined) && (false || undefined));
((false || undefined) && (false && undefined));
('a' || (false && undefined) || '');
((false && undefined) || 'a' || '');
('a' && (false || undefined) && '');
((false || undefined) && 'a' && '');




// my guesses
// got all of em right!
(false && undefined);    // false
(false || undefined);    // undefined
((false && undefined) || (false || undefined));  // false || undefined -> undefined
((false || undefined) || (false && undefined));  // undefined || false -> false
((false && undefined) && (false || undefined));  // false && undefined -> false
((false || undefined) && (false && undefined));  // undefined && false -> undefined
('a' || (false && undefined) || '');  // 'a' || false || '' -> 'a' || '' -> 'a'
((false && undefined) || 'a' || '');  // undefined || 'a' || '' -> 'a' || '' -> 'a'
('a' && (false || undefined) && '');  // 'a' && undefined && '' -> undefined && '' -> undefined
((false || undefined) && 'a' && '');  // undefined && 'a' && '' -> undefined && '' -> undefined