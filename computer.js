//Used to restrick computer code on other game modes
sessionStorage.setItem('computer', true);
sessionStorage.setItem('onevs1SCH', 1);
sessionStorage.setItem('onevs1SCHC', 'red');

//Removing previous session storage values
sessionStorage.setItem('onevs2SCH1', null);
sessionStorage.setItem('onevs2SCH2', null);
sessionStorage.setItem('onevs3SCH1', null);
sessionStorage.setItem('onevs3SCH2', null);
sessionStorage.setItem('onevs3SCH3', null);
sessionStorage.setItem('onevs3SCH4', null);

//Assings link to start button
$('body > section > button').click(function(){
    window.location.href = '#'
    //Code for displaying alert when no computer horse is selected;

    if(($('#onevs2').css('background-color') == 'aquamarine' || $('#onevs2').css('background-color') == 'rgb(22, 217, 80)') 
    && ($('.onevs2C1').css('background-color') != 'burlywood' && $('.onevs2C1').css('background-color') != 'rgb(222, 184, 135)') 
    && ($('.onevs2C2').css('background-color') != 'burlywood' && $('.onevs2C1').css('background-color') != 'rgb(222, 184, 135)') 
    && ($('.onevs2C3').css('background-color') != 'burlywood' && $('.onevs2C1').css('background-color') != 'rgb(222, 184, 135)')) {

        alert('Select atleast one computer horse!');

    } else if(($('#onevs3').css('background-color') == 'aquamarine' || $('#onevs3').css('background-color') == 'rgb(22, 217, 80)') 
    && ($('.onevs3C1').css('background-color') != 'burlywood' && $('.onevs3C1').css('background-color') != 'rgb(222, 184, 135)') 
    && ($('.onevs3C2').css('background-color') != 'burlywood' && $('.onevs3C1').css('background-color') != 'rgb(222, 184, 135)') 
    && ($('.onevs3C3').css('background-color') != 'burlywood' && $('.onevs3C1').css('background-color') != 'rgb(222, 184, 135)') 
    && ($('.onevs3C4').css('background-color') != 'burlywood' && $('.onevs3C4').css('background-color') != 'rgb(222, 184, 135)')) {

        alert('Select atleast one computer horse!');

    } else {
        window.location.href = '/game-area.html'
    }

    
});

//Code for Onevs1 game mode

$('.onevs1C1').click(()=>{
    $('.onevs1C1').css('background-color', 'burlywood');
    $('.onevs1C2').removeAttr('style');
    sessionStorage.setItem('onevs1SCH', 1); //onevs1SCH is Selected computer horse of onevs1
    sessionStorage.setItem('onevs1SCHC', 'red'); //onevs1SCHC is Selected computer horse color of onevs1
});

$('.onevs1C2').click(()=>{
    $('.onevs1C2').css('background-color', 'burlywood');
    $('.onevs1C1').removeAttr('style');
    sessionStorage.setItem('onevs1SCH', 4); //onevs1SCH is Selected computer horse of onevs1
    sessionStorage.setItem('onevs1SCHC', 'green'); //onevs1SCHC is Selected computer horse color of onevs1
});

$('.onevs1C3').click(()=>{
    $('.onevs1C3').css('background-color', 'burlywood');
    $('.onevs1C4').removeAttr('style');
    sessionStorage.setItem('onevs1SCH', 2); //onevs1SCH is Selected computer horse of onevs1
    sessionStorage.setItem('onevs1SCHC', 'blue'); //onevs1SCHC is Selected computer horse color of onevs1
});

$('.onevs1C4').click(()=>{
    $('.onevs1C4').css('background-color', 'burlywood');
    $('.onevs1C3').removeAttr('style');
    sessionStorage.setItem('onevs1SCH', 3); //onevs1SCH is Selected computer horse of onevs1
    sessionStorage.setItem('onevs1SCHC', 'yellow'); //onevs1SCHC is Selected computer horse color of onevs1
});

$('#onevs1-player-names > div:first-of-type').click(()=>{
    $('.onevs1C3, .onevs1C4').removeAttr('style');
});

$('#onevs1-player-names > div:nth-of-type(2)').click(()=>{
    $('.onevs1C1, .onevs1C2').removeAttr('style');
});



//Code for onevs2 computer

