Ground Rules
	1. Appreciate if we can make this as an interactive discussion
	2. Hands-on Oreinted Session
	3. Appreciate if you provide 100% participation
	4. Environment Setup (Notepad, Browser)
		|-> VS (Visual Studio) code 
			  |-> Extension LiveServer
	5. Do maintain the timings 
			     |-> 2:00 PM to 6:00 PM
	6. Duration is 9 days 
		       |-> 26th June to 8th July'24
		

Agenda :-
	1. Overview of Web Application & Scripting Language
	2. Scripting Styles
	3. Execution Modes
	4. Introduction to JavaScript
	5. Programming Constructs in JavaScript
	6. Arrays, Types of Arrays & Array Functions
	7. String & String Functions
	8. Functions (Overview, Features & Types )
					     |-> Call by Name, Pass by Value, Pass by Reference,
						  Function with Optional & Default Parameters
						    Optional Vs Default Parameters
						      Function Hoisting, 
							Anonymous Function, Callback Function
							  Function Closures & Higher Order Function
	9. Promises
	10.DOM Manipulations
	

Web Application
	- Group of pages linked/saved together on a Web-server
		     |-> Equivalent to program
			 Group of tags combined to-gether
				    |-> Equivalent to k/w's or instructions
	- We need Browser & a Web-Server
	- HTTP 
	    |-> Hyper Text Transfer/Tranmission Protocol
		Communication layer b/w Web-Browser & WebServer

	Note.:
	   a. Our Web-Application must be Browser, Platfrom & Device Independent

	Page
	   - Equivalent to Program
	   - Web Sites are bundled with one or more pages
	   - Collection/Group/Set of tags 
				       |-> Derived from Markup language
							      |-> Used to format the text & generate the UI
								  SGML is the base for all the Markup languages
								    |-> HTML, DHTML, XML, XAML, ...
					   2 different categories
						a. Empty tag
						b. Container tag
	   - 2 types
		1. Static Page		: Will not have any user interaction during the run-time
			|-> Markup language
			    Will have an extension as .html
		2. Dynamic Page		: Will have user interaction during run-time
			|-> Markup Language + Scripting Language
						  |-> A language which will be interpreted by another programming language
												     |-> Can be either Web-Browser/Web-Server
						      Derived from ECMA Script / ES
			2.1 Client-Side dynamic web page
				 - Used to perform Form Validation
				Group of controls <-|  |
						       |-> Control Event Procedures
									    |-> Either using JavaScript / VB Script
				 - Avoid Congestion or N/w traffic
				 - Will have an extension as .html 
				 - Deployed within the Web-Browser	
							  |-> Chrome, Edge, Firefox, IE, ... 							

			2.2 Server-Side dynamic web page
				 - Used to either export or import the data from external data source
				 - ASP, ASP.Net, JSP, Rails, ...
				 - Will be deployed within the Web-Server
								  |-> Tomcat, WebLogic, Apache, IIS, IIS Express, Kestral, Node JS, ...
			


	 Note.:
		a. If we have <script> ... </script> / Scriplet tag enclosed within the page then they are called as Client-Side dynamic web page
						     |	   |-> <% .... %>
						     |
						     V
					    Min."0" & Max.:"n"
					    Either within the <head>...</head> / <body> ... </body>

		b. <html> .... </html>
			   |-> b.1 <head> ... </head>
			       b.2 <body> ... </body>


JavaScript Vs VB Script
					JavaScript				VBScript
		Browser			Independent				Dependent
		Platform		Independent				Dependent
		Subset			Java					VB 6.0
		Introduced		Mozilla					Microsoft		


	Note.: Every browse is bundled with inbuilt JavaScript engine
		a. Edge & IE		: Chakra
		b. Chrome		: V8
		c. FireFox		: Spider Monkey
		d. Safari		: JavaScript Core
		e. Microcontrollers	: JerryScript
		f. Java 8		: Nashron 

<script> ... </script>
	- Tag has various properties/attributes associated to it
				   |-> a. src		: Used to indicate either to the Web-browser/Web-server from where it can load script functionality
					     Eg.:
						<script src="Demo.js"> ... </script>
				       b. type		: Indicates the content associate to it
					     Eg.:
						<script type="text/javascript"> ... </script>
				       c. runat		: Used to explicitly represent where the script functionality has to be deployed
					      Eg.:
						<script runat="serer"> ... </script>
	- By default,
		i. the browser implicitly maps Javascript as the scripting language
	       ii. deployed by the web-browser

