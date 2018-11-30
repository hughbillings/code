'use strict';

window.onload = function () 
{
	var form = document.getElementById("courseform");

	form.addEventListener("submit", function(e) 
	{

		var validationFailed = false;


		var coursecode = document.getElementById("coursecode");
		var coursetitle = document.getElementById("coursetitle");
		var coursediscipline = document.getElementById("coursediscipline");
		var level = document.getElementById("level");
		var credits = document.getElementById("credits");
		var semesteroffered = document.getElementById("semesteroffered");
		var optionselect = document.getElementById("lecturers");

		
		// Remove all Errors
		clearErrors();



		// Queries
		if(isEmpty(coursecode.value.trim()))
		{
			validationFailed = true;
			displayError(coursecode)

		}

		if(isEmpty(coursetitle.value.trim()))
		{
			validationFailed = true;
			displayError(coursetitle);
		} else { coursetitle.classList.add("greenbkg")};

		if(isEmpty(coursediscipline.value.trim()))
		{
			validationFailed = true;
			displayError(coursediscipline);
		}

		if(isEmpty(level.value.trim()))
		{
			validationFailed = true;
			displayError(level);
		}

		if(isEmpty(credits.value.trim()))
			
		{
			validationFailed = true;
			displayError(credits);
		}

		if(isEmpty(semesteroffered.value.trim()))
		{
			validationFailed = true;
			displayError(semesteroffered);
		}

		if(selectionValues(optionselect.value) == false)
		{
			validationFailed = true;
			alert("Please Select Lecturer");
		}


		if(coursecodevalid(coursecode.value.trim()) == false)
		{
			validationFailed = true;
			displayError(coursecode);
		}

		if(coursedisciplinevalid(coursediscipline.value.trim())  == false)
		{
			validationFailed = true;
			displayError(coursediscipline);
		}

		if(creditvalid(credits.value.trim())  == false)
		{
			validationFailed = true;
			displayError(credits);
		}

		if(levelvalid(level.value.trim()) == false)
		{
			validationFailed = true;
			displayError(level);
		}

		if(semesterofferedvalid(semesteroffered.value.trim())  == false)
		{
			validationFailed = true;
			displayError(semesteroffered);
		}

		if(validationFailed)
		{
			console.log("Errors are present");
			e.preventDefault();
		}

		// Regular Expression Testers

	});

		function coursecodevalid(x)
		{
				
			 if(x.length === 4 && /^[0-9]*$/.test(x))
			 {
				coursecode.classList.add("greenbkg");
			 	return true;
			 } else {
			 	return false;
			 }
		}

		function coursedisciplinevalid(x)
		{
			

			
			if(x.length===4 && /^[A-Z]*$/.test(x) )
			{
				coursediscipline.classList.add("greenbkg");
				return true ;
			} else 
			{
				return false;
			}
		}			

		function levelvalid(x)
		{
			if(x.length==1 && /^[1-3]?$/.test(x))
			{
				level.classList.add("greenbkg");
				return true;
			} else 
			{
				return false;
			}
		}

		function creditvalid(x)
		{

			if(x.length==1 && /^[1-8]?$/.test(x))
			{
				credit.classList.add("greenbkg");
				return true;
			} else
			{
				return false;
			}
			 	 
		}

		function semesterofferedvalid(x)
		{
			if(x.length==1 && /^[1-3]?$/.test(x))
			{
				semesteroffered.classList.add("greenbkg");
				return true ;
			} else 
			{
				return false;
			}
		}


		//Checks to see if the values are empty

		function isEmpty(x)
		{
			if(x.length == 0)
			{
				return true;
			}
		}


		function clearErrors()
		{
			var elementsWithErrors = document.querySelectorAll('.redbkg');
			for (var i = 0; i < elementsWithErrors.length; i++)
			{
				elementsWithErrors[i].setAttribute('class','');
			}
		}
		function displayError (x)
		{
			x.setAttribute('class',"redbkg");
		}


		// Functions checks for the values inside select

		function selectionValues(x)
		{
			if(x>=1 && x<=6)
			{
				return true;
			} else

			{
				return false;
			}
		}
}




		
	