$('.onevs2C1').click(()=>{

    if($('.onevs2C1').css('background-color') != 'burlywood' && $('.onevs2C1').css('background-color') != 'rgb(222, 184, 135)') {

        $('.onevs2C1').css('background-color', 'burlywood');

        if($('.onevs2C2').css('background-color') == 'burlywood' || $('.onevs2C2').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs2C3').css('background-color') == 'burlywood' || $('.onevs2C3').css('background-color') == 'rgb(222, 184, 135)') {
            

            if(sessionStorage.getItem('onevs2SCH1') ==  sessionStorage.getItem('onevs2Player2')) {

                $('.onevs2C3').removeAttr('style');

            } else {

                $('.onevs2C2').removeAttr('style');
                
            }

            sessionStorage.setItem('onevs2SCH2', sessionStorage.getItem('onevs2Player1'));
        } else {

            if(sessionStorage.getItem('onevs2SCH1') == 'null' || sessionStorage.getItem('onevs2SCH1') == null) {
                sessionStorage.setItem('onevs2SCH1', sessionStorage.getItem('onevs2Player1'));
            } else {
                sessionStorage.setItem('onevs2SCH2', sessionStorage.getItem('onevs2Player1'));
            }
            

        }
    
        

    } else if($('.onevs2C1').css('background-color') == 'burlywood' || $('.onevs2C1').css('background-color') == 'rgb(222, 184, 135)') {

        $('.onevs2C1').removeAttr('style');
   
        if(sessionStorage.getItem('onevs2SCH1') == sessionStorage.getItem('onevs2Player1')) {
            sessionStorage.setItem('onevs2SCH1', null);
        } else {
            sessionStorage.setItem('onevs2SCH2', null);
        }

    }

});

$('.onevs2C2').click(()=>{

    if($('.onevs2C2').css('background-color') != 'burlywood' && $('.onevs2C2').css('background-color') != 'rgb(222, 184, 135)') {

        $('.onevs2C2').css('background-color', 'burlywood');

        if($('.onevs2C1').css('background-color') == 'burlywood' || $('.onevs2C1').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs2C3').css('background-color') == 'burlywood' || $('.onevs2C3').css('background-color') == 'rgb(222, 184, 135)') {
            

            if(sessionStorage.getItem('onevs2SCH1') ==  sessionStorage.getItem('onevs2Player1')) {

                $('.onevs2C3').removeAttr('style');

            } else {

                $('.onevs2C1').removeAttr('style');
                
            }

            sessionStorage.setItem('onevs2SCH2', sessionStorage.getItem('onevs2Player2'));
        } else {

            if(sessionStorage.getItem('onevs2SCH1') == 'null' || sessionStorage.getItem('onevs2SCH1') == null) {
                sessionStorage.setItem('onevs2SCH1', sessionStorage.getItem('onevs2Player2'));
            } else {
                sessionStorage.setItem('onevs2SCH2', sessionStorage.getItem('onevs2Player2'));
            }

        }

    } else if($('.onevs2C2').css('background-color') == 'burlywood' || $('.onevs2C2').css('background-color') == 'rgb(222, 184, 135)') {
        
        $('.onevs2C2').removeAttr('style');
   
        if(sessionStorage.getItem('onevs2SCH1') == sessionStorage.getItem('onevs2Player2')) {
            sessionStorage.setItem('onevs2SCH1', null);
        } else {
            sessionStorage.setItem('onevs2SCH2', null);
        }

    }

});

$('.onevs2C3').click(()=>{

    if($('.onevs2C3').css('background-color') != 'burlywood' && $('.onevs2C3').css('background-color') != 'rgb(222, 184, 135)') {

        $('.onevs2C3').css('background-color', 'burlywood');

        if($('.onevs2C1').css('background-color') == 'burlywood' || $('.onevs2C1').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs2C2').css('background-color') == 'burlywood' || $('.onevs2C2').css('background-color') == 'rgb(222, 184, 135)') {
            

            if(sessionStorage.getItem('onevs2SCH1') ==  sessionStorage.getItem('onevs2Player1')) {

                $('.onevs2C2').removeAttr('style');

            } else {

                $('.onevs2C1').removeAttr('style');
                
            }

            sessionStorage.setItem('onevs2SCH2', sessionStorage.getItem('onevs2Player3'));
        } else {

            if(sessionStorage.getItem('onevs2SCH1') == 'null' || sessionStorage.getItem('onevs2SCH1') == null) {
                sessionStorage.setItem('onevs2SCH1', sessionStorage.getItem('onevs2Player3'));
            } else {
                sessionStorage.setItem('onevs2SCH2', sessionStorage.getItem('onevs2Player3'));
            }

        }

    } else if($('.onevs2C3').css('background-color') == 'burlywood' || $('.onevs2C3').css('background-color') == 'rgb(222, 184, 135)') {
        
        $('.onevs2C3').removeAttr('style');
   
        if(sessionStorage.getItem('onevs2SCH1') == sessionStorage.getItem('onevs2Player3')) {
            sessionStorage.setItem('onevs2SCH1', null);
        } else {
            sessionStorage.setItem('onevs2SCH2', null);
        }

    }
     
});

//Code for onevs3 Computer