Scritping Styles
	- We can endrose client-side script functionality to a page in 3 different ways
								       |-> a. Inline	: Enclosing the script functionality within the tags
										  Eg.:
											 <body onload='alert('Welcome to JavaScirpt')'> ... </body>
				
								           b. Embeded	: Enclsoing the script functionality within the <script> ... </script>
										  Eg.:
											 <body>
											    <script>
                                                                                                document.write(' Boring Session ');
											    </script>
											 </body>
											
									   c. External	 : Clear cut separation b/w Presentation logic & Business logic
										 Eg.:
											 <body>
											    <script src="./Demo.js" />
											 </body>

Execution Modes
	- Script functionality will be deployed in 2 different modes
						   |-> 1. Immediate Mode	 : Script functionality will be deployed implciitly either by the Web-Browser/Web-Server the moment either the page gets initalized / loaded
								 Eg.:
								      <body>
									<script>
                                                                          document.write(' Boring Session ');
									</script>
								      </body>
						       2. Deferred Mode		: Script functionality will be deployed explicitly by the Web-browser/Web-server
															    |-> Based on User Intervention
								 Eg.:
								      <body>
   									  <button onclick="invokeFunct()">Invoke Script</button>
									  <script>
                                                                             function invokeFunct(){
								                 document.write(' Boring Session ');
 									     }
									   </script>
								       </body>

