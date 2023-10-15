function next(){
	var image_1=document.getElementById("first image");
	var image_2=document.getElementById("secondimg");
	var ourdiv=document.getElementById("my_home");
	var myhead=document.getElementById("my_heading");
	image_1.style.display="none";
	image_2.style.display="block";
	document.getElementById("my_heading").innerHTML=image_2.alt;
	


}

	
function prev(){
	var image_1=document.getElementById("first image");
	var image_2=document.getElementById("secondimg");
	image_1.style.display="block";
	image_2.style.display="none";
	document.getElementById("my_heading").innerHTML=image_1.alt;
	var ourdiv=document.getElementById("my_home");
	var myhead=document.getElementById("my_heading");
	

}




function downloadCV() {
    var cvFileURL = "cv.pdf"; // Replace with the actual URL
    var link = document.createElement("a");
    link.href = cvFileURL;
    link.download = "Felix_Muia_CV.pdf"; // Set the desired filename
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function verify_details(){
	// check if the first input field is five  long
	first=document.getElementById("first_input").value;
	if (first<5){
		alert("Your first name is invalid");
	}
	second=document.getElementById("second_input").value;
	if (second<5){
		alert("Your second name is invalid");
	}
	third=document.getElementById("third_input").value;
	if (third<5){
		alert("invalid location");
	}
	fourth=document.getElementById("fourth_input").value;
	if (fourth>3){
		alert("Ah!That a lot of duration");
	}
	fifth=document.getElementById("fifth_input").value;
	
	alert("Hello,"+first+ " " +second+ " " +"You have successfully placed your request to hire felix."+
	"He will get back to you shortly for confirmation");
}
