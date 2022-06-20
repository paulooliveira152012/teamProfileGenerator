//function to generate the team HTML
const createTeam = (member) => {
    //generating Manager template
    const newManager = (manager) => {
        return `
        <div class="container">
             <div class="box">
                    <h2 class="title">Name: ${manager.getName()}</h2>
                    <h2 class="title">Role: ${manager.getRole()}</h2>
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
                    <h2 class="title">Name: ${engineer.getName()}</h2>
                    <h2 class="title">Role: ${engineer.getRole()}</h2>
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
                    <h2 class="title">Name: ${intern.getName()}</h2>
                    <h2 class="title">Role: ${intern.getRole()}</h2>
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

    file.push(member.filter((teamMember) => teamMember.getRole() === "Engineer")
        .map((engineer) => newEngineer(engineer))
    )

    file.push(member.filter((teamMember) => teamMember.getRole() === "Intern")
        .map((intern) => newIntern(intern))
    )

    file.push(member.filter((teamMember) => teamMember.getRole() === "Manager")
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
    <link rel="stylesheet" href="../src/style.css">
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