const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i ++)
console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)

//add event listener to redirect to homepage

document.addEventListener('click', function(evt){
    if(evt.target.closest('.clickMe')) {
        return window.location.assign("./home.html")
    }
})

document.addEventListener('click', function(evt){
    if(evt.target.closest('.portfolioLink')) {
        console.log('clicked')
        return window.location.assign('./projects.html')
    }
})

document.addEventListener('click', function(evt){
    if(evt.target.closest('.contactLink')) {
        console.log('clicked')
        return window.location.assign('./contactMe.html')
    }
})

document.addEventListener('click', function(evt) {
    if(evt.target.closest('.homeLink')) {
        return window.location.assign('./home.html')
    }
})