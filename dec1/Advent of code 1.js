
//Called when application is started.
function OnStart()
{
	var moduleMasses = readInput();
	var totalRequiredFuelPart1 = getTotalFuelPart1(moduleMasses);
	var totalRequiredFuelPart2 = getTotalFuelPart2(moduleMasses);
	showOnScreen([totalRequiredFuelPart1,totalRequiredFuelPart2]);
	
}

function showOnScreen(solutions)
{
  lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
  app.AddLayout( lay );
  solutions.forEach(function(s,i) {
   txt = app.CreateText( "Part "+(i+1)+": "+s.toString());
 	txt.SetTextSize( 32 );
 	lay.AddChild( txt );
 })
}


function readInput()
{
    var txt = app.ReadFile("input-1.txt");
    var inputData = txt.split("\n");
    return inputData;
}

function getTotalFuelPart1(masses)
{
	 return masses.reduce((a, b) => a + calculateFuel(b), 0)
}


function getTotalFuelPart2(masses) {
 return masses.reduce((a, b) => a + getRequiredFuel(b), 0)
}

function getRequiredFuel(m)
{
	var requiredFuel = calculateFuel(m);
	var additionalFuel = 0;
	
	if(requiredFuel > 0) {
	  additionalFuel = getRequiredFuel(requiredFuel);
	}
	return requiredFuel+additionalFuel;
}


function calculateFuel(m)
{
  var fuelRequirement = Math.floor(Number(m)/3)-2;
	return fuelRequirement > 0 ? fuelRequirement : 0;
}