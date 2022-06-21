
// Code for restricting direct access to pass-and-play.html
// restrictDirectPageAccess = document.referrer;    

// if (restrictDirectPageAccess == "https://ludon.ml/") {
// } else {
//     window.location.href = "https://ludon.ml/";
// };

// Vertical align

usedHeight = document.querySelector('body > section').getBoundingClientRect().height;
totalHeight = window.innerHeight;
if(totalHeight > usedHeight) {
    availHeight = (totalHeight - usedHeight)/2;
    $('body > section').css({
        marginTop: availHeight + 'px',
        marginBottom: availHeight + 'px'
    });
}

//Assings link to start button

if(location.pathname != '/computer.html') {
    $('body > section > button').click(function(){
        window.location.href = '/game-area.html'
    });
}

// Choose a mode
sessionStorage.setItem('game-option','onevs1');

$('.game-type-options').click(function(event){

    if(event.target.id == 'onevs1') {

        //Code for changing color on click
        $('#onevs2').removeClass('imode');
        $('#onevs3').removeClass('imode');
        $('#onevs1').addClass('imode');

        //Code for changing player name content
        $('#onevs1-player-names').css('display', '');
        $('#onevs2-player-names').css('display', 'none');
        $('#onevs3-player-names').css('display', 'none');

        //Saves selected game option
        sessionStorage.setItem('game-option','onevs1');

    } else if(event.target.id == 'onevs2') {

        //Code for changing color on click
        $('#onevs1').removeClass('imode');
        $('#onevs3').removeClass('imode');
        $('#onevs2').addClass('imode');

        //Code for changing player name content
        $('#onevs2-player-names').css('display', '');
        $('#onevs1-player-names').css('display', 'none');
        $('#onevs3-player-names').css('display', 'none');

        //Saves selected game option
        sessionStorage.setItem('game-option','onevs2');

    } else {

        //Code for changing color on click
        $('#onevs1').removeClass('imode');
        $('#onevs2').removeClass('imode');
        $('#onevs3').addClass('imode');

        //Code for changing player name content
        $('#onevs3-player-names').css('display', '');
        $('#onevs2-player-names').css('display', 'none');
        $('#onevs1-player-names').css('display', 'none');

        //Saves selected game option
        sessionStorage.setItem('game-option','onevs3');

    }

});

//Code starts for onevs1 game option

//Code for changing background color of horse combination div based on click [Onevs1]

sessionStorage.setItem('onevs1Horse1','red');
sessionStorage.setItem('onevs1Horse2','green');

document.querySelector('#onevs1-player-names > div:first-of-type').addEventListener('click', function(){
    $('#onevs1-player-names > div:first-of-type > div > input').removeAttr('disabled');
    $('#onevs1-player-names > div:first-of-type').css('background-color', 'aquamarine');
    $('#onevs1-player-names > div:nth-of-type(2)').css('background-color', '');
    //Code for saving onevs1 player names
    sessionStorage.setItem('onevs1Horse1','red');
    sessionStorage.setItem('onevs1Horse2','green');

    //Code for computer horse selction
    sessionStorage.setItem('onevs1SCH', 1);
    sessionStorage.setItem('onevs1SCHC', 'red');
    $('.onevs1C1').css('background-color', 'burlywood');
}, true);

document.querySelector('#onevs1-player-names > div:nth-of-type(2)').addEventListener('click', function(){
    $('#onevs1-player-names > div:nth-of-type(2) > div > input').removeAttr('disabled');
    $('#onevs1-player-names > div:nth-of-type(2)').css('background-color', 'aquamarine');
    $('#onevs1-player-names > div:first-of-type').css('background-color', '');
    //Code for saving onevs1 player names
    sessionStorage.setItem('onevs1Horse1','blue');
    sessionStorage.setItem('onevs1Horse2','yellow');

    //Code for computer horse selction
    sessionStorage.setItem('onevs1SCH', 2);
    sessionStorage.setItem('onevs1SCHC', 'blue');
    $('.onevs1C3').css('background-color', 'burlywood');
}, true);

//Code for saving player names

sessionStorage.setItem('onevs1Player1RName', 'Player 1');
sessionStorage.setItem('onevs1Player1BName', 'Player 1');
sessionStorage.setItem('onevs1Player2YName', 'Player 2');
sessionStorage.setItem('onevs1Player2GName', 'Player 2');

