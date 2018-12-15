$(document).on("pagebeforeshow", "#PlayerPage", function () {
    $.getJSON("data/JSON.json", function (data) {

        $('#players').html('');

        var totalPlayers = data.FinalProject.players.length;
        $('#players').append('<br>');
        for (x = 0; x < totalPlayers; x++) {
            $('#players').append('<li id="' + x + '"class="ui-btn ui-icon-user ui-btn-icon-left ui-corner-all ui-shadow-icon ui-btn-b">' + '<a href="#playerDetails" data-transmission-transition="slide">' + data.FinalProject.players[x].firstname + ' ' + data.FinalProject.players[x].lastname + '<a></li>');
        }

        $('#players').on('click', 'li', function () {
            var cid = Number($(this).attr('id'));
            $('#FirstName').html('First Name: ' + data.FinalProject.players[cid].firstname);
            $('#LastName').html('Last Name: ' + data.FinalProject.players[cid].lastname);
            $('#Team').html('Team: ' + data.FinalProject.players[cid].team);
            $('#Height').html('Height: ' + data.FinalProject.players[cid].stats.height);
            $('#Weight').html('Weight: ' + data.FinalProject.players[cid].stats.weight);
            $('#Swag').html('Swag: ' + data.FinalProject.players[cid].stats.swag);
            document.getElementById("Picture").src = "images/" + data.FinalProject.players[cid].stats.picture + ".jpg";


        });


    });



});
