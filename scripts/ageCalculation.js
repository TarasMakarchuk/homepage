const myBirthday = {
    date: '19820319',
    format: 'years'
}
document.getElementById("my_age")
    .innerText = moment()
    .diff(myBirthday.date, myBirthday.format);