Introduction to JavaScript
	- Single threaded programming language
	- From top to bottom
	- Supports Multiple Programming Paradigm (ie., Procedural, Object-Oreinted & Functional Programming constructs)
	- Interpreter with JIT combined to-gether
		|-> Differs from Browser to Browser
	- Supports 2 types of execution
		   |-> a. Blocking Mode
		       b. Non-Blocking Mode	
	Note.:
	  a. From ES6 & above it supports both Synchronous and Asynchronous mode of execution
	  b. Implicitly used for Client-side interactions (ie. Deployed by the Web-Browser)
	
	Features
	    1. Platform Independent
	    2. Browser Independent
	    3. Device Independent
	    4. Verstalie Paradigms
	    5. Modularity
	    6. Dynamic Typing

	Components of a Program
		- Program is bundled with 4 different components
					  |-> 1. Variable
					      2. Constant
					      3. Expression
					      4. Statement

		1. Variable	: Placeholder to store the value
		      |-> Dynamic type (ie., Type of the variable will be determined based on the value what we assign to it)
			  From ES6, JS provides 3 different scopes
						|-> 1.a Global
						    1.b Local
						    1.c Block 
			  We can assign a value to a variable in 2 different forms
								 |
								 V
						i. Implicit Assignment	: Having both the decalaration as well as the definition on the same line
					       ii. Explicit Assignment	: Having declaration in one line and it's definition before end of the scope
			  Type of the variable is determined based on Meta Type / Type Inference
									    |-> Type is determined/identified based on the value what we assign to it
			  Interpreter initalizes the JS variables implicitly
					  |-> iff we have not initailized explicitly 
					      Either undefined / null
			  Can accomodate/supports 3 types of values 
						  |-> a. Primitive type		: Variable can have one value at any point of time
								|-> number, string, boolean
						      b. Abstract/Derived type	: We can accomodate more than one value to a variable simultaneously
								|-> Arrays & Functions
						      c. User-defined type
			  From ES6 we can explicitly mandate the variable declaration
					     |-> use strict clause	|-> Variable Hoisting				
			Note.: 
				a. Undefined Vs null

								undefined				null
					Type			Undefined				Object
					Initialized		No value				"/0"
					Datatype		Yes					No
				b. Variables can be represented in JS either using a k/w "var" / "let"
				c. Variables are mutable
						   |-> We can modify it's content 
				d. var Vs let
								var					let
					Version			ES5					ES6
					Scope			Global & Local				Block Level
					Re-declaration		Yes					No
					Hoisting		Optional				Mandatory

		2. Constant
			- Applicable from ES6 & above
			- Subset of Variables
			- Immutable 
			     |-> We cannot modify it's value after initialization
			- Using a k/w "const"
			- Must have only implicit assignment

		3. Expression	 
			- Variables with some operators associated to it
						 |-> Derived from Java (ie., Arithmetic, Relational, Logical, Assignment, Increment, Decrement,
							 Conditional/Tenary & Bitwise Operators)
						     Strict Comparison operator 
							    |-> ===
								Both the value & type
						     Spread operator
						     Rest operator  
							  |-> ...

		4. Statement 
			- An instruction with proper syntax and semantic associated to it
			- 2 categories
			  |-> 4.1 Non-Executable Statement	: Comment Statement
									|-> 4.1.a Single Line	: //
									    4.1.b Multi Line	: /* .... */
			      4.2 Executable Statement 
					4.2.1 Input
						4.2.1.1 Using Dialog Box
						4.2.1.2 DOM Manipulation
					4.2.2 Output
						4.2.2.1 Within the Page (ie., Display's the output as subset of page content)
						4.2.2.2 On the Console
						4.2.2.3 On top of the page
						4.2.2.4 Redirecting the output to the DOM elements
					4.2.3 Conditional
						4.2.3.a Simple if
						4.2.3.b if ... else
						4.2.3.c Nested if ... else
						4.2.3.d else if ladder
					4.2.4 Multiple Conditional	: Equivalent/Similar to switch() in Java						
					4.2.5 Looping			: Used to iterate the statements recursively until a particualr condition is satisfied
						 |-> 4.2.5.i while()
						     4.2.5.ii do...while()
						     4.2.5.iii for()
						     4.2.5.iv Associative for()
								 |-> for ... in / for ... of
						
Output Statement
	- Used to redirect the output to the enduser either within the page or console or Dialog box or DOM elements
		1. Within the Page
			document.write()
	Pre-defined Obejct <-|     |-> Pre-defined non-static method
		2. On the Console
			 console.log()
	Pre-defined Obejct <-|     |-> Pre-defined non-static method	
		3. In the form of Dialog Box
			3.1 alert()		: Forced to accept the information
			3.2 confirm()		: Gives an option to the end user either to accept or ignore the information
		4. Printing it on the DOM element
		


Array
	- Subset of Abstract types in JavaScript
	- Ordered Collection of elements grouped to-gether
		a. Ordered	: Contigous Memory Location
		b. Collection	: Either Homoegenous / Hetrogeneous elements
	- Internally it's treated as Objects by JavaScript Engine
	Types
	   1. Based on the Diemension
		 1.1 Single Dimension	: Array elements will be represented either in the form of Row/Column
		 1.2 Multi Dimension	: Array elements will be represented in Matrix format
										   |-> Intersection of Rows & Columns
			1.2.1 Two Dimension	: If all the rows with same number of columns
			1.2.2 Jagged Arrays	: Subset of Multi Dimesional array, iff atleast 1 row has different number of columns
	   2. Based on the value
		  - Dense Array : Atleast one element of the array with different type

	Array Methods
		a. push()
		b. unshift()
		c. splice()
		d. tospliced()
		e. pop()
		f. shift()
		g. slice()
		h. join()
		i. foreach()
		j. map()

	foreach() vs map()
						forEach()			map()
			Return Value		Undefined			New Array
			Stream of Operations	Not Allowed			Allowed

	Note.:
	    a. Arrays can be created either using subscript operotor or instanting an Array class
						     |-> []		   |-> new

String
	- Collection of characters
	- Can be represented either using a String Literal or as an object
		a. String Literals	: "" , ' ' , ``
						      |-> Template Strings
							  Introduced from ES6 & above
							  Can have Multiline Strings, 
							  Used to perform String Manipulation more effectively

		b. String Object	: Instantiating from the String class
	String Methods
		a. at()
		b. charAt()
		c. charCodeAt()
		d. slice()
		e. substring()
		f. substr()
		g. replace()
		h. repalceAll()
		i. match()
		j. split()
		
	
Object :
	- Subset of types in JavaScript
	- Repersentation will be in the form of Key-Value pair's
						   |-> Using a delimeter ":"
	- Till ES5 Javascript is an Object Based language, From ES6 it's an Object Oriented language
										 |-> Object Based + Inheritance
	- We can represent in multiple forms/ways :-
		a. Object Literal	
			 |-> {}
		b. Instaniate an Object Class
			|-> Using new
		c. In the form of Functions (ie., Constructor )
				     |-> iff we handle this within the definition of the function &
				         We instantiate it using a 'new'
		d. Object.create()
			     |-> Pre-defined static method within an Object class
						  |-> Overloaded 
		e. From ES6 we represent it using a Class which is similar to C++, Java, C# , ...

Function
	- Sub-routine/Sub-program
	- Used to achieve Modularity
			      |-> Userfriendly, Reusable, ... 
	- We adopt Divide and Conquer Algorithimic Design technique
	- Will be stored within Stack Segment of the memory
	- From ES6 JavaScript supports both Asynchronous & Synchronous mode of execution
		a. Asynchronous Mode	: Non-Blocking code
			 |-> Callback, Promise, async, ...
		b. Synchronous Mode	: Blocking Code
			|-> Always Top to bottom approach
	- In JavaScript Functions are known as First class functions
						    |-> a. If we can assign a function to a variable or
						        b. If we can pass a function as an argument to another function or
							c. If a function returning a function
	Types
	   a. Pre-defined functions
	   b. User-defined functions
		b.1 Call by Name
		b.2 Pass by Value
			- Function with some arguments mapped to it
		          		        |-> Min.:"1" & Max."n"
						    Otherwise known as Parameters
									  |-> b.2.1 Actual
									      b.2.2 Formal

				Eg.:
					function demoFunction(iNo){

					      ...
					}
					demoFunction(12);
					var iFirst = 12;
					demoFunction(iFirst);
					demoFunection(iFirst + 12);


		b.3 Pass by Reference
		b.4 Function Hoisting
		b.5 Function Curying
		b.6 Anonymous Function
		b.6 Call backs
		b.7 Higher Order Function	
		b.8 First Class Function
		b.9 Function Closures
		b.10 Arrow Functions
		...
	

Function Closure
	- When an inner function
	Pre-requsitie
	      a. There should be a nested function
	      b. If we want to close and bring something out (i.e. there is a definition in the outer function now we want to close that definition and bring out) then what we should refer to that definition in the inner function 
							         |-> the definition should be referred in the inner function)
	      c. The outer function should return the inner function
	  - If these 3 things are done then the function object that is returned will close and bring the definition out
	Note.:
	  a.  If I have nested function, if the inner function is going to refer to  definitions 
	       which are there in the scope in which it is defined, and if the outer function returns 	
	       the inner function, then the function object will have closure property 	
	   
	 b. Functions are otherwise known as First Class Functions (i.e. We can pass a function as an argument, We can return a function &
	     we can assign a function as names)	

