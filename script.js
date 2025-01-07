document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
//   choose-us section
const chooseUsContainer = document.getElementById("choose-us-container");

const chooseUsHeading = document.createElement("h1");
chooseUsHeading.textContent = "Why Choose Us";

const chooseUsParagraph = document.createElement("p");
chooseUsParagraph.innerHTML = `
  The main reason is because our <br>
  competitors have disgusting <br>
  sites, but we can't write that <br>
  here, so the text here will be <br>
  different.
`;

chooseUsContainer.appendChild(chooseUsHeading);
chooseUsContainer.appendChild(chooseUsParagraph);

const featuresContainer = document.getElementById("features-container");

const featuresData = [
  {
    imgSrc: "./images/img.svg",
    imgAlt: "payment-method",
    title: "Payment methods",
    description: "We have a lot of them, from cryptocurrencies to barter for potatoes."
  },
  {
    imgSrc: "./images/img (1).svg",
    imgAlt: "search-icon",
    title: "Simple search process",
    description: "We checked it out, even the kid did it, but it was my mom's friend's son."
  },
  {
    imgSrc: "./images/img (2).svg",
    imgAlt: "support-icon",
    title: "24/7 Support",
    description: "Is there something you don't understand? Feel free to call us. Phone number in the footer."
  },
  {
    imgSrc: "./images/img (3).svg",
    imgAlt: "people-icon",
    title: "We are nice",
    description: "Fantasy is over, there will be something really convincing here."
  }
];

featuresData.forEach(feature => {
  const featureDiv = document.createElement("div");
  featureDiv.classList.add("feature"); 

  const featureImg = document.createElement("img");
  featureImg.src = feature.imgSrc;
  featureImg.alt = feature.imgAlt;

  const featureTitle = document.createElement("h2");
  featureTitle.textContent = feature.title;

  const featureDescription = document.createElement("p");
  featureDescription.innerHTML = feature.description;

  featureDiv.appendChild(featureImg);
  featureDiv.appendChild(featureTitle);
  featureDiv.appendChild(featureDescription);

  featuresContainer.appendChild(featureDiv);
});

// offer-section
const offersData = [
    {
      imgSrc: "./images/Rectangle 9.svg",
      imgAlt: "hotel-room",
      starRating: 4.8,
      hotelName: "Wilderness Club at Big Cedar",
      dates: "28 October - 1 November",
      price: "$2016",
      nights: "/6 night"
    },
    {
      imgSrc: "./images/Rectangle 9 (1).svg",
      imgAlt: "hotel-room",
      starRating: 4.8,
      hotelName: "Wilderness Club at Big Cedar",
      dates: "28 October - 1 November",
      price: "$2016",
      nights: "/6 night"
    },
    {
      imgSrc: "./images/Rectangle 9 (2).svg",
      imgAlt: "hotel-room",
      starRating: 4.8,
      hotelName: "Wilderness Club at Big Cedar",
      dates: "28 October - 1 November",
      price: "$2016",
      nights: "/6 night"
    }
  ];
  
  const offersContainer = document.getElementById("offers-container");
  
  const heading = document.createElement("h2");
  heading.textContent = "Special Offers";
  offersContainer.appendChild(heading);
  
  const hotelsSection = document.createElement("section");
  hotelsSection.classList.add("hotels");
  
  offersData.forEach(offer => {
    const hotelCard = document.createElement("div");
    hotelCard.classList.add("hotel-cards");
  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
  
    const hotelImg = document.createElement("img");
    hotelImg.src = offer.imgSrc;
    hotelImg.alt = offer.imgAlt;
  
    const starIcon = document.createElement("div");
    starIcon.classList.add("star-icon");
    starIcon.innerHTML = `<img src="./images/Star 1.svg" alt="star">${offer.starRating}`;
  
    const heartIcon = document.createElement("div");
    heartIcon.classList.add("heart-icon");
    heartIcon.innerHTML = `<img src="./images/favorite.svg" alt="heart-image">`;
  
    imageContainer.appendChild(hotelImg);
    imageContainer.appendChild(starIcon);
    imageContainer.appendChild(heartIcon);
  
    const details = document.createElement("div");
    details.classList.add("details");
  
    const hotelName = document.createElement("h3");
    hotelName.textContent = offer.hotelName;
  
    const dates = document.createElement("p");
    dates.textContent = offer.dates;
  
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price");
  
    const price = document.createElement("p");
    price.innerHTML = `${offer.price} <span class="night">${offer.nights}</span>`;
  
    priceContainer.appendChild(price);
  
    details.appendChild(hotelName);
    details.appendChild(dates);
    details.appendChild(priceContainer);
  
    hotelCard.appendChild(imageContainer);
    hotelCard.appendChild(details);
  
    hotelsSection.appendChild(hotelCard);
  });
  
  offersContainer.appendChild(hotelsSection);

