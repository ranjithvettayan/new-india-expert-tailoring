function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction01() {
  var dots = document.getElementById("dots01");
  var moreText = document.getElementById("more01");
  var btnText = document.getElementById("myBtn01");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction02() {
  var dots = document.getElementById("dots02");
  var moreText = document.getElementById("more02");
  var btnText = document.getElementById("myBtn02");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction03() {
  var dots = document.getElementById("dots03");
  var moreText = document.getElementById("more03");
  var btnText = document.getElementById("myBtn03");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction04() {
  var dots = document.getElementById("dots04");
  var moreText = document.getElementById("more04");
  var btnText = document.getElementById("myBtn04");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


// change navbar style on scroll

windows.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('windows-scroll',windows.scrollY > 0)
})

//show/hide faq options

const faqs = document.querySelectionAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click',() => {
        faq.classList.toggle('open');


        //change icon
        const icon = faq.querySelector('.faq__icon img');
        if(icon.className === './images/plus.svg'){
          icon.className = "./images/minus.svg";
        }else{
          icon.className = "./images/plus.svg";
        }
  })
})
//FAQs Questions and answers

function myFunction11() {
  var moreText = document.getElementById("answer0");
  var btnText = document.getElementById("myBtn11");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>Do your Shop Also Stich Dress for Womens?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction12() {
  var moreText = document.getElementById("answer1");
  var btnText = document.getElementById("myBtn12");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>Can you alter any garments?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction13() {
  var moreText = document.getElementById("answer2");
  var btnText = document.getElementById("myBtn13");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>I need to redesign my dress, can you help?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction14() {
  var moreText = document.getElementById("answer3");
  var btnText = document.getElementById("myBtn14");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>I have a designer suit which I would like to alter?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction15() {
  var moreText = document.getElementById("answer4");
  var btnText = document.getElementById("myBtn15");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>Do you take on very easy tasks?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction16() {
  var moreText = document.getElementById("answer5");
  var btnText = document.getElementById("myBtn16");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>Can you take on rush jobs with tight dead lines?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction17() {
  var moreText = document.getElementById("answer6");
  var btnText = document.getElementById("myBtn17");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>How will you take my measurements?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction18() {
  var moreText = document.getElementById("answer7");
  var btnText = document.getElementById("myBtn18");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>Do you help with designing the outfit?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction19() {
  var moreText = document.getElementById("answer8");
  var btnText = document.getElementById("myBtn19");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>What kind of clothes do you stitch?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

function myFunction10() {
  var moreText = document.getElementById("answer9");
  var btnText = document.getElementById("myBtn10");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<h4>What Types of Thread Should I Use?</h4>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<h4>Answer:</h4>"; 
    moreText.style.display = "inline";
  }
}

//preloader


//show and hide nav menu
function myFunctionBtn() {
  var moreText = document.getElementById("drop");
  var btnText = document.getElementById("menuBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<img src='./menu.png'>";
    moreText.style.display = "none";
  } else{
    dots.style.display = "none";
    btnText.innerHTML = "<img src='./close.png'>";
    moreText.style.display = "inline";
  }
}

function myFunctionBtnmenu() {
  var moreText = document.getElementById("drop01");
  var btnText = document.getElementById("menuBtn01");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<img src='./menu.png'>";
    moreText.style.display = "none";
  } else{
    dots.style.display = "none";
    btnText.innerHTML = "<img src='./close.png'>";
    moreText.style.display = "inline";
  }
}

