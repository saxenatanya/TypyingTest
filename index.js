const setOfWords = ["African elephants are the largest land animals on Earth. They are slightly larger than their Asian cousins and can be identified by their larger ears that look somewhat like the continent of Africa. (Asian elephants have smaller, rounded ears.)",
    "Males only reach their full size at 35-40 years - that’s well over half their lifespan as wild elephants can live for up to 60-70 years.",
    "Elephants have around 150,000 muscle units in their trunk. Their trunks are perhaps the most sensitive organ found in any mammal - Asian elephants have been seen to pick up a peanut, shell it, blow the shell out and eat the nut. Elephants use their trunks to suck up water to drink – it can contain up to 8 litres of water. They also use their trunks as a snorkel when swimming.",
    "Elephant tusks are actually enlarged incisor teeth which first appear when elephants are around 2 years old. Tusks continue growing throughout their lives. Tusks are used to help with feeding - prising bark off trees or digging up roots - or as a defense when fighting. But these beautiful tusks often cause elephants danger. They're made from ivory; a much desired object. Read on to find out why elephants are under threat.",
    "An elephant’s skin is 2.5cm thick in most places.  The folds and wrinkles in their skin can retain up to 10 times more water than flat skin does, which helps to cool them down. They keep their skin clean and protect themselves from sunburn by taking regular dust and mud baths.",
    "Elephants communicate in a variety of ways - including sounds like trumpet calls (some sounds are too low for people to hear), body language, touch and scent. They can also communicate through seismic signals - sounds that create vibrations in the ground - which they may detect through their bones.",
    "Amazingly, elephant calves are able to stand within 20 minutes of being born and can walk within 1 hour. After two days, they can keep up with the herd. This incredible survival technique means that herds of elephants can keep migrating to find food and water to thrive.",
    "The elephant's temporal lobe (the area of the brain associated with memory) is larger and denser than that of people - hence the saying 'elephants never forget'.",
    "Around 90% of African elephants have been wiped out in the past century - largely due to the ivory trade - leaving an estimated 415,000 wild elephants alive today. Asian elephants are also under threat, having declined by at least 50% in the last three generations. There are only around 45,000 left in the wild. As their habitat changes, fragments and is lost to human settlements and agriculture, populations of Asian elephants are finding it harder to follow their traditional migration routes to reach water, feeding and breeding grounds, and they’re coming into often dangerous contact with people."
];

const message = document.getElementById("msg");
const words = document.getElementById("words");
const submitButton = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalStr = words.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = "Speed is " + speed + " WPM";
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;

}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(function(value, index) {
        if (value == words2[index]) {
            count++;
        }
    });

    let remainingWords = (words1.length - count);
    return `"\n" ${count} correct out of ${words1.length} "\n" Error words ${remainingWords}.`;
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener("click", function () {
    if (this.innerText == "Start") {
        words.disabled = false;
        playGame();
    }
    else if (this.innerText == "Done") {
        words.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
});