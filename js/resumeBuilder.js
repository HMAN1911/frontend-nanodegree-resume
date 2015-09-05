var bio = {
	"name": "Harun Aydin",
	"role": "Web Developer",
	"contacts": {
		"mobile": "0433 424 321",
		"email": "aydin.harun.23@gmail.com",
		"github": "https://github.com/HMAN1911",
		"twitter": "@twitter",
		"location": "Melbourne",
		"welcomeMessage": "Hello there!"
	},
	"skills": [
		"Design", "Web Development", "Drawing"
	],
	"biopic": "images/fry.jpg",
	"display": "TODO some function goes here"
};


var education = {
	"schools": [
		{
			"name": "Latrobe University",
			"location": "Melbourne, Australia",
			"degree": "Bachelor of Commerce / Arts",
			"majors": [
				"E-commerce", "Philosophy"
			],
			"dates": 23052010,
			"url": "www.latrobe.edu.au"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Wed Development",
			"school": "Udacity",
			"date": 12122015,
			"url": "www.udacity.com",
			"display": "TODO some function goes here"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Powercor Australia",
			"title": "Ecommerce Analyst",
			"location": "Melbourne",
			"dates": "552009",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna ac lacus pellentesque lobortis ut nec ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis elit massa. Mauris euismod velit eget aliquet ultricies. Maecenas lobortis ullamcorper orci, blandit ultricies ante tincidunt sed. Maecenas dignissim tellus dolor, non efficitur sem vehicula non. Nullam sodales ante vel elit ultricies laoreet. Curabitur sed ligula eu nulla facilisis porttitor et in ex. Aenean libero justo, condimentum at erat id, tristique efficitur tortor. Vivamus lectus urna, feugiat at venenatis id, finibus eget lectus. Pellentesque finibus eget lectus convallis scelerisque. Aenean sit amet ullamcorper libero. Donec ullamcorper tempor augue, non vehicula diam sodales nec. Morbi a eleifend lorem."
		}
	],
	"display": "TODO Some function goes here"
};

var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "02072015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna ac lacus pellentesque lobortis ut nec ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis elit massa. Mauris euismod velit eget aliquet ultricies. Maecenas lobortis ullamcorper orci, blandit ultricies ante tincidunt sed. Maecenas dignissim tellus dolor, non efficitur sem vehicula non. Nullam sodales ante vel elit ultricies laoreet. Curabitur sed ligula eu nulla facilisis porttitor et in ex. Aenean libero justo, condimentum at erat id, tristique efficitur tortor. Vivamus lectus urna, feugiat at venenatis id, finibus eget lectus. Pellentesque finibus eget lectus convallis scelerisque. Aenean sit amet ullamcorper libero. Donec ullamcorper tempor augue, non vehicula diam sodales nec. Morbi a eleifend lorem.",
			"images": [
				"images/197x148.gif", "images/197x148.gif"
			],
			"display": "TODO some function goes here"
		}
	]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

//bio section
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
//$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
//$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.contacts.welcomeMessage));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
$("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
$("#header").append(HTMLskills.replace("%data%", bio.skills[2]));

//job 1
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer + HTMLworkTitle.replace("%data%", work.jobs[0].title)));
$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[0].dates));
$(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[0].location));
$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[0].description));

//job 2
//$("#workExperience").prepend(HTMLworkStart);
//$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[1].employer + HTMLworkTitle.replace("%data%", work.jobs[0].title)));
//$("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[1].dates));
//$("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[1].location));
//$("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[1].description));

//project 1
$("#projects").append(HTMLprojectStart);
$(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[0].title));
$(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[0].dates));
$(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[0].description));
$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[0].images[0]));
$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[0].images[1]));
