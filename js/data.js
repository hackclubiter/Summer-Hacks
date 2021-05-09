const projectData = [
   {
      teamName: "Swapnil Chand",
      //give the username and repository name where you have posted your project
      username: "SwapnilChand",
      reponame: "summerhacks-SwapnilChand",
  },
  {
      teamName: "Urjaswi",
      //give the username and repository name where you have posted your project
      username: "Urjaswi-2655",
      reponame: "summerhacks-Urjaswi",
  },
  {
      teamName: "SOA Code Room",
      //give the username and repository name where you have posted your project
      username: "saswatsamal",
      reponame: "snake-game",
  },
  {
      teamName: "SOA Code Room",
      //give the username and repository name where you have posted your project
      username: "soacoderoom",
      reponame: "Summer-Hacks",
  },

  {
      teamName: "BugBusters",
      //give the username and repository name where you have posted your project
      username: "apschauhan210",
      reponame: "summerhack-Technocrats",
  },


  {
      teamName: "summerhacks-TeamBruteforce",
      //give the username and repository name where you have posted your project
      username: "arpanaditya",
      reponame: "summerhacks-Team-Bruteforce",
  },

  {
      teamName: "Nuubs4",
      //give the username and repository name where you have posted your project
      username: "Jyo561",
      reponame: "summerhacks-Portfolio360",
  },

  {
      teamName: "Team Shailesh_Vinit",
      //give the username and repository name where you have posted your project
      username: "vinitvins", "Shailesh611"
      reponame: "summerhacks-myPortfolioMusk",
  },

  {
      teamName: "Exotic",
      //give the username and repository name where you have posted your project
      username: "iamsahebgiri",
      reponame: "summerhacks-exotic",
  },

  { 
       teamName: "Alik Kumar Ghosh",
       username: "Alik-Kumar-Ghosh",
       reponame: "SummerHacks_Portfolio",
  },

  {
      teamName: "Poushali Chakraborty",
      //give the username and repository name where you have posted your project
      username: "poushali07",
      reponame: "SummerHacks_Poushali",
  },

  {
      teamName: "WeOne",
      //give the username and repository name where you have posted your project
      username: "Abhijeet-Anand-01",
      reponame: "summerhacks-WeOne",
  },

  {
      teamName: "Siddhant Sarthak",
      //give the username and repository name where you have posted your project
      username: "sid-mr-im",
      reponame: "summerhacks-siddhantsarthak",
  },

    {
      teamName: "ZCoders",
      //give the username and repository name where you have posted your project
      username: "Vishal409",
      reponame: "SummerHacks-ZCoders",
    },

   {
      teamName: "Farid Ahmed",
      //give the username and repository name where you have posted your project
      username: "fareedahmed00",
      reponame: "summerhacks-FaridAhmed",
   },

  {
      teamName: "Amrit Nayak",
      //give the username and repository name where you have posted your project
      username: "AmritNayak",
      reponame: "summerhacks-myPortfolioSite",
  },

   {
      teamName: "Nishant's site",
      //give the username and repository name where you have posted your project
      username: "Nishant50",
      reponame: "summerhacks-myPortfolio",
  },

   {
      teamName: "PLAY_WITH_BITS",
      //give the username and repository name where you have posted your project
      username: "sambitraj",
      reponame: "COLLEGE-WEB",
  },
  {
      teamName: "ExcessiveMedia",
      //give the username and repository name where you have posted your project
      username: "sanskar85",
      reponame: "summerhacks-excessiveMedia",

  },
     { 
       teamName: "OrangeDawn",
       username: " Aditi-Trishna",
       reponame: "summerhacks-OrangeDawn",
  },

    {
      teamName: "coding comrades",
      //give the username and repository name where you have posted your project
      username: "RohanHarichandan",
      reponame: "Summer-Hacks",
  },
    {
      teamName: "Sushant",
      //give the username and repository name where you have posted your project
      username: "Sushant258",
      reponame: "summerhacks-myPortfolio",
  }
];

//------------------------WARNING---------------------------//
//---------------------------------------------------------//
//DON'T CHANGE AFTER THIS LINE
//---------------------------------------------------------//

function projectTemplate(project) {
  return `
  <div class="project">
  
  <img class="project-photo" src="https://github-readme-stats.vercel.app/api/pin/?username=${project.username}&repo=${project.reponame}&theme=highcontrast&show_icons=true&layout=compact">

  <a href="https://github.com/${project.username}/${project.reponame}"><h2 class="project-name">${project.reponame}</h2></a>
  <span class="team-name">(${project.teamName})</span>
  <img class="project-commit" src="https://img.shields.io/github/last-commit/${project.username}/${project.reponame}?style=for-the-badge">

  <img class="project-star" src="https://img.shields.io/github/stars/${project.username}/${project.reponame}?style=social">

  </div>
`;
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">(${projectData.length} projects found)</h1>
${projectData.map(projectTemplate).join("")}
<p class="projects">These ${projectData.length} projects were added recently. Check back soon for updates.</p>
`;