$('#onevs1-player-names input').keyup(function(){

    onevs1Player1RName = $('#onevs1-p1-rname').val();
    onevs1Player2GName = $('#onevs1-p2-gname').val();
    onevs1Player1BName = $('#onevs1-p1-bname').val();
    onevs1Player2YName = $('#onevs1-p2-yname').val();

    sessionStorage.setItem('onevs1Player1RName', onevs1Player1RName);
    sessionStorage.setItem('onevs1Player1BName', onevs1Player1BName);
    sessionStorage.setItem('onevs1Player2YName', onevs1Player2YName);
    sessionStorage.setItem('onevs1Player2GName', onevs1Player2GName);

});


//Code starts for onevs2 game option

//Code for resetting the selected player horses 

sessionStorage.setItem('onevs2Player1', undefined);
sessionStorage.setItem('onevs2Player2', undefined);
sessionStorage.setItem('onevs2Player3', undefined);

//Code for picking one horse for each player from the list of 4 [onevs2]

sessionStorage.setItem('onevs2Player1', 1);
sessionStorage.setItem('gameParticipants1', '.r57');
sessionStorage.setItem('onevs2Player2', 2);
sessionStorage.setItem('gameParticipants2', '.b57');
sessionStorage.setItem('onevs2Player3', 3);
sessionStorage.setItem('gameParticipants3', '.g57');
sessionStorage.setItem('onevs2NotSelectedPlayer', 4);

$('#onevs2-player-names > div > div > img').click(function(event){
    $(event.target).css('opacity', '1');
    console.log(event);

    onevs2Helper = []; //Used in selected other 3 horses excluding the clicked one
    onevs2Helper2 = 1; //Used in finding the nth of type number for images
    siblings = $('#' + event.target.id).siblings(); //Selects siblings of selected horse inside a div

    if(event.target.id == `onevs2${event.target.className}1`) {

        onevs2Helper = [2,3];

    } else if (event.target.id == `onevs2${event.target.className}2`) {

        onevs2Helper = [1,3];

    } else if (event.target.id == `onevs2${event.target.className}3`) {

        onevs2Helper = [1,2];

    }

    if(event.target.className == 'r') {
        onevs2Helper2 = 1;
    } else if(event.target.className == 'b') {
        onevs2Helper2 = 2;
    } else if(event.target.className == 'y') {
        onevs2Helper2 = 3;
    } else if(event.target.className == 'g') {
        onevs2Helper2 = 4;
    }

    for(let i =1; i<onevs2Helper.length; i++) {
        if($(`#${event.target.id}`).css('opacity') == 1) {

            $(`#onevs2-player-names > div:nth-of-type(${onevs2Helper[0]}) > div > img:nth-of-type(${onevs2Helper2})`).css('opacity', 0.4);
            $(`#onevs2-player-names > div:nth-of-type(${onevs2Helper[1]}) > div > img:nth-of-type(${onevs2Helper2})`).css('opacity', 0.4);

            $('#' + siblings[0].id).css('opacity',0.4);
            $('#' + siblings[1].id).css('opacity',0.4);
            $('#' + siblings[2].id).css('opacity',0.4);
    
        }
    }

    //Code for saving the selected player horse
    if(event.target.id == 'onevs2r1') {
        sessionStorage.setItem('onevs2Player1', 1);
        sessionStorage.setItem('gameParticipants1', '.r57');
    } else if(event.target.id == 'onevs2b1') {
        sessionStorage.setItem('onevs2Player1', 2);
        sessionStorage.setItem('gameParticipants1', '.b57');
    } else if(event.target.id == 'onevs2y1') {
        sessionStorage.setItem('onevs2Player1', 3);
        sessionStorage.setItem('gameParticipants1', '.y57');
    } else if(event.target.id == 'onevs2g1') {
        sessionStorage.setItem('onevs2Player1', 4);
        sessionStorage.setItem('gameParticipants1', '.g57');
    } else if(event.target.id == 'onevs2r2') {
        sessionStorage.setItem('onevs2Player2', 1);
        sessionStorage.setItem('gameParticipants2', '.r57');
    } else if(event.target.id == 'onevs2b2') {
        sessionStorage.setItem('onevs2Player2', 2);
        sessionStorage.setItem('gameParticipants2', '.b57');
    } else if(event.target.id == 'onevs2y2') {
        sessionStorage.setItem('onevs2Player2', 3);
        sessionStorage.setItem('gameParticipants2', '.y57');
    } else if(event.target.id == 'onevs2g2') {
        sessionStorage.setItem('onevs2Player2', 4);
        sessionStorage.setItem('gameParticipants2', '.g57');
    } else if(event.target.id == 'onevs2r3') {
        sessionStorage.setItem('onevs2Player3', 1);
        sessionStorage.setItem('gameParticipants3', '.r57');
    } else if(event.target.id == 'onevs2b3') {
        sessionStorage.setItem('onevs2Player3', 2);
        sessionStorage.setItem('gameParticipants3', '.b57');
    } else if(event.target.id == 'onevs2y3') {
        sessionStorage.setItem('onevs2Player3', 3);
        sessionStorage.setItem('gameParticipants3', '.y57');
    } else if(event.target.id == 'onevs2g3') {
        sessionStorage.setItem('onevs2Player3', 4);
        sessionStorage.setItem('gameParticipants3', '.g57');
    }

    //Code for finding the not selected horse
    if(sessionStorage.getItem('onevs2Player1') != 1 
    && sessionStorage.getItem('onevs2Player2') != 1 
    && sessionStorage.getItem('onevs2Player3') != 1) {
        sessionStorage.setItem('onevs2NotSelectedPlayer', 1);
    } else if(sessionStorage.getItem('onevs2Player1') != 2 
    && sessionStorage.getItem('onevs2Player2') != 2 
    && sessionStorage.getItem('onevs2Player3') != 2) {
        sessionStorage.setItem('onevs2NotSelectedPlayer', 2);
    } else if(sessionStorage.getItem('onevs2Player1') != 3 
    && sessionStorage.getItem('onevs2Player2') != 3 
    && sessionStorage.getItem('onevs2Player3') != 3) {
        sessionStorage.setItem('onevs2NotSelectedPlayer', 3);
    } else if(sessionStorage.getItem('onevs2Player1') != 4 
    && sessionStorage.getItem('onevs2Player2') != 4 
    && sessionStorage.getItem('onevs2Player3') != 4) {
        sessionStorage.setItem('onevs2NotSelectedPlayer', 4);
    }

    //Code for finding the selected computer horses
    if($('.onevs2C1').css('background-color') == 'burlywood') {
        sessionStorage.setItem('onevs2SCH1', sessionStorage.getItem('onevs2Player1'));
    } 
    if($('.onevs2C2').css('background-color') == 'burlywood') {
        sessionStorage.setItem('onevs2SCH2', sessionStorage.getItem('onevs2Player2'));
    } 
    if($('.onevs2C3').css('background-color') == 'burlywood') {
        sessionStorage.setItem('onevs2SCH3', sessionStorage.getItem('onevs2Player3'));
    }

});

