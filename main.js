// General NODES
const welcomeBtn =  document.getElementById('welcome-button');   
const welcomeSection = document.querySelector ('.welcome-navigation');
const firstSection = document.querySelector('.first-navigation-container');
const secondSection = document.querySelector('.second-navigation-container');
const thirdSection = document.querySelector ('.third-navigation-container');
const upLoadSection = document.querySelector('.upload-section-container')
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const arrowButton = document.querySelector('.arrow')
const infoSentBtn = document.querySelector('.info-sent')
const aboutUsSection = document.querySelector('.about-us-section')


const cardElementOne = document.querySelector ('.card-element-one');
const cardElementTwo = document.querySelector ('.card-element-two');
const cardElementThree = document.querySelector('.card-element-three');



// Methods and navigations

async function loadWelcomeSection() {
  
  firstSection.classList.add ("inactive")
  secondSection.classList.add("inactive")
  thirdSection.classList.add('inactive')
  upLoadSection.classList.add('inactive')
  aboutUsSection.classList.add('inactive')
  welcomeSection.classList.remove("inactive")
  welcomeSection.classList.add("welcome-navigation")
}


// Third Section: individual view

async function loadThirdSection () {
  firstSection.classList.add('inactive')
  secondSection.classList.add('inactive')
  thirdSection.classList.remove('inactive')
}



// First Section: 3 cards 
async function loadFirstSection () {
  welcomeSection.classList.remove("welcome-navigation")
  welcomeSection.classList.add("inactive")
  firstSection.classList.remove("inactive")
  secondSection.classList.add("inactive")
  thirdSection.classList.add('inactive')
  upLoadSection.classList.add('inactive')
  aboutUsSection.classList.add('inactive')

}

async function getDataFirstSection() { 

var apiRequest = {
  method: 'get',
  url: 'https://finalspaceapi.com/api/v0/character/?limit=3',
  headers: { }
};

axios(apiRequest)
.then(function (response) {
  console.log(response.data);
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src = response.data[0].img_url;
    img2.src = response.data[1].img_url;
    img3.src = response.data[2].img_url;

img1.addEventListener ('click', () => {
  let id = response.data[0].id;
  loadThirdSection (id);
  let imgDetails = document.getElementById('imgDetails')
  imgDetails.src = response.data[0].img_url;

  cardElementOne.innerText = 'Name: ' + response.data[0].name 
  cardElementTwo.innerText = 'Origin: ' + response.data[0].origin
  cardElementThree.innerText = 'Status: ' + response.data[0].status

  arrowButton.addEventListener ('click', () => loadFirstSection()  )

}  )

img2.addEventListener('click', () => {
  let id = response.data[1].id;
  loadThirdSection (id);
  let imgDetails = document.getElementById('imgDetails')
  imgDetails.src = response.data[1].img_url;
  cardElementOne.innerText = 'Name: ' + response.data[1].name 
  cardElementTwo.innerText = 'Origin: ' + response.data[1].origin
  cardElementThree.innerText = 'Status: ' + response.data[1].status

  arrowButton.addEventListener ('click', () => loadFirstSection()  )


}  )

img3.addEventListener ('click', () => {
  let id = response.data[2].id;
  loadThirdSection (id);
  let imgDetails = document.getElementById('imgDetails')
  imgDetails.src = response.data[2].img_url;
  cardElementOne.innerText = 'Name: ' + response.data[2].name 
  cardElementTwo.innerText = 'Origin: ' + response.data[2].origin
  cardElementThree.innerText = 'Status: ' + response.data[2].status

  arrowButton.addEventListener ('click', () => loadFirstSection()  )


} )


})
.catch(function (error) {
  console.log(error);
});

}
getDataFirstSection();

// Second Section: 20 cards
async function loadSecondSection() {
  welcomeSection.classList.add('inactive');
  firstSection.classList.add("inactive");
  secondSection.classList.remove("inactive");
  thirdSection.classList.add('inactive');
  upLoadSection.classList.add('inactive');
  aboutUsSection.classList.add('inactive');

 }

async function getDataSecondSection() {
  var apiRequest = {
    method: 'get',
    url: 'https://finalspaceapi.com/api/v0/character/?limit=20',
    headers: { }
  };
  
  axios(apiRequest)
  .then(function (response) {
    console.log(response.data);
    const dataInArray = response.data;
    // Funtion to create each element from the API
    dataInArray.forEach( element => { 
      
      const imgURL = element.img_url; 
      // Here element is XdinamicX and img:url is given from the API
    
    const card = document.createElement ('div');
    card.classList.add("card");
    const img = document.createElement('img');
    const secondSectionContainer = document.getElementById('second-section-cards-container');
    secondSectionContainer.appendChild(card);
    card.appendChild(img);
    img.setAttribute('src', element.img_url);

    // Navigation to Detailed view, still inside forEach 
    img.addEventListener ('click', () => {
    loadThirdSection();
    imgDetails.src = element.img_url
  
    // 
    
    cardElementOne.innerText = 'Name: ' + element.name 
    cardElementTwo.innerText = 'Origin: ' + element.origin
    cardElementThree.innerText = 'Status: ' + element.status
    
    arrowButton.addEventListener ('click', () => loadSecondSection ()  )


    }
    )


    }
    
    )
  
    } ) }
      
getDataSecondSection();


// Search Section -welcome navigation

async function searchfunction() {
  
}

searchBtn.addEventListener ('click', searchfunction()
)










// Upload section
async function loadUploadSection () {
  welcomeSection.classList.add('inactive')
  firstSection.classList.add('inactive')
  secondSection.classList.add('inactive')
  thirdSection.classList.add('inactive')
  aboutUsSection.classList.add('inactive')
  upLoadSection.classList.remove('inactive')
}


// About us section
async function loadAboutUsSection () {
  welcomeSection.classList.add('inactive')
  firstSection.classList.add('inactive')
  secondSection.classList.add('inactive')
  thirdSection.classList.add('inactive')
  upLoadSection.classList.add('inactive')
  aboutUsSection.classList.remove('inactive')
}

