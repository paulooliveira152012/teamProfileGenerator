
// //function to generate markdown for html file
// function generateMarkdown(data) {
//     return `# ${data.title}
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="../src/style.css">
//     <title>Team Members</title>
// </head>
// <body>
// <header>
//         <h1>List of staff members</h1>
//     </header>
//     <main>
//         <h2>Below you will find the newest team members and thei's profiles</h2>

// const Employee = require("../lib/Employee");
// const Engineer = require("../lib/Engineer");

//         <div class="container">
//             <div class="box">
//                 <ul>
//                     <p>Name: ${data.name}</p>
//                     <p>id: ${data.id}</p>
//                     <p>e-mail:${data.email}</p>
//                     <p>Title:${data.choice}</p>
//                     <p>office Number:${data.officeNumber}</p> 
//                 </ul>
//             </div>
//         </div>
//     </main>
//     <footer>
//     </footer>
// </body>
// </html>`
// }

// //exporting generateMarkdown
// module.exports = generateMarkdown;

//function to generate the team HTML
const createTeam = (member) => {
    //generating Manager template
    const newManager = (manager) => {
        return `
        <div class="container">
             <div class="box">
                    <h2 class="title">${manager.getName()}</h2>
                    <h2 class="title">${manager.getRole()}</h2>
                 <ul>
                    <p>id: ${manager.getId()}</p>
                     <p>e-mail:${manager.getEmail()}</p>
                     <p>office Number:${manager.getOfficeNumber()}</p> 
                 </ul>
             </div>
            </div>
        `
    };

    //generating Engineer template
    const newEngineer = (engineer) => {
        return `
        <div class="container">
             <div class="box">
                    <h2 class="title">${engineer.getName()}</h2>
                    <h2 class="title">${engineer.getRole()}</h2>
                 <ul>
                    <p>id: ${engineer.getId()}</p>
                     <p>e-mail:${engineer.getEmail()}</p>
                     <p>office Number:${engineer.getGithub()}</p> 
                 </ul>
             </div>
            </div>
        `
    };

      //generating Engineer template
      const newIntern = (intern) => {
        return `
        <div class="container">
             <div class="box">
                    <h2 class="title">${intern.getName()}</h2>
                    <h2 class="title">${intern.getRole()}</h2>
                 <ul>
                    <p>id: ${intern.getId()}</p>
                     <p>e-mail:${intern.getEmail()}</p>
                     <p>office Number:${intern.getSchool()}</p> 
                 </ul>
             </div>
            </div>
        `
    };

    const file = []

    file.push(member
        .filter((teamMember) => teamMember.getRole() === "Engineer")
        .map((engineer) => newEngineer(engineer))
    )

    file.push(member
        .filter((teamMember) => teamMember.getRole() === "Intern")
        .map((intern) => newIntern(intern))
    )

    file.push(member
        .filter((teamMember) => teamMember.getRole() === "Manager")
        .map((manager) => newManager(manager))
    )

    return file.join("")
};

  // export function to generate entire page
  module.exports = (member) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <h1>Crew</h1>
    </header>
    <main>
    <div class="container">
    ${createTeam(member)}
    </div>
</main>
</body>
</html>
      `;
  };