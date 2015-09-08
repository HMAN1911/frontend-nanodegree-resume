//Begin Jsons
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
	display: function () {

		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.contacts.welcomeMessage));
		//$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		//$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
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
			"url": "www.udacity.com"
		}
	],
	displaySchools: function () {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
		}
		;
	},
	displayOnlineCourses: function () {
		for (course in education.onlineCourses) {

			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
		;
	}
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
			"location": "Sydney",
			"dates": "552009",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna ac lacus pellentesque lobortis ut nec ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis elit massa. Mauris euismod velit eget aliquet ultricies. Maecenas lobortis ullamcorper orci, blandit ultricies ante tincidunt sed. Maecenas dignissim tellus dolor, non efficitur sem vehicula non. Nullam sodales ante vel elit ultricies laoreet. Curabitur sed ligula eu nulla facilisis porttitor et in ex. Aenean libero justo, condimentum at erat id, tristique efficitur tortor. Vivamus lectus urna, feugiat at venenatis id, finibus eget lectus. Pellentesque finibus eget lectus convallis scelerisque. Aenean sit amet ullamcorper libero. Donec ullamcorper tempor augue, non vehicula diam sodales nec. Morbi a eleifend lorem."
		}
	],
	display: function () {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer + HTMLworkTitle.replace("%data%", work.jobs[job].title)));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "02072015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna ac lacus pellentesque lobortis ut nec ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis elit massa. Mauris euismod velit eget aliquet ultricies. Maecenas lobortis ullamcorper orci, blandit ultricies ante tincidunt sed. Maecenas dignissim tellus dolor, non efficitur sem vehicula non. Nullam sodales ante vel elit ultricies laoreet. Curabitur sed ligula eu nulla facilisis porttitor et in ex. Aenean libero justo, condimentum at erat id, tristique efficitur tortor. Vivamus lectus urna, feugiat at venenatis id, finibus eget lectus. Pellentesque finibus eget lectus convallis scelerisque. Aenean sit amet ullamcorper libero. Donec ullamcorper tempor augue, non vehicula diam sodales nec. Morbi a eleifend lorem.",
			"images": [
				"images/197x148.gif", "images/197x148.gif"
			]
		}
	],
	display: function () {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[0]));
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[1]));
		}
	}
};
//End Jsons


bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();

$("#mapDiv").append(googleMap);

//functions for various features

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}


function inName(name) {
	name = name.trim().split(" ");
	name[name.length - 1] = name[name.length - 1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLocaleLowerCase();
	return name[0] + " " + name[name.length - 1];
}
