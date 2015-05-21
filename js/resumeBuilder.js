var bio = { //Object Literal Notation//
	"name" : "Sherman Hui",
	"role" : "Web Developer",
	"age" : 24,
	"contacts" : {
		"mobile" : "000-000-0000",
		"email" : "asdf@gmail.com",
		"github" : "asdf",
		"location" : "Vancouver"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc",
	"skills" : [
	"HTML", "CSS", "Javascript", "JQuery", "Python"
	],
	"picture" : "Project_1-assets/udacity-logo.jpg",
	"display" : "to be filled"
}

var education = {
	"schools" : [
		{
			"name" : "University of British Columbia",
			"location" : "Vancouver, BC",
			"degree" : "BA",
			"major" : "Economics",
			"dates" : "2009 - 2014"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to Python (Part I)",
			"school" : "Rice University",
			"date" : "2015",
			"url" : "string"
		},
		{
			"title" : "Introduction to Python (Part II)",
			"school" : "Rice University",
			"date" : "2015",
			"url" : "string"	
		},
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "string"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "TD Canada Trust",
			"title" : "Customer Service Representative",
			"location" : "Richmond, BC",
			"dates" : "September 2014 to present",
			"description" : "my current gig"
		},
		{
			"employer" : "University of British Columbia - Faculty of Arts",
			"title" : "Communications Assistant",
			"location" : "Vancouver, BC",
			"dates" : "April 2013 to September 2014",
			"description" : "my current gig"
		},
		{
			"employer" : "Centre for Teaching, Learning and Technology",
			"title" : "Marketing and Communications Assistant",
			"location" : "Vancouver, BC",
			"dates" : "Jan 2013 to April 2013",
			"description" : "my current gig"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Website",
			"dates" : "May 2015",
			"description" : "Built an online portfolio to display past projects",
			"images" : [
				{
					"image 1" : "url",
					"image 2" : "url"
				}
			]
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill= HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);	
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[projects].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(HTMLprojectImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%"), education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		%(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedURL); 
  	}
}



/*function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+ " " +name[1];
}

$('#main').append(internationalizeButton);*/
