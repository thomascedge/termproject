var tweet = $("#tweet"),
    text = ["U.S House Speaker @SpeakerRyan wins re-election to Congress and thinks it could be a 'good night' for Republicans",
            "Well, at least if Trump wins, we already know Congress has the power to NOT LET HIM DO A DAMN THING DURING HIS TENURE. Your move Congress.",
            "Hillary Clinton will win, but don't celebrate: GOP control of Congress is baked in for years to come - Salon #DC",
            "Remember boys and girls. It really doesn't make a difference in the end. Hillary gets elected, Congress will...",
            "Democrats see FBI controversy hurting chances in U.S. Congress races: WASHINGTON (Reuters) - Senior... #hotnews",
            "If Hillary wins we will have the first Jewish leader in Congress. I love Jewish leaders. Just sayin.",
            "Friendly reminder we vote on more than just the president in this election; the congress does make a difference...",
            "'Your vote makes a difference' But the vote of the congress and the higher ups means a lot more",
            "1 reason I don't like Cruz is because of his obstructive action in Congress and behaving like a little lackie n vote for Trump don't help",
            "Give everyone in Congress term limits... boom. You're halfway there.",
            "Now matter how bad #Clinton is if there's enough good people in congress - if that system stays intact, her impact...",
            "@realDonaldTrump #wikileaks #PodestaEmails #pizza #draintheswamp #DrainTheMedia",
            "@BernieSanders thank you for continuing the fight! Republicans in congress have sabotaged our govt. by refusing to do their jobs.",
            "Congress to begin an investigation into the investigations conducted by the Department of Justice and FBI #MAGA",
            "#ImVotingBecause @HillaryClinton  needs a #DEM Senate, Congress to bust obstruction. #VoteAndTakeTwoWithYou #PartyOfNoMustGo #standUp2GOP",
            "DIRTY EMAILS 30,000 DELETED, U STUPID IDIOT",
            "Oh shit! Republicans control congress! We're done.",
            "Rip the senate. Even if Hillary became president, Congress deadlock would prevent her from getting anything done. Just like Obama.",
            "Will Congress block Trump?",
            "Our political system will not check or balance itself with a Republican President, Congress, and Supreme Court.",
            "I was really hoping we'd at least get more Democrats in Congress. We're just fucked :/"],
    counter = 0;;

// calls action on keypress 's'

function checkKey(e) {
    switch(e.keyCode) {
        // if keycode s, start
        case 115:
            console.log("start");

            tweet.css('visibility','visible');

            // alternates text in div
            setInterval(function (){
                tweet.empty();
                tweet.append(text[counter]);
                counter++;

                if(counter >= text.length){
                    counter = 0;
                }
            }, 5100);
            break;

        // if keycode e, end
        case 101:
            tweet.css('visibility','hidden');
            break;

        default:
            console.log(e.keyCode);
    }
}

$(document).keypress(checkKey);
