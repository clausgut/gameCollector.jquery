$(document).ready(() => {

    //program generates a random number between 195 to 250
    let randNumber = Math.floor(Math.random() * ((250 - 195) + 1) + 195);
    $('#randNum').html(randNumber);

    //each crystal has a hidden value i.e. random number between 1 and 20
    let aventurine = Math.floor(Math.random() * 20) + 1;
    let citrine = Math.floor(Math.random() * 20) + 1;
    let rose = Math.floor(Math.random() * 20) + 1;
    let charoite = Math.floor(Math.random() * 20) + 1;

    //player clicks the crystals to display value to totScore
    let wins = 0; //#wins
    let losses = 0;  //#losses

    let totScore = 0;
    $('#totScore').text(totScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset();
    }

    $('#aventurine').click(() => {
        totScore = totScore + aventurine;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#citrine').click(() => {
        totScore = totScore + citrine;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#rose').click(() => {
        totScore = totScore + rose;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#charoite').click(() => {
        totScore = totScore + charoite;
        $('#totScore').text(totScore);
        if (totScore === randNumber) {
            win();
            reset();
            resetTwo();
        } else if (totScore > randNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    //random numbers (jewels) get added together: look above
    //game restarst
    function reset() {
        totScore = 0;
        $('#totScore').text(totScore);
    }

    function resetTwo() {
        randNumber = Math.floor(Math.random() * ((250 - 195) + 1) + 195);
        $('#randNum').html(randNumber);
        aventurine = Math.floor(Math.random() * 20) + 1;
        citrine = Math.floor(Math.random() * 20) + 1;
        rose = Math.floor(Math.random() * 20) + 1;
        charoite = Math.floor(Math.random() * 20) + 1;
        
    }
});