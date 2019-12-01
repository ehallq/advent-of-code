
//Called when application is started.
function OnStart()
{
	var moduleMasses = readInput();
	var totalRequiredFuel = getTotalFuel(moduleMasses);
	showOnScreen(totalRequiredFuel);
	
}

function showOnScreen(fuel)
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
	app.AddLayout( lay );
	txt = app.CreateText( "Total required fuel: "+fuel.toString());
	txt.SetTextSize( 32 );
	lay.AddChild( txt );
}


function readInput()
{
    var txt = app.ReadFile("input-1.txt");
    var inputData = txt.split("\n");
    return inputData;
}

function getTotalFuel(masses) {
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