Agenda :-
	1. Call back Methods
	2. Need for Promises
	3. Promise Chaining
	4. async & await k/w
	5. Fetch the data from an external API's

Call Back Method
	- Function which takes atleast one function as an argument
	- Calling Back
	- To achieve asynchronous mode of execution
			   |-> Uitlizes the time effeciently
				
	Performance Challenges
	   a. Unpredictable results
	   b. Callback Hell

Promise
	- Finetuned way of accessing return value of call back methods
	- Pre-defined object provided by JavaScript Engine
	- 3 operations
	     a. pending
	     b. resolve
	     c. reject

	Note.: Promise chaining : If a promise returns another promise which can be handled by Promise Chaining

Agenda :-
	1. Revisit Function Currying
	2. API
	3. DOM Manipulation

API (Application Programming Interface)
	- Acts as an interface between 2 different Applications to communicate each other or Acts as a service to another piece of S/w
													  |-> XML, SOAP, WCF, Restful
	- To bridge the gap b/w applications
	- API's provided to JavaScript code by the Browser are called Web API's
									|-> Allows us to interact with the browser with the support from any Front end application
	- JavaScript runtime has it's own set of API's
						  |-> XMLHttpRequest(XHR), Document Object Model (DOM), Notification API, Storage API, ...
		
		1. To interact data from external data source			: XMLHttpRequest, jquery & Promise
			|-> CRUD Operations  |-> Either Application Server or Database Server or File server or Web Server
			      |-> Create Read Update & Delete
				  Using Http Verbs
					     |-> post(), get(), put() & delete()
			- Preferred approach is using a Promise
							   |-> From ES6 we have fetch()
		2. To generate popup messages in the form of Notifications	: Notification API
		3. Used to store the cookies information stored in the browser	: Storage API
											|
											V
										3.1 Session Storage	: Informations will persist till the session is active
														|-> Volatile
										3.2 Local Storage	: Informations will persist until we explictily remove it
												Non-Volatile <-|

DOM API's
	- Document Object Model
	- In order to interact with the Tags through our script functionality 
			 |-> Either Static or Dynamic
	- Can be manipulated using a pre-defined object named "document"

























			 
				

	
	
























