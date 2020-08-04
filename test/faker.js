const faker = require('faker');
const { random } = require('faker');

let space = '\n';


function getUser() {
    let randomName = faker.name.findName();
    let randomEmail = faker.internet.email();
    let randomNumber = faker.phone.phoneNumber();
    let randomSalary = faker.finance.amount();

    console.log('-----------------------');
    console.log('Name', randomName);
    console.log('-----------------------');
    console.log('Email', randomEmail);
    console.log('-----------------------');
    console.log('Number', randomNumber);
    console.log('-----------------------');
    console.log('Salary', randomSalary);
    console.log('-----------------------');
    console.log(space);
    console.log('-----------------------');

}

function getMany(){
    for (i = 0; i < 8; i++) {
        getUser();
    }
}

getMany();