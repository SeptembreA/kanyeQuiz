$(function() {

	// create the kanye objects
	var kanyes = {
		iceCreamKanye: {
			name: "Ice Cream Kanye",
			type: ["casual", "lowKey", "cuban", "coldplay", "adidas"],
			image: "assets/iceCream.jpg",
			fortune: "Crunchy on the outside but oh-so sweet on the inside. For you, a little solitude is a good thing though calling you an introvert would be incorrect.",
			lyric: "Ice cream paint job, somethin' like Breyers" + "<br>" +"Euro tank top, Dior inspired"
		},
		rantingKanye: {
			name: "Ranting Kanye",
			type: ["hobo", "outgoing", "godPiece", "jayZ", "nike"],
			image: "assets/ranting.jpg",
			fortune: "We’ll let you finish but... You’re aren’t afraid to let your feelings be heard. There are those who love you for it and those who don’t. There’s no inbetween with you.",
			lyric: "I hate the new Kanye, the bad mood Kanye/The always rude Kanye, spaz in the news Kanye"
		},
		daddyKanye: {
			name: "Daddy Kanye",
			type: ["casual", "lowKey", "godPiece", "paul", "combat"],
			image: "assets/daddy.jpg",
			fortune: "There’s a softer side of you that others rarely get to see but it’s only full display for the ones who know and love you, quirks and all.",
			lyric: "And I’ll never let my son have an ego/He'll be nice to everyone, wherever we go"
		},
		heartbreakKanye: {
			name: "808s and Heartbreak Kanye",
			type: ["future", "outgoing", "iced", "daftPunk", "nike"],
			image: "assets/808.jpg",
			fortune: "Of all the words that would be used to describe you wallflower is definitely not one of them. You’re completely unafraid of being seen and crave being heard.",
			lyric: "Bow in the presence of greatness/'Cause right now thou hast forsaken us/You should be honored by my lateness/That I would even show up to this fake s#$%"
		},
		collegeKanye: {
			name: "College Dropout Kanye",
			type: ["trendy", "both", "noChain", "kanyeW", "louisV"],
			image: "assets/dropout.jpg",
			fortune: "You’ve got a growth mindset and it shows. You’re not where you want to be but you’re also not ashamed of where you are.",
			lyric: "We all self conscious, I'm just the first to admit it"
		},
		yeezusKanye: {
			name: "Yeezus Kanye",
			type: ["trendy", "both", "godPiece", "kanyeW", "louisV"],
			image: "assets/yeezus.jpg",
			fortune: "You are the best at what you do and have been known to remind people how lonely it is at the top. The thing is, you’re right.",
			lyric: "I can’t let these people play me/Name one genius that ain't crazy"
		},
		amberKanye: {
			name: "Amber Rose Kanye",
			type: ["trendy", "outgoing", "iced", "jayZ", "nike"],
			image: "assets/amberRose.jpg",
			fortune: "You’re riding this life until the wheels fall off. Be easy, homie, and leave the ‘get rich or die trying’ mentality for 50 Cent.",
			lyric: "Everybody gon say something/I'd be worried if they said nothing"
		},
		kardashianKanye: {
			name: "Kanye Kardashian West Kanye",
			type: ["hobo", "lowKey", "iced", "kanyeW", "combat"],
			image: "assets/kardashian.jpg",
			fortune: "You’ve found the one that you’re willing to share the spotlight with and that can be a beautiful thing for you and nauseating for others.",
			lyric: "And I’ll admit, I had fell in love with Kim/Around the same time she had fell in love with him"
		},
		apocKanye: {
			name: "Post-Apocalyptic Kanye",
			type: ["hobo", "both", "godPiece", "daftPunk", "combat"],
			image: "assets/postapoc.jpg",
			fortune: "You’re in your own zone on an ultralight beam and it’s hard to tell if you’re preaching about the end of the world or the beginning. Either way, you’ve still got the golden touch.",
			lyric: "Screams from the haters, got a nice ring to it/I guess every superhero need his theme music/No one man should have all that power"
		},
		
		fashionKanye: {
			name: "Fashion Designer Kanye",
			type: ["trendy", "both", "iced", "jayZ", "louisV"],
			image: "assets/fashion.jpg",
			fortune: "No matter how over-the-top your outfits are there is always a trail of followers behind you. Keep doing your thing, just don’t let it all get to your head.",
			lyric: "Am I shallow ‘cause all my clothes designer?/Dressed smart like a London bloke, before he speak his suit bespoke"
		}
	}
	

	$('.quizForm').on('submit', function(e){
		e.preventDefault();

		var $quizQuestions = $('.quizQuestions');
		$quizQuestions.addClass('hide');

		var $results = $('.results');
		$results.removeClass('hide');

		// declare an array to store the user's choices
		var userChoice = [];

		// iterate over each checked input field and push the value into the userChoice array
		$("input:checked").each(function(){
			userChoice.push($(this).val());
		});

		// filter relevant kanye's based on user input 
		var kanyeFilter = [];

		// push in 
		var kanyeCount = [];

		// loop to compare kanyes vs the options the user selected
		for (var kanyeOptions in kanyes) {
			kanyeFilter = kanyes[kanyeOptions].type.filter(function(choice){
				return userChoice.indexOf(choice) >= 0;
			});
			
			// push in the properties we'll need
			kanyeCount.push({
				name: kanyeOptions,
				title: kanyes[kanyeOptions].name,
				choiceCount: kanyeFilter.length,
				image: kanyes[kanyeOptions].image,
				fortune: kanyes[kanyeOptions].fortune,
				lyric: kanyes[kanyeOptions].lyric
			});
		}

		// sort the array
		kanyeCount.sort(function(a, b) {
			    return a.choiceCount - b.choiceCount;
			});

		// store the kanye with the most matches in a variable
		var poppedKanye = kanyeCount.pop();

		
		var $yourKanye = $('.yourKanye');
		var $blurb = $('.blurb');
		var $kanyeImage = $('.kanyeImage');
		var $lyric = $('.lyric');

		// post poppedKanye to index.html
		$yourKanye.append(poppedKanye.title);
		$blurb.text(poppedKanye.fortune);
		$kanyeImage.attr('src', poppedKanye.image);
		$lyric.html(poppedKanye.lyric);
		
		// reset quiz
		$('.resetButton').on('click', function() {
				window.location.reload(true);
			});
	}); 
}); 