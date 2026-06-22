let mydate = new Date()//current date and time
console.log(mydate)

console.log(mydate.toString())
console.log(mydate.toDateString())//shows only date
console.log(mydate.toTimeString())//shows only time

console.log(mydate.toLocaleString())//shows date and time in local format
console.log(mydate.toLocaleDateString())//shows date in local format
console.log(mydate.toLocaleTimeString())//shows time in local format

console.log(typeof mydate)

console.log(new Date(2025, 0 ,30 ,2, 3))//year, month (0-11), date, hours, minutes. here month is 0 because month starts from 0 and 0 is january
console.log(new Date("2025-01-30T02:03:00"))//ISO format. here month is 1 because month starts from 0 and 1 is january

console.log(Date.now())//it returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

console.log(Math.floor(Date.now()/1000))//it returns the number of seconds since January 1, 1970, 00:00:00 UTC
console.log(mydate.getTime())//returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(mydate.getMonth()+1)//month starts from 0 so we add 1 to get the correct month
console.log(mydate.getDate())
console.log(mydate.getDay())
console.log(mydate.getFullYear())
console.log(mydate.getHours())
console.log(mydate.getMinutes())
console.log(mydate.getSeconds())
console.log(mydate.toLocaleString("default", {weekday: "long"}))//it returns the day of the week in long format 

console.log(mydate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}));