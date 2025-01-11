inpTea = document.querySelector('.tea')
inpCoffee = document.querySelector('.coffee')
inpCookie = document.querySelector('.cookie')
btn = document.querySelector('.btn')
sum = document.querySelector ('.sum')


btn.addEventListener ('click', (ev) => {

    if (inpTea.checked ) {
        sum.innerHTML = "до сплати: 10 грн."
    }
    if (inpCoffee.checked ) {
        sum.innerHTML = "до сплати: 15 грн."
    }
    if (inpCookie.checked ) {
        sum.innerHTML = "до сплати: 5 грн."
    }
    if (inpTea.checked && inpCoffee.checked) {
        sum.innerHTML = "до сплати: 25 грн."
    }
    if (inpCookie.checked && inpCoffee.checked) {
        sum.innerHTML = "до сплати: 20 грн."
    }
    if (inpCookie.checked && inpTea.checked) {
        sum.innerHTML = "до сплати: 15 грн."
    }
    if (inpTea.checked && inpCoffee.checked && inpCookie.checked) {
        sum.innerHTML = "до сплати: 30 грн."
    }
    if (!inpTea.checked && !inpCoffee.checked && !inpCookie.checked) {
        sum.innerHTML = "ви нічого не обрали"
    }
})






