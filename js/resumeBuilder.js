var bio = {
	"name": "Harry Aydin",
	"role": "Web Developer",
	"contacts": {
		"mobile": "04XX 4XX 321",
		"email": "XXXXX.23@gmail.com",
		"github": "https://github.com/HMAN1911",
		"twitter": "@twitter",
		"location": "Melbourne",
		"welcomeMessage": "Hello there!"
	},
	"skills": [
		"Design", "Web Development", "Illustration"
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
			"title": "Procurement Officer",
			"location": "Melbourne",
			"dates": "552009",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna ac lacus pellentesque lobortis ut nec ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis elit massa. Mauris euismod velit eget aliquet ultricies. Maecenas lobortis ullamcorper orci, blandit ultricies ante tincidunt sed. Maecenas dignissim tellus dolor, non efficitur sem vehicula non. Nullam sodales ante vel elit ultricies laoreet. Curabitur sed ligula eu nulla facilisis porttitor et in ex. Aenean libero justo, condimentum at erat id, tristique efficitur tortor. Vivamus lectus urna, feugiat at venenatis id, finibus eget lectus. Pellentesque finibus eget lectus convallis scelerisque. Aenean sit amet ullamcorper libero. Donec ullamcorper tempor augue, non vehicula diam sodales nec. Morbi a eleifend lorem."
		},
		{
			"employer": "Pacific Brands Australia",
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

//skills if loop
if (bio.skills.length !== 0) {
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
} else {
	console.log("false");
}

var displayWork = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer + HTMLworkTitle.replace("%data%", work.jobs[job].title)));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
};

displayWork();

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
//jquery event listener, gets executed at document load and logs clicks.
$(document).click(function (loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});

//internationalizer function:

function inName(name) {
	name = name.trim().split(" ");
	name[name.length - 1] = name[name.length - 1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLocaleLowerCase();
	return name[0] + " " + name[name.length - 1];
}

$("#main").append(internationalizeButton);

//$("#header").append(HTMLskillsStart);
//$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
//$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
//$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));

//project 1
$("#projects").append(HTMLprojectStart);
$(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[0].title));
$(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[0].dates));
$(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[0].description));
$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[0].images[0]));
$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[0].images[1]));

//education 1
$("#education").append(HTMLschoolStart);
$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[0].name) + HTMLschoolDegree.replace("%data%", education.schools[0].degree));
$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[0].dates));
$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[0].location));
$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[0].majors));
$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLschoolStart);
$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school));
$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[0].date));
$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[0].url));


