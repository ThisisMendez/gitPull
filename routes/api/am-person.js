// copy this file and rename it <initial>-person.js
// Add the get route to get the people from the People model
// add the post route that will take a firstName and lastName from the body
// this code should NOT be on master and should be done on a branch
// push this branch to github ‘git push -u <remote> <branch>’
// this branch needs to be merged to master. I can’t stop you from using git merge however this excersise is to practice pull requests. To complete this correctly merge the branch to master using the pull request system on your own repo
// Lastly figure out how to submit a pull request of your master to my master on github

const router = require('express'); 
let Person = require('../models/Person');

router.('/').get((req, res) => {
    Person.find()
        .then(person -> res.json(person))
        .catch(err => res.status(400).json('Error: ' + err)); 
})

router.('/').post((req, res) => {
    const firstname = req.body.firstName;
    const lastname = req.body.lastName; 

    const newPerson = new Person({ 
        firstname, 
        lastname, 
    })

    newPerson.save()
        .then(() => res.json('Person added!'))
        .catch(err -> res.status(400).json('Error: ' + err))
});
