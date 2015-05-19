var formattedName = HTMLheaderName.replace("%data%", "Sherman Hui");

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
			"majors" : [
				"Economics"
			],
			"minors" : [
				"Commerce"
			],
			"dates" : 2014,
			"url" : "to be filled"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to Python (Part I)",
			"school" : "Rice University",
			"date" : 2015,
			"url" : "string"
		},
		{
			"title" : "Introduction to Python (Part II)",
			"school" : "Rice University",
			"date" : 2015,
			"url" : "string"	
		},
		{
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "string"
		}
	],
	"display" : "to be filled"
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
	],
	"display" : "to be filled"
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
	],
	"display" : "to be filled"
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill= HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}


for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}