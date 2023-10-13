


//for time 
setInterval(showtime, 1000)
function showtime() {
    let currentDate = new Date();
    // let currenttime = (addzero(currentDate.getHours() % 12) + ":" + addzero(currentDate.getMinutes()) + ":" + addzero(currentDate.getSeconds()))7
    let currenttime = (addzero(currentDate.getHours() % 12) + ":" + addzero(currentDate.getMinutes()) + ":" + addzero(currentDate.getSeconds()))

    // let currenttime = [currentDate.toLocaleTimeString()]

    let currentday = addzero(currentDate.getDate());
    let time = document.querySelector('.time')

    time.innerHTML = currenttime;

    //for day
    let day = document.querySelector('.day')
    day.innerHTML = currentday;
    //for day name
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentdayname = dayNames[currentDate.getDay()]

    let weekname = document.querySelector('.weekday')

    weekname.innerHTML = currentdayname;



    //for month name
    const montharr = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let monthname = montharr[currentDate.getMonth() + 1]
    let month = document.querySelector('.month')
    month.innerHTML = monthname;




    //for year

    let year = document.querySelector('.year')
    let currentyear = currentDate.getFullYear()
    year.innerHTML = currentyear
}



function addzero(num) {
    return num < 10 ? `0${num}` : num
}