//   review-section
const reviewsData = [
    {
      imgSrc: "./images/Ellipse 6.svg",
      imgAlt: "publisher's-image",
      reviewText: `
        I quickly found the right tour for me,
        but I had a few questions about the hotel. 
        I wrote to tech support and they answered all my questions within an hour. 
        The vacation itself was perfect. Thank you very much. 
        I will come back again and again.`,
      authorName: "Jannike Borg",
      authorRole: "Publisher",
    },
    {
      imgSrc: "./images/Ellipse 6 (1).svg",
      imgAlt: "publisher's-image",
      reviewText: `
        I quickly found the right tour for me,
        but I had a few questions about the hotel. 
        I wrote to tech support and they answered all my questions within an hour. 
        The vacation itself was perfect. Thank you very much. 
        I will come back again and again.`,
      authorName: "LeBron Durant",
      authorRole: "Flight Attendant",
    },
    {
      imgSrc: "./images/Ellipse 6 (2).svg",
      imgAlt: "publisher's-image",
      reviewText: `
        I quickly found the right tour for me,
        but I had a few questions about the hotel. 
        I wrote to tech support and they answered all my questions within an hour. 
        The vacation itself was perfect. Thank you very much. 
        I will come back again and again.`,
      authorName: "Kaarel Piho",
      authorRole: "Chiropodist",
    },
  ];
//   blog-container
  
  const blogsData = [
    {
      imgSrc: "./images/Rectangle 17.svg",
      imgAlt: "Athens",
      date: "May 20, 2022",
      readTime: "5 minutes",
      title: "My trip to Athens",
      description: `
        It would seem that in a city where Theseus, Plato, 
        and Epicurus once walked, the very idea of the subway is alien, but already...`,
    },
    {
      imgSrc: "./images/Rectangle 17 (1).svg",
      imgAlt: "Vilnius",
      date: "May 20, 2022",
      readTime: "1 minute",
      title: "Vilnius resorts",
      description: `
        I haven't seen any resorts in Vilnius, 
        but there are wonderful people and pubs.`,
    },
    {
      imgSrc: "./images/Rectangle 17 (2).svg",
      imgAlt: "Flying on a plane",
      date: "May 20, 2022",
      readTime: "15 minutes",
      title: "Tips for flying on a plane",
      description: `
        If you have a fear of flying, here's a helpful tip: 
        bring your co-pilot so you can take a nap while he steers the plane for you.`,
    },
  ];
  
  function renderReviews() {
    const reviewsContainer = document.getElementById("reviews-container");
  
    const reviewsSection = document.createElement("div");
    reviewsSection.classList.add("questions");
  
    const heading = document.createElement("h2");
    heading.textContent = "Reviews";
    reviewsSection.appendChild(heading);
  
    const reviewSection = document.createElement("section");
    reviewSection.classList.add("Reviews");
  
    reviewsData.forEach((review) => {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review");
  
      const img = document.createElement("img");
      img.src = review.imgSrc;
      img.alt = review.imgAlt;
  
      const publisher = document.createElement("div");
      publisher.classList.add("publisher");
      publisher.innerHTML = `<p>${review.reviewText}</p>`;
  
      const author = document.createElement("div");
      author.classList.add("author");
      author.innerHTML = `
        <h3>${review.authorName},</h3>
        <p>${review.authorRole}</p>`;
  
      reviewCard.appendChild(img);
      reviewCard.appendChild(publisher);
      reviewCard.appendChild(author);
  
      reviewSection.appendChild(reviewCard);
    });
  
    reviewsSection.appendChild(reviewSection);
    reviewsContainer.appendChild(reviewsSection);
  }
  
  function renderBlogs() {
    const blogsContainer = document.getElementById("blogs-container");
  
    const blogSection = document.createElement("div");
    blogSection.classList.add("blog-container");
  
    const postsHeading = document.createElement("div");
    postsHeading.classList.add("posts");
    postsHeading.innerHTML = `<h2>Recent posts</h2>`;
    blogSection.appendChild(postsHeading);
  
    blogsData.forEach((blog) => {
      const blogCard = document.createElement("div");
      blogCard.classList.add("blog-card");
  
      const blogImg = document.createElement("img");
      blogImg.classList.add("blog-image");
      blogImg.src = blog.imgSrc;
      blogImg.alt = blog.imgAlt;
  
      const blogContent = document.createElement("div");
      blogContent.classList.add("blog-content");
  
      const blogReadTime = document.createElement("div");
      blogReadTime.classList.add("blog-read-time");
      blogReadTime.innerHTML = `
        <p class="blog-date">${blog.date}</p>
        <div class="bx-time">
          <img class="clock-icon" src="./images/bx_time-five.svg" alt="Clock icon">
          <span>${blog.readTime}</span>
        </div>`;
  
      const blogTitle = document.createElement("h2");
      blogTitle.classList.add("blog-title");
      blogTitle.textContent = blog.title;
  
      const blogDescription = document.createElement("p");
      blogDescription.classList.add("blog-description");
      blogDescription.textContent = blog.description;
  
      blogContent.appendChild(blogReadTime);
      blogContent.appendChild(blogTitle);
      blogContent.appendChild(blogDescription);
  
      blogCard.appendChild(blogImg);
      blogCard.appendChild(blogContent);
      blogSection.appendChild(blogCard);
    });
  
    blogsContainer.appendChild(blogSection);
  }
  renderReviews();
  renderBlogs();


  
  

  