$('.onevs3C1').click(()=>{

    if($('.onevs3C1').css('background-color') != 'burlywood' && $('.onevs3C1').css('background-color') != 'rgb(222, 184, 135)') {

        $('.onevs3C1').css('background-color', 'burlywood');
        console.log('first stage');

        if($('.onevs3C2').css('background-color') == 'burlywood' || $('.onevs3C2').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C3').css('background-color') == 'burlywood' || $('.onevs3C3').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C4').css('background-color') == 'burlywood' || $('.onevs3C4').css('background-color') == 'rgb(222, 184, 135)') {
            
            if(sessionStorage.getItem('onevs3SCH3') ==  2) {
    
                $('.onevs3C2').removeAttr('style');
    
            } else if(sessionStorage.getItem('onevs3SCH3') ==  3) {
    
                $('.onevs3C3').removeAttr('style');
                
            } else if(sessionStorage.getItem('onevs3SCH3') ==  4) {
    
                $('.onevs3C4').removeAttr('style');
                
            }

            console.log('second stage');
    
            sessionStorage.setItem('onevs3SCH3', 1);

        } else {
            console.log('third stage');

            if(sessionStorage.getItem('onevs3SCH1') == 'null' || sessionStorage.getItem('onevs3SCH1') == null) {
                sessionStorage.setItem('onevs3SCH1', 1);
            } else if (sessionStorage.getItem('onevs3SCH2') == 'null' || sessionStorage.getItem('onevs3SCH2') == null) {
                sessionStorage.setItem('onevs3SCH2', 1);
            } else if (sessionStorage.getItem('onevs3SCH3') == 'null' || sessionStorage.getItem('onevs3SCH3') == null) {
                sessionStorage.setItem('onevs3SCH3', 1);
            }        
    
        }

    } else if($('.onevs3C1').css('background-color') == 'burlywood' || $('.onevs3C1').css('background-color') == 'rgb(222, 184, 135)') {
        
        $('.onevs3C1').removeAttr('style');

        console.log('fourth stage');
   
        if(sessionStorage.getItem('onevs3SCH1') == 1) {

            sessionStorage.setItem('onevs3SCH1', 'null');

        } else if(sessionStorage.getItem('onevs3SCH2') == 1) {

            sessionStorage.setItem('onevs3SCH2', 'null');

        } else if(sessionStorage.getItem('onevs3SCH3') == 1) {

            sessionStorage.setItem('onevs3SCH3', 'null');

        }
    }
});

$('.onevs3C2').click(()=>{
    
    if($('.onevs3C2').css('background-color') != 'burlywood' && $('.onevs3C2').css('background-color') != 'rgb(222, 184, 135)') {



        $('.onevs3C2').css('background-color', 'burlywood');

        if($('.onevs3C1').css('background-color') == 'burlywood' || $('.onevs3C1').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C3').css('background-color') == 'burlywood' || $('.onevs3C3').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C4').css('background-color') == 'burlywood' || $('.onevs3C4').css('background-color') == 'rgb(222, 184, 135)') {
            
    
            if(sessionStorage.getItem('onevs3SCH3') ==  1) {
    
                $('.onevs3C1').removeAttr('style');
    
            } else if(sessionStorage.getItem('onevs3SCH3') ==  3) {
    
                $('.onevs3C3').removeAttr('style');
                
            } else if(sessionStorage.getItem('onevs3SCH3') ==  4) {
    
                $('.onevs3C4').removeAttr('style');
                
            }
    
            sessionStorage.setItem('onevs3SCH3', 2);

        } else {
    
            if(sessionStorage.getItem('onevs3SCH1') == 'null' || sessionStorage.getItem('onevs3SCH1') == null) {
                sessionStorage.setItem('onevs3SCH1', 2);
            } else if (sessionStorage.getItem('onevs3SCH2') == 'null' || sessionStorage.getItem('onevs3SCH2') == null) {
                sessionStorage.setItem('onevs3SCH2', 2);
            } else if (sessionStorage.getItem('onevs3SCH3') == 'null' || sessionStorage.getItem('onevs3SCH3') == null) {
                sessionStorage.setItem('onevs3SCH3', 2);
            }  
    
        }

    } else if($('.onevs3C2').css('background-color') == 'burlywood' || $('.onevs3C2').css('background-color') == 'rgb(222, 184, 135)') {
        
        $('.onevs3C2').removeAttr('style');
   
        if(sessionStorage.getItem('onevs3SCH1') == 2) {

            sessionStorage.setItem('onevs3SCH1', 'null');

        } else if(sessionStorage.getItem('onevs3SCH2') == 2) {

            sessionStorage.setItem('onevs3SCH2', 'null');

        } else if(sessionStorage.getItem('onevs3SCH3') == 2) {

            sessionStorage.setItem('onevs3SCH3', 'null');

        }
    }
    
});

