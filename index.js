//Codecademy Mixed Messages Portfolio Project - JavaScript - Death Predictor

const predMess = {
    "deathWhen": ['Today, ', 'Tomorrow, ', 'Sometime next week, ', 'Sometime next month, ', 'In 6 months, ', 'In a year, ', 
        'In 5 years, ', 'In 10 years, ', 'In 20 years, ', 'In 50 years, ' ],

    "deathHow": ["you'll die from heart disease ", "you'll die due to cancer ", "you're going to have a fatal accident ",
        "a chronic lower repiratory disease will kill you ", "you'll have a stroke ", "Alzheimer's disease will kill you ", 
        "diabetes is going to kill you ", "you're going to get the flu and pneumonia will kill you ", "you are going to die from kidney disease ",
        "you will take the easy way out and commit suicide ", "septicemia will get you ", "chronic liver disease will be your demise "],
    
        "deathWhere": ['at home.', 'in a hospital.', 'in hospice.', 'in a nursing home because your family hates you.', 
        'at the beach, lucky.', 'in a car.', 'on a rollercoaster.', 'in an airplane.']
};

console.log('Ready to die?');
console.log("I'm here to tell you when, how, and where you will meet the reaper!");
const createPred = () => {
    let firstDeathWhenMsg = predMess.deathWhen[Math.floor(Math.random() * predMess.deathWhen.length)];
    let secondDeathHowMsg = predMess.deathHow[Math.floor(Math.random() * predMess.deathHow.length)];
    let thirdDeathWhereMsg = predMess.deathWhere[Math.floor(Math.random() * predMess.deathWhere.length)];
    return `${firstDeathWhenMsg}${secondDeathHowMsg}${thirdDeathWhereMsg}`;
};

const genMess = (userName) => {
    return {
        name: userName,
        messageGen: function() {
            console.log(`${userName}, best get your affairs in order. Time to meet the reaper.`)
        setTimeout(() => {
            console.log(createPred());
            } ,1000);
        }
    }
}

let userOne = genMess('Deena');
userOne.messageGen();