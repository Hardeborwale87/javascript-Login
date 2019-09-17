var faculty;
faculty = [];
	function ad(){
		

		var nm = document.getElementById("name").value;
		var ml = document.getElementById('mail').value;
	 	var dp = document.getElementById('dept').value;
 		var lv = document.getElementById('lev').value;

 		var safe = {Name : nm, Email : ml, Department : dp, Level : lv};
 		faculty.push(safe);
 		// console.log(faculty);
	}

	function sign(){
		var register = JSON.stringify(faculty);
		localStorage.setItem("school", register);
	}

	function process(){
		if (localStorage.getItem("school")){
			faculty= JSON.parse(localStorage.getItem("school"));
			// console.log(faculty);
		}
		else {
			console.log("storage error!")
		}
	}
	


	function logIn() {
		if (check.value) {
			for (var i = 0; i < faculty.length; i++) {
				if(faculty[i].Email == check.value){
					show.innerHTML = "Name: " + faculty[i].Name + "<br>" + "Email: " +  faculty[i].Email + "<br>" + "Department: " +  faculty[i].Department + "<br>" + "Level: " +  faculty[i].Level;
					break;

				};
			}
		}
			else{
				alert("Please fill the form");
				show.focus();
			}
	}
