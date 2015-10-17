function varDump(obj)
{
	if(!(typeof yourVariable === 'object'))
		return obj;
	var out = '';
	for (var i in obj) {
		out += i + ": " + varDump(obj[i]) + "\n";
	}
	return out;
}

function rasaColor(_englishName, _persianName, _colorCode)
{
	this.englishName=_englishName;
	this.persianName=_persianName;
	this.colorCode=_colorCode;
}

var rasaWhite	 	= new rasaColor('white',		'سفید',		'#FFFFFF');
var rasaBlack	 	= new rasaColor('black',		'سیاه',		'#000000');
var rasaYellow	 	= new rasaColor('yellow',		'زرد',		'#FFFF00');
var rasaPurple	 	= new rasaColor('purple',		'یاسی',		'#DFCAEB');
var rasaOrange	 	= new rasaColor('orange',		'نارنجی',	'#ED6A2F');
var rasaLight_blue	= new rasaColor('light_blue',		'آسمانی',	'#87CEEB');
var rasaRed	 	= new rasaColor('red',			'قرمز',		'#FF0000');
var rasaBuff	 	= new rasaColor('buff',			'خردلی',	'#D9B278');
var rasaGrey	 	= new rasaColor('grey',			'طوسی',		'#848482');
var rasaGreen	 	= new rasaColor('green',		'سبز',		'#357634');
var rasaPurplish_pink	= new rasaColor('purplish_pink',	'سرخابی',	'#B747B0');
var rasaBlue		= new rasaColor('blue',			'آبی',		'#0000FF');
var rasaYellowish_pink	= new rasaColor('yellowish_pink',	'صورتی',	'#F18C97');
var rasaViolet		= new rasaColor('violet',		'بنفش',		'#4D4079');

var rasaColorList=[	rasaWhite,		rasaBlack,		rasaYellow,
    			rasaPurple,		rasaOrange,		rasaLight_blue,
			rasaRed,		rasaBuff,		rasaGrey,
			rasaGreen,		rasaPurplish_pink,	rasaBlue,
			rasaYellowish_pink,	rasaViolet];
var rasaNodeMenu=[];
var rasaFlower=null;
var rasaStart=null;

for(var index=0; index<rasaColorList.length; index++)
	rasaNodeMenu.push({	title: '# '+rasaColorList[index].persianName,
			menuItemRasaColor: rasaColorList[index],
			action: function(elm, d, i) {d.costumeRasaColor=this.menuItemRasaColor;}	});
rasaNodeMenu.push({ title: '### زنبور', action: function(elm, d, i) {
	if(rasaFlower==d){window.alert('جای زنبور و گل نباید یکی باشه.');return;}rasaStart=d;} });
rasaNodeMenu.push({ title: '### گل', action: function(elm, d, i) {
	if(rasaStart==d){window.alert('جای زنبور و گل نباید یکی باشه.');return;}rasaFlower=d;} });

function nodeSorterForPrint(a,b)
{
	if(a.printingIndex<b.printingIndex)
		return -1;
	if(b.printingIndex<a.printingIndex)
		return 1;
	return 0;
}

function calculateOutput()
{
	startFound=false;
	flowerFound=false;
	if(rasaFlower==null)
	{
		window.alert('گل معلوم نیست کجاست.');
		return ;
	}
	if(rasaStart==null)
	{
		window.alert('جای زنبور معلوم نیست.');
		return ;
	}
	for(var i=0, nextPrintingIndex=1; i<nodes.length; i++)
		if(nodes[i]==rasaStart)
		{
			startFound=true;
			nodes[i].printingIndex=0;
		}
		else
		{
			if(nodes[i]==rasaFlower)
				flowerFound=true;
			nodes[i].printingIndex=nextPrintingIndex;
			nextPrintingIndex++;
		}
	if(!flowerFound)//determined but deleted.
	{
		rasaFlower=null;
		window.alert('گل معلوم نیست کجاست.');
		return ;
	}
	if(!startFound)//determined but deleted.
	{
		rasaStart=null;
		window.alert('جای زنبور معلوم نیست.');
		return ;
	}
	nodes.sort(nodeSorterForPrint);
	var nodeListPrintingValue='';
	var edgeListPrintingValue='';

	for(var i=0; i<nodes.length; i++)
	{
		nodeListPrintingValue=nodeListPrintingValue+
			'{"label": "'+(nodes[i].printingIndex+1)+'",\t\'color\': \''+nodes[i].costumeRasaColor.englishName+'\',\t'+
				'\'hex\': \''+nodes[i].costumeRasaColor.colorCode+'\'}';
		if(i!=nodes.length-1)
			nodeListPrintingValue=nodeListPrintingValue+',\n';
	}
	for(var i=0; i<links.length; i++)
	{
		edgeListPrintingValue=edgeListPrintingValue+
			'{"source": '+links[i].source.printingIndex+',\t"target": '+links[i].target.printingIndex+'}';
		if(i!=links.length-1)
			edgeListPrintingValue=edgeListPrintingValue+',\n';
	}

	document.getElementById('flower_pos_indicator').innerHTML=rasaFlower.printingIndex;
	document.getElementById('size_indicator').innerHTML=nodes.length;
	document.getElementById('node_list').innerHTML=nodeListPrintingValue;
	document.getElementById('edge_list').innerHTML=edgeListPrintingValue;
	/*
	console.log(varDump(nodes));
	console.log(varDump(links));
	console.log(varDump(rasaFlower));
	console.log(varDump(rasaStart));
	*/
}