sessionStorage.setItem('onevs2Player1Name', 'Player 1');
sessionStorage.setItem('onevs2Player2Name', 'Player 2');
sessionStorage.setItem('onevs2Player3Name', 'Player 3');

//Code for saving player names
$('#onevs2-player-names input').keyup(function(){

    onevs2Player1Name = $('#onevs2-p1-name').val();
    onevs2Player2Name = $('#onevs2-p2-name').val();
    onevs2Player3Name = $('#onevs2-p3-name').val();

    sessionStorage.setItem('onevs2Player1Name', onevs2Player1Name);
    sessionStorage.setItem('onevs2Player2Name', onevs2Player2Name);
    sessionStorage.setItem('onevs2Player3Name', onevs2Player3Name);

});

//Code starts for onevs3 game option

sessionStorage.setItem('onevs3Player1Name', 'Player 1');
sessionStorage.setItem('onevs3Player2Name', 'Player 2');
sessionStorage.setItem('onevs3Player3Name', 'Player 3');
sessionStorage.setItem('onevs3Player4Name', 'Player 4');

//Code for saving player names
$('#onevs3-player-names input').keyup(function(){

    onevs3Player1Name = $('#onevs3-p1-name').val();
    onevs3Player2Name = $('#onevs3-p2-name').val();
    onevs3Player3Name = $('#onevs3-p3-name').val();
    onevs3Player4Name = $('#onevs3-p4-name').val();

    sessionStorage.setItem('onevs3Player1Name', onevs3Player1Name);
    sessionStorage.setItem('onevs3Player2Name', onevs3Player2Name);
    sessionStorage.setItem('onevs3Player3Name', onevs3Player3Name);
    sessionStorage.setItem('onevs3Player4Name', onevs3Player4Name);

});