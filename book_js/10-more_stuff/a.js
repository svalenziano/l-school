function reversify(str) {
	str = str?.split(' ')
	  .reverse()
	  .join(', ');
	console.log(str);
}

reversify('Hanna Boops');  // Boops, Hanna
reversify(null);           // undefined
reversify(undefined);      // undefined