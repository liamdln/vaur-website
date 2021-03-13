/* Grab stats from VAMSYS */

$(document).ready(function() {

    $.formatTime = function(time) {
        var timeArr = time.split(":");
        var hour = timeArr[0];
        var mins = timeArr[1];
        //return hour + ":" + mins;
        return hour;
    }

    $.ajax({
        type: 'GET',
        url: 'https://vamsys.io/statistics/65802ff8-890e-4af2-af2e-8b6e6e2dd93c',
        success: function(stats) {
            $('#pilots').text(stats["pilots"]);
            $('#hours-flown').text($.formatTime(stats["flight_time_time"]));
            $('#routes').text(stats["routes"]);
            $('#destinations').text(stats["airports"]);
        }
    })

});
