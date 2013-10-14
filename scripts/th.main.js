
	var activeLink;

	function showHideLogin() {
		if (document.getElementById('login_div').style.display == 'block') {
			document.getElementById('login_div').style.display = 'none';
			document.getElementById('login_error_div').style.visibility = 'hidden';
		} else {
			document.getElementById('login_div').style.display = 'block';
		}
	}

     function showHideContent(activeDiv) {
		
		document.getElementById('main_logo').className = 'main_content main_hidden';
		document.getElementById('main_about').className = 'main_content main_hidden';
		document.getElementById('main_jobs').className = 'main_content main_hidden';

		document.getElementById('main_team').className = 'main_content main_hidden';

		document.getElementById('main_mission').className = 'main_content main_hidden';

		document.getElementById('main_areas').className = 'main_content main_hidden';

		document.getElementById('main_stories').className = 'main_content main_hidden';

		document.getElementById('main_call').className = 'main_content main_hidden';

		document.getElementById('main_email').className = 'main_content main_hidden';
		document.getElementById('main_write').className = 'main_content main_hidden';

		document.getElementById(activeDiv).className = 'main_content';        
			  
	}

	function getParam(paramName) {
	  var searchString = window.location.search.substring(1), i, val, params = searchString.split("&");
	
	  for (i=0;i<params.length;i++) {
		val = params[i].split("=");
		if (val[0] == paramName) {
		  return val[1];
		}
	  }
	  return null;
	}
	
	function validate_form() {
		
		if ((document.getElementById('username').value == '') || (document.getElementById('password').value == '')) {
			document.getElementById('login_error_div').style.visibility = 'visible';
			return false;
		}
		
		document.getElementById('login_error_div').style.visibility = 'hidden';
		document.getElementById('v').value = 'e';
		
		return true;	
	}
	
	function checkLoginError() {
		if (getParam("v") == "e") {
			document.getElementById('login_div').style.display = 'none';
			document.getElementById('login_error_div').style.visibility = 'visible';
			document.getElementById('v').value = '';
		}
	}