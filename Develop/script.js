$(document).ready(function () {

    // Returns date in the following format Month name, day of month, day of week, year, time
    var now = moment().format('LLLL');

    // Returns clock in 14hr format
    let now24 = moment().format('H'); // 12 hour clock format
   

    // Display current date
    const currentDate = $('#currentDay');
    currentDate.text(now);

    var cal = new Date(); 
    var currentHour = cal.getHours(); 


    // Saves tasks to local storage

     {
        $('.saveBtn').click(function () {
            var hr8 = document.getElementById('8').value;
			localStorage.setItem('taskFor8', hr8);
			var hr9 = document.getElementById('9').value;
			localStorage.setItem('taskFor9', hr9);
			var hr10 = document.getElementById('10').value;
			localStorage.setItem('taskFor10', hr10);
			var hr11 = document.getElementById('11').value;
			localStorage.setItem('taskFor11', hr11);
			var hr12 = document.getElementById('12').value;
			localStorage.setItem('taskFor12', hr12);
			var hr13 = document.getElementById('13').value;
			localStorage.setItem('taskFor13', hr13);
			var hr14 = document.getElementById('14').value;
			localStorage.setItem('taskFor14', hr14);
			var hr15 = document.getElementById('15').value;
			localStorage.setItem('taskFor15', hr15);
			var hr16 = document.getElementById('16').value;
			localStorage.setItem('taskFor16', hr16);
			var hr17 = document.getElementById('17').value;
			localStorage.setItem('taskFor17', hr17);
        });
     }

     // Retrieves task from local storage and display it
     var t8 = localStorage.getItem('taskFor8');
     document.getElementById('8').value = t8;
     var t9 = localStorage.getItem('taskFor9');
     document.getElementById('9').value = t9;
     var t10 = localStorage.getItem('taskFor10');
     document.getElementById('10').value = t10;
     var t11 = localStorage.getItem('taskFor11');
     document.getElementById('11').value = t11;
     var t12 = localStorage.getItem('taskFor12');
     document.getElementById('12').value = t12;
     var t13 = localStorage.getItem('taskFor13');
     document.getElementById('13').value = t13;
     var t14 = localStorage.getItem('taskFor14');
     document.getElementById('14').value = t14;
     var t15 = localStorage.getItem('taskFor15');
     document.getElementById('15').value = t15;
     var t16 = localStorage.getItem('taskFor16');
     document.getElementById('16').value = t16;
     var t17 = localStorage.getItem('taskFor17');
     document.getElementById('17').value = t17;

    //  Loops through and changes the background color of the text area or task depending on the time of day
 for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else{
            document.getElementById(i.toString()).classList.add('future');
        }
    }
});