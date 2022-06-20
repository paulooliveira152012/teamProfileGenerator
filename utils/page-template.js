
//function to generate markdown for html file
function generateMarkdown(data) {
    return `# ${data.title}
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/style.css">
    <title>Team Members</title>
</head>
<body>
<header>
        <h1>List of staff members</h1>
    </header>
    <main>
        <h2>Below you will find the newest team members and thei's profiles</h2>

        <div class="container">
            <div class="box">
                <ul>
                    <p>Name: ${data.name}</p>
                    <p>id: ${data.id}</p>
                    <p>e-mail:${data.email}</p>
                    <p>Title:${data.choice}</p>
                    <p>office Number:${data.officeNumber}</p> 
                </ul>
            </div>
        </div>
    </main>
    <footer>
    </footer>
</body>
</html>`
}

//exporting generateMarkdown
module.exports = generateMarkdown;