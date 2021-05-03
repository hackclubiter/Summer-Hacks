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

### How to upload your files to your Repo?

Either you can use Git tool to push your files onto GitHub from the terminal, otherwise you can simply drag and drop all your files onto your Repository initialized with a README.md file.

![image](https://user-images.githubusercontent.com/53336715/116804149-64258780-aad1-11eb-8d76-af5c5b792be0.png)

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
