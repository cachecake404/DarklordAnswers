console.log("Created By Sam Thomas");
function givans() {
   
	
	if (window.danuz == "") {
		$("#txt").text("The dark lord says: You have no faith!");
	} 
	
	else {
		$("#txt").text("The dark lord says: "+window.danuz);
	}
        window.daprez=false;
        window.datranz=false;
        window.danuz="";

}


var daprez = false;
var datranz = false;
var danuz = "";


function prinner(event) {

    


    //if (event.keyCode == 32) {

      //  $("#txx").text("Space");
    //}


    if (window.datranz == true) {

        window.daprez = !window.daprez;
        window.datranz = !window.datranz;
    }




    if (event.key == "-") {

        if (window.daprez == true) {
            window.datranz = !window.datranz;

        }

        if (window.daprez == false) {
            window.daprez = !window.daprez;
        }


    }


    if (window.daprez == true && event.keyCode != 8 && event.key!="Shift") {

        if (event.key != "-") {
            window.danuz = window.danuz + event.key;
        }
        var praise = "Oh dark lord,grant me wisdom and grant me peace through your words";
        var curval = $("#namaye").val() + praise.charAt($("#namaye").val().length);
        $("#namaye").val(curval);

        event.preventDefault();
        event.stopPropagation();

    }
}