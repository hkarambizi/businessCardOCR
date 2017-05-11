# Buisness Card OCR Parser
##API for parsing name, phone, and email from business card information obtained through OCR


### Getting Started

Fork the repositiory and run npm install on your machine to add dependencies. Be sure to have Node installed globally (version 4 recommended).



### Accessing the API

You can submit GET requests using Curl, Postman, or a similar tool for interacting with APIs. To connect to your local version of the project, replace the heroku urls in the examples below with 'localhost:3000'.



#### Get Full Contact Info

GET to http://business-card-orc.herokuapp.com/api/contactInfo?doc=[URI encoded document string]

Example: http://business-card-orc.herokuapp.com/api/contactInfo?doc=ASYMMETRIK%20LTD%20%0A%20Mike%20Smith%20%0A%20Senior%20Software%20Engineer%20%0A%20(410)555-1234%20%0A%20msmith@asymmetrik.com

Response format: {Name: [name], Phone: [phone], Email: [email]}

Example: {"Name": "Mike Smith", "Phone": "4105551234", "Email": "msmith@asymmetrik.com"}



#### Get Name Only

GET to http://business-card-orc.herokuapp.com/api/name?doc=[URI encoded document string]

Response format: Name (string)



#### Get Phone Number Only

GET to http://business-card-orc.herokuapp.com/api/phone?doc=[URI encoded document string]

Response format: Phone (number)



#### Get Email Only

GET to http://business-card-orc.herokuapp.com/api/email?doc=[URI encoded document string]

Response format: Email (string)



#### More on Query Doc Format

Be sure to encode the document to be parsed using the native encodeURI() or a similar method. Spaces, new lines, and special characters (such as & and =) should be encoded.



#### Notes on Accuracy

The Buisness Card OCR parser uses the available information obtained from the OCR to make a best guess as to the name, phone number, and email contained therein.

