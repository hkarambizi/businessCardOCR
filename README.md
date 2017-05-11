# Buisness Card OCR Parser
## API for parsing name, phone, and email from business card information obtained through OCR


### Getting Started

Fork the repositiory and run npm install on your machine to add dependencies. Be sure to have Node installed globally (version 4 recommended).



### Accessing the API

You can submit GET requests using Curl, Postman, or a similar tool for interacting with APIs. To connect to your local version of the project, replace the heroku urls in the examples below with 'localhost:3000'.



#### Get Full Contact Info

GET to http://business-card-orc.herokuapp.com/api/contactInfo?doc=[URI encoded document string]

Example: http://business-card-orc.herokuapp.com/api/contactInfo?doc=ACOMPANY%20LTD%20%0A%20Leslie%20Soros%20%0A%20Senior%20Software%20Engineer%20%0A%20(410)555-1234%20%0A%20leslies@acompany.com

Response format: {Name: [name], Phone: [phone], Email: [email]}

Example: {"Name": "Leslie Soros", "Phone": "4105551234", "Email": "leslies@acompany.com"}



#### Get Name Only

GET to http://business-card-orc.herokuapp.com/api/name?doc= [URI encoded document string]

Response format: Name (string)



#### Get Phone Number Only

GET to http://business-card-orc.herokuapp.com/api/phone?doc= [URI encoded document string]

Response format: Phone (number)



#### Get Email Only

GET to http://business-card-orc.herokuapp.com/api/email?doc= [URI encoded document string]

Response format: Email (string)



#### More on Query String Formatting of Document

Encode a string version of the document to be parsed using the native Javascript method encodeURI() or a similar method. This should include encoding of spaces, new lines, and the '&' character. 



#### Notes on Accuracy

The Buisness Card OCR parser uses the available information obtained from the OCR to make a best guess as to the name, phone number, and email contained therein. In the case of emails that do not contain elements of the individual's name, only the email and phone number may be provided. 

