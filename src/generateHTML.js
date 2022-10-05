function generateCard(teamArray) {

    let cardArray = [];

    // create Manager card
    const generateManager = function (manager) {
        return `
            <div class="card m-3" style="width: 18rem;">
                <div class="card-body bg-primary text-light">
                    <h4 class="card-title">${manager.getName()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="#"> ${manager.getEmail()}</a></li>
                    <li class="list-group-item">${manager.getOfficeNumber()}</li>
                </ul>
            </div>
    `
    };