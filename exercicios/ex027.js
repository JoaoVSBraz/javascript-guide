function restOfYourLifeTime(age) {
    //1 year == 365 days
    //1 year == 52 weeks
    //1 year == 12 months

    let days, weeks, months

    days = (90 - age) * 365
    weeks = (90 - age) * 52
    months = (90 - age) * 12

    console.log(`You have ${days} days, ${weeks} weeks and ${months} months left`)
}

restOfYourLifeTime(23)

// Constructed based on this article: https://waitbutwhy.com/2014/05/life-weeks.html