function result() {
    let firstName = document.querySelectorAll("input")[0].value;
    console.log(firstName);
    let lastName = document.querySelectorAll("input")[1].value;
    console.log(lastName);
    let dateBirthday = document.querySelectorAll("input")[2].value;
    console.log(dateBirthday);
    let email = document.querySelectorAll("input")[3].value;
    console.log(email);
    let password = document.querySelectorAll("input")[4].value;
    console.log(password);

    if (firstName === '') {
        alert('Поле имя не заполнено')
    } else if (lastName === "") {
        alert('Поле фамилия не заполнено')
    } else if (dateBirthday === "") {
        alert('Поле дата рождения не заполнено')
    } else if (email === "") {
        alert('Поле E-mail не заполнено')
    } else if (password === "") {
        alert('Введите пароль')
    } else {
        alert(`Привет, ${firstName}!`)
    }

}