document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  let formData = new FormData(this);

  const email = formData.get("email");
  if (email.endsWith("@qu.edu.qa")) {
    // Show error message
    document.querySelector("#emailError").innerHTML =
      "Sorry, submissions from this domain are not allowed.";
    document.querySelector("#emailError").style.color = "red";
    document.querySelector("#emailError").style.display = "block";
    return;
  }

  const number = formData.get("mobilephone");

  var expr = /^(0|91)?[6-9][0-9]{9}$/;
  if (!expr.test(number)) {
    document.querySelector("#mobileError").innerHTML =
      "Please enter a valid 10 digit mobile number";
    document.querySelector("#mobileError").style.color = "red";
    document.querySelector("#mobileError").style.display = "block";
    return;
  }

  // Send post request to the server
  fetch(
    "https://forms.hubspot.com/uploads/form/v2/23736002/6036b475-59b9-4a8c-9bd8-6e56a4047a35",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        // Show success message
        document.querySelector("#thankYou").innerHTML =
          "Thank you for submitting the form!";
        document.querySelector("#thankYou").style.color = "green";
        document.querySelector("#thankYou").style.display = "block";
      } else {
        // Show error message
        document.querySelector("#thankYou").innerHTML =
          "An error occurred while submitting the form. Please try again later.";
        document.querySelector("#thankYou").style.color = "red";
        document.querySelector("#thankYou").style.display = "block";
      }

      // Remove form
      this.remove();
    })
    .catch((error) => {
      console.error(error);
      // Show error message
      document.querySelector("#thankYou").innerHTML =
        "Something went wrong, please try again later.";
      document.querySelector("#thankYou").style.color = "red";
      document.querySelector("#thankYou").style.display = "block";
      // Remove form
      this.remove();
    });
});


const moveSliderToLeft = () => {
  const scrollableElement = document.querySelector("#sliderCont");

  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth < 760 ? 280 : 520;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const moveSliderToRight = () => {
  const scrollableElement = document.querySelector("#sliderCont");

  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth < 760 ? -280 : -520;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

// Slider Movements
const moveSliderToLeft2 = () => {
  console.log("hi2");

  const scrollableElement = document.querySelector("#gridSlider");
  console.log(scrollableElement);

  const screenWidth = window.innerWidth;
  const scrollAmount = 400;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const moveSliderToRight2 = () => {
  console.log("hi1");
  const scrollableElement = document.querySelector("#gridSlider");
  console.log(scrollableElement);

  const screenWidth = window.innerWidth;
  const scrollAmount = -400;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;

// Slider Movements
const slidesContent = [
  {
    right:
      "“LEGO House takes the physical brick to new frontiers with inventive, interactive digital experiences built with Azure solutions.”",
    author: "Mary Ashley Krogh (MAK)",
    post: " Illustrator and Graphic Designer",
    src: "/Customer-img-LEGO-2x.png",
  },
  {
    right:
      "“Siemens connects frontline workers and engineers for real-time problem-solving using Azure AI Studio.”",
    author: "Adam Montgomery",
    post: "Senior Manager of Programming, Sundance Film Festival",
    src: "/Customer-img-SIEMENS-2x.png",
  },
  {
    right:
      "“HEINEKEN built chatbots that connect employees with information across the company using Azure OpenAI Service and its built-in ChatGPT capabilities.”",
    author: "Ann Kappes",
    post: "Director of Art Partnerships at Creativity Explored",
    src: "/Customer-img-Heineken-2x.png",
  },
  {
    right:
      "“General Motors reimagined its developer tool chain and its onboarding experience with Azure cloud-based developer services.”      ",
    author: "Lynette Elliot",
    post: "",
    src: "/customer-image-gm-2x.png",
  },
  {
    right:
      "“Unilever laid the foundation for unconstrained capacity for business growth by migrating its SAP estate to Azure in just 18 months.” ",
    author: "Sophia Chang",
    post: "Illustrator and Designer",
    src: "/customer-image-unilever-2x.png",
  },
  {
    right:
      "“Dropbox version control is very important. You may want to go back to an earlier version because there’s an idea in there that you really like.”",
    author: "Sahir Zaveri",
    post: "CEO of King Children",
    src: "/azure/carouselimg6.webp",
  },
  {
    right:
      "“We store important photos and documents for our family on Dropbox. Not only do I know they are in a safe location, but I’m also able to access them from anywhere.” ",
    author: "Sarah Shelton",
    post: "",
    src: "/azure/carouselimg7.webp",
  },
];

const leftSlide = document.getElementById("left-slide");
const rightSlide = document.getElementById("right-slide");

function updateSlide(index) {
  // document.getElementById("left-paragraph").innerText =
  //   slidesContent[index].left;
  document.getElementById("right-paragraph").innerText =
    slidesContent[index].right;
  document.getElementById("right-author").innerText =
    slidesContent[index].author;
  document.getElementById("right-author-post").innerText =
    slidesContent[index].post;
  document.getElementById("right-image").src = slidesContent[index].src;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
  leftSlide.style.transform = `translateX(-${index * 100}%)`;
  rightSlide.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesContent.length - 1;
  updateSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide < slidesContent.length - 1 ? currentSlide + 1 : 0;
  updateSlide(currentSlide);
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", (event) => {
    currentSlide = parseInt(event.target.getAttribute("data-slide"));
    updateSlide(currentSlide);
  });
});

updateSlide(currentSlide);

// Slider Movements
