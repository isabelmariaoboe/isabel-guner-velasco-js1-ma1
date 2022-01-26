// Question 1 //

function catsComplain () {
    console.log("Meow!");
}

const cat = {complain: catsComplain}

//Testing
console.log(typeof cat.complain)
cat.complain()

// Question 2 //

var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// // Question 3 //

heading.style.fontSize = "2em";
 

// // Question 4 //

heading.className += "subheading";

// Question 5 //

var paragraphs = document.querySelectorAll("p")
for (var i = 0; i < paragraphs.length; i++) {
    var currentPararaph = paragraphs[i];
    currentPararaph.style.color = "red";
}

// Question 6 //

var resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New paragraph"
console.log(typeof resultsContainer)






const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];