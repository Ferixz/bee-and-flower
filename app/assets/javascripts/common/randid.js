function randid(l)
{
    var text = "";
    var possible = "abcdefghjklmnopqrstuvwxyz";

    for( var i=0; i < l; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};


function checkrep(original) {
	//console.log('--------:'+ original)
	var repeated = false;
	var compressed = [];
	var copy = original.slice(0);
	for (var i = 0; i < original.length; i++) {
		var myCount = 0;
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}
			//console.log(myCount);
		if (myCount > 1) {
		//	var a = new Object();
		//	a.value = original[i];
		//	a.count = myCount;
		//	compressed.push(a);
			repeated = repeated || true;
		}

		//console.log(repeated);
	}

	if(repeated){return true}else{return false};
};
