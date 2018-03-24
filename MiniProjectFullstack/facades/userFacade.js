function userCreate(firstName, lastName, userName, password, jobsArray) {
    var jobs = [];
    for (var i = 0; i < jobsArray.length; i++) {
        jobs.push({
            type: jobsArray[i].type,
            company: jobsArray[i].company,
            companyURL: jobsArray[i].companyURL
        });
    }
    var user = { firstName, lastName, userName, password, job: jobs };
    var u = new User(user);
    return u.save();
}