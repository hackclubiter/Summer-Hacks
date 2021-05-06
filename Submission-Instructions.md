***We assume that you've watched our Introduction to Git and GitHub workshop 1 & 2, to get some basic idea about GitHub***
If you have not, [click here](https://youtube.com/playlist?list=PLRvRFwecx9uDTYw2AU4vNsSrYHlQu_Z1H) to watch it first.

---


### What should be the name of your Repository?

Your Submission Repository should be **Public** and the name should be in this format:

```
summerhacks-YourTeamname
```

---

### How to Create the Documentation for your project?

You have to use the [README.md](https://www.makeareadme.com/#template-1) file.
Click on the hyperlink to learn more about markdown file format.

Your Project Documentation should contain:
```
      Name of the Project
      
      Table of Contents
      
      About
      
      Inspirations
            
      Installation Instructions
      
      What you learned (languages and tech tools)
      
      Challenges you faced
      
      Accomplishments you are proud of
      
      Future Improvements
      
      Team Members
      
      Live Demo Link (Deployed website link)
```

---
### Watch this video to learn more about the project template:
<a href="https://youtu.be/eaBsNOhczRE"><img src="https://user-images.githubusercontent.com/39031660/117314046-09f73e80-aea4-11eb-83d9-855356886a1f.png"></a>

### Detailed description:

In order to go ahead with your project proceedings you need to follow some basic steps, which are listed below: 
- Visit the official github site of SOA CODE ROOM [github.com/soacoderoom](https://github.com/soacoderoom)
- Then switch and select the **[summerhacks-projectName](https://github.com/SOACodeRoom/summerhacks-projectName)** repository
- <img src="https://user-images.githubusercontent.com/39031660/117314946-de288880-aea4-11eb-8d3b-27db4348d233.png" width=400>
      Click on the “Use this template” option, and this will lead to the creation of a clone  in your account.
- Proceed by naming your project in the mentioned format:  summerhacks-(your project name); 
E.g. `summerhacks-myPortfolioName`
- Add a small description about your project at the description check box. 
At the end of addition, select the checkbox that mentions SELECT ALL BRANCHES. 
- Click on the CREATE REPOSITORY FROM TEMPLATE, and your repository will be created.
- Once done, you will get access to the different files of html, css, javascript,etc. You have to modify the inputs according to your requirement. But make sure to save the particular files under particular files. 


```
index.html -> you must have deployed your index.html
./css/style.css -> you should have a css folder where your css files would be there
./js/script.js -> you should have a js folder where your js files would be there (JS= JavaScript)
```

---

### Adding your project to the Summer Hacks'21 Portal

- In order to qualify for judging, you need to add your project to the Summer Hacks Portal.
- To add the project follow the following steps:
- Go to `./js/data.js` [here](https://github.com/SOACodeRoom/Summer-Hacks/blob/main/js/data.js)
- Add your details:
- `teamname` : The name of the team. If you are alone. then you can simply give your name.
- `username` : Give the **username** of GitHub's repository where you have uploaded your project
- You must add your details under
```javascript
const projectData = [
      {
            teamName: "SOA Code Room",
            //give the username and repository name where you have posted your project
            username: "soacoderoom",
            reponame: "summer-hacks",
      },
];
```
- Copy the following code and add it. Make sure to do the changes from your side with your details before `];` of `const projectData`
```javascript
      {
            teamName: "SOA Code Room",
            //give the username and repository name where you have posted your project
            username: "soacoderoom",
            reponame: "summer-hacks",
      },
```
                
### Judging Criteria

We are making this hackathon comletely using GitHub. So our judging criteria will be based on the **maximum stars** given to a repo by fellow participants. After that the organizers will review for final decisions.

After you star a repo, it should look like this:

![image](https://user-images.githubusercontent.com/53336715/116803955-ed3bbf00-aacf-11eb-9f1f-e807daf4d41b.png)

---

### Still have any questions?
Then ask us in our Telegram group.
