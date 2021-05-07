var words = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie', 'zombie'];

var word = words[Math.floor(Math.random() * words.length)];
word = word.toUpperCase();
var outWord = "";
for (var i = 0; i < word.length; i++)
	outWord += "<u>" + word[i] + "</u>" + " ";
outWord[outWord.length - 1] = '';
var wordText = document.getElementById("word");
wordText.innerHTML = outWord;
console.log(outWord);
var letterInput = document.getElementById("letter");
var currentImage = 1;
var hangman = document.getElementById("hangman");
var button = document.getElementById("button");
var usedLetters = document.getElementById("usedLetters");
letterInput.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		button.click();
	}
});

function updateOutput() {
	var letter = letterInput.value.toUpperCase();
	letterInput.value = "";
	if (letter.length > 1 || letter.length == 0)
		return;
	var prevText = outWord;
	updateUsedLetters(letter);
	var replaceQ = "<u>" + letter + "</u>";
	outWord = outWord.replaceAll(replaceQ, "_");
	if (prevText == outWord) {
		bgColor(false);
		currentImage++;
		hangman.src = "img/" + currentImage + ".png";
		if (currentImage == 7)
			setState(0);
		return;
	}
	bgColor(true);
	word = word.replaceAll(letter, "");
	if (word == "") setState(1);
	else wordText.innerHTML = outWord;
}

function setState(s) {
	if (s == 0)
		wordText.innerHTML = "YOU LOST!";
	else
		wordText.innerHTML = "YOU WON!";
	button.setAttribute("onClick", "window.location.reload()");
	button.innerHTML = "PLAY AGAIN";
	letterInput.remove();
}

function bgColor(c) {
	document.body.style.backgroundColor = c == true ? "lawngreen" : "red";
	setTimeout(function () {
		document.body.style.backgroundColor = "white";
	}, 200);
}

function updateUsedLetters(letter) {
	if (usedLetters.innerHTML == "Used letters: ") {
		usedLetters.innerHTML += letter;
	}
	else usedLetters.innerHTML += ", " + letter;
}