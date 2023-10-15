function next(){
	var image_1=document.getElementById("first image");
	var image_2=document.getElementById("secondimg");
	var ourdiv=document.getElementById("my_home");
	image_1.style.display="none";
	image_2.style.display="block";
	document.getElementById("my_heading").innerHTML=image_2.alt;
	ourdiv.style.textAlign = "center";
	image_2.style.textAlign="right";

}

	
function prev(){
	var image_1=document.getElementById("first image");
	var image_2=document.getElementById("secondimg");
	image_1.style.display="block";
	image_2.style.display="none";
	document.getElementById("my_heading").innerHTML=image_1.alt;
	var ourdiv=document.getElementById("my_home");
	
	ourdiv.style.textAlign = "center";
}

<h3 id="Felix">Know about Felix M. Muia</h3>
<a href="#" id="downloadLink" onclick="downloadCV()">Download Felix's CV</a>
<section>
    <!-- ... your content ... -->
</section>


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
	alert("placed succefully,we will get back to your soon for confimation");
}
