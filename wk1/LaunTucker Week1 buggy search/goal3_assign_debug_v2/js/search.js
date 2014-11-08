// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //declaring var results from documents 
		searchInput = document.forms[0].search, //search user input
		currentSearch = '' //shows current search
	;
	
	// Validates search query
	var validqte == function(query){ //declaring var to validate function 
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //declaring "while" function
			query = query.substring(1, query.length); //declaring query to substring
		};
		while(query.charAt(query.length-1) === ""){ //declaring "while" function
			query = query.substring(0, query.length-1); //setting length
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){  //Declaring "if" function
			alert("Your search query is too small, try again".); //fixed quote and this is an alert that will show
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //user input result
			return; //declaring return of results
		};
		
		search(query); //search command
	};
	
	// Finds search matches
	var search = function(query) //declaring var on function
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); //directing var to query array
		
		// array to store matched results from database.js
		var results = []; //showing results

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ //declaring loop through data base
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); declaring var on title end
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); declaring var on data base entry
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //loop length
				var qitem = queryArray[ii].tolowercase(); //declaring var query item to lower case
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //comparing item to data base
				if(compare !== -1){ //declaring "if" function 
					results.push(db[i]); //publish results
				};
			;
		;
		
		results.sort(); //sorting result function
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ //declaring "if" function if no match to show 0
			noMatch();
		}else{ // declaring else function then to show results
			showMatches(results); //show mathes
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ //declaring  var noMatch function if no result
		var html = ''+ // declaring var for html
			'<p>No Results found.</p>'+ //showing no results to user
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //suggestion new search
		;
		resultsDIV.innerHTML = html; // not sure what this is
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ // declaring var for matches
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //showing text "results"
			title, //title of result
			url  //url of result
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ //loop through data base
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //declaring to look for end word
			title = results[i].subString(0, titleEnd); //declaring to look in substring
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //place the video after title
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //declaring spot for link to video and title
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. //declaring results of video
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ //declaring documents attached
		var query = searchInput.value; declaring var for query //declaring var for query
		validqte(query); //validating query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; // not sure what this is
	;

})();