$('.onevs3C3').click(()=>{

    if($('.onevs3C3').css('background-color') != 'burlywood' && $('.onevs3C3').css('background-color') != 'rgb(222, 184, 135)') {

        $('.onevs3C3').css('background-color', 'burlywood');

        if($('.onevs3C1').css('background-color') == 'burlywood' || $('.onevs3C1').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C2').css('background-color') == 'burlywood' || $('.onevs3C2').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C4').css('background-color') == 'burlywood' || $('.onevs3C4').css('background-color') == 'rgb(222, 184, 135)') {
            
    
            if(sessionStorage.getItem('onevs3SCH3') ==  1) {
    
                $('.onevs3C1').removeAttr('style');
    
            } else if(sessionStorage.getItem('onevs3SCH3') ==  2) {
    
                $('.onevs3C2').removeAttr('style');
                
            } else if(sessionStorage.getItem('onevs3SCH3') ==  4) {
    
                $('.onevs3C4').removeAttr('style');
                
            }
    
            sessionStorage.setItem('onevs3SCH3', 3);

        } else {
    
            if(sessionStorage.getItem('onevs3SCH1') == 'null' || sessionStorage.getItem('onevs3SCH1') == null) {
                sessionStorage.setItem('onevs3SCH1', 3);
            } else if (sessionStorage.getItem('onevs3SCH2') == 'null' || sessionStorage.getItem('onevs3SCH2') == null) {
                sessionStorage.setItem('onevs3SCH2', 3);
            } else if (sessionStorage.getItem('onevs3SCH3') == 'null' || sessionStorage.getItem('onevs3SCH3') == null) {
                sessionStorage.setItem('onevs3SCH3', 3);
            }  
    
        }

    } else if($('.onevs3C3').css('background-color') == 'burlywood' || $('.onevs3C3').css('background-color') == 'rgb(222, 184, 135)') {
        
        $('.onevs3C3').removeAttr('style');
   
        if(sessionStorage.getItem('onevs3SCH1') == 3) {

            sessionStorage.setItem('onevs3SCH1', 'null');

        } else if(sessionStorage.getItem('onevs3SCH2') == 3) {

            sessionStorage.setItem('onevs3SCH2', 'null');

        } else if(sessionStorage.getItem('onevs3SCH3') == 3) {

            sessionStorage.setItem('onevs3SCH3', 'null');

        }
    }
});

$('.onevs3C4').click(()=>{

    if($('.onevs3C4').css('background-color') != 'burlywood' && $('.onevs3C4').css('background-color') != 'rgb(222, 184, 135)') {

        $('.onevs3C4').css('background-color', 'burlywood');
        console.log("First stage");

        if($('.onevs3C1').css('background-color') == 'burlywood' || $('.onevs3C1').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C2').css('background-color') == 'burlywood' || $('.onevs3C2').css('background-color') == 'rgb(222, 184, 135)' 
        && $('.onevs3C3').css('background-color') == 'burlywood' || $('.onevs3C3').css('background-color') == 'rgb(222, 184, 135)') {
            
            console.log("Second stage");
            if(sessionStorage.getItem('onevs3SCH3') ==  1) {
    
                $('.onevs3C1').removeAttr('style');
    
            } else if(sessionStorage.getItem('onevs3SCH3') ==  2) {
    
                $('.onevs3C2').removeAttr('style');
                
            } else if(sessionStorage.getItem('onevs3SCH3') ==  3) {
    
                $('.onevs3C3').removeAttr('style');
                
            }

            sessionStorage.setItem('onevs3SCH3', 4);

        } else {
    
            console.log("Third stage");
            if(sessionStorage.getItem('onevs3SCH1') == 'null' || sessionStorage.getItem('onevs3SCH1') == null) {
                sessionStorage.setItem('onevs3SCH1', 4);
            } else if (sessionStorage.getItem('onevs3SCH2') == 'null' || sessionStorage.getItem('onevs3SCH2') == null) {
                sessionStorage.setItem('onevs3SCH2', 4);
            } else if (sessionStorage.getItem('onevs3SCH3') == 'null' || sessionStorage.getItem('onevs3SCH3') == null) {
                sessionStorage.setItem('onevs3SCH3', 4);
            }  
    
        }

    } else if($('.onevs3C4').css('background-color') == 'burlywood' || $('.onevs3C4').css('background-color') == 'rgb(222, 184, 135)') {
        
        console.log("Fourth stage");
        $('.onevs3C4').removeAttr('style');
   
        if(sessionStorage.getItem('onevs3SCH1') == 4) {

            sessionStorage.setItem('onevs3SCH1', 'null');

        } else if(sessionStorage.getItem('onevs3SCH2') == 4) {

            sessionStorage.setItem('onevs3SCH2', 'null');

        } else if(sessionStorage.getItem('onevs3SCH3') == 4) {

            sessionStorage.setItem('onevs3SCH3', 'null');

        }
    }
});