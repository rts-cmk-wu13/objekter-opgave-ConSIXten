// slå dig løs her... 


//Nav-header starts here


//Hero-section starts here .. Main start
let heroElm = document.querySelector(".hero")
let heroDiv = document.createElement("div")

heroDiv.innerHTML = `
    <img src="${hero.image}" alt="">
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <button><img src="${hero.icon}" alt="">Explore</button>
`
// heroDiv.classList.add("full-width")
heroElm.append(heroDiv)



//Service-section starts here
let serviceElm = document.querySelector(".services")

services.forEach(service => {
    let serviceDiv = document.createElement("div")
    serviceDiv.classList.add("service-card")

    serviceDiv.innerHTML = `
    <figure class="service-card__img">
        <img src="${service.illustration}" alt="#">
    </figure>
    <h2>${service.headline}</h2>
    <p>${service.text}</p>
    <a href="#">${service.linktext}</a>
`
    serviceElm.append(serviceDiv);
});

//Facilities-section starts here

let facilitiesElm = document.querySelector(".facilities")
// let facilitiesHeadline = document.createElement("div")

// facilityDiv.innerHTML = `
// <h3>Making your facility known is our priority</h3>
// `
// facilitiesElm.append(facilitiesHeadline)


facilities.options.forEach(facility => {
    let facilityDiv = document.createElement("div")
    facilityDiv.classList.add("facility-card")

    facilityDiv.innerHTML = `
    <figure class="facility-card__img">
        <img src="${facility.icon}" alt="#">
    </figure>
    <h3>${facility.headline}</h3>
    <p>${facility.text}</p>
`
facilitiesElm.append(facilityDiv);
});

//Sites-section starts here
let sitesElm = document.querySelector(".sites")
let sitesDivInfo = document.createElement("div")
sitesDivInfo.classList.add("site-info")

sitesDivInfo.innerHTML =`
<h4>${sites.headline}</h4>
<p>${sites.text}</p>
<button><img src="${sites.btnicon}" alt="">start</button>
`
sitesElm.append(sitesDivInfo)

sites.places.forEach(site => {
    let sitesDiv = document.createElement("div")
    sitesDiv.classList.add("sites-card")

    
    sitesDiv.innerHTML = `
    <figure class="sites-card__img">
        <img src="${site.img}" alt="#">
    </figure>
    <h2>${site.name}</h2>
    <p>${site.city}</p>
    <a href="#">View the site</a>
    `
    sitesElm.append(sitesDiv);
});


//Advantages-section starts here
advantages.forEach(advantage => {
    let advantagesElm = document.querySelector(".advantages")
    let advantagesDiv = document.createElement("div")
    advantagesDiv.classList.add("advantages-card")

    advantagesDiv.innerHTML = `
     <figure class="advantages-card__img">
         <img src="${advantage.icon}" alt="#">
     </figure>
    <h5>${advantage.headline}</h5>
     <p>${advantage.text}</p>
      `
advantagesElm.append(advantagesDiv);
});


//Footer .. Main ends
    let footerElm = document.querySelector(".footer")
    let footerDiv =document.createElement("div")
    footerDiv.classList.add("footer-style")

    footerDiv.innerHTML = `
    <div>
        <h6>Easy Camper</h6>
        <h6>When Passion Meets Comfort.</h6>
    </div>
    <div class="footer-links">
        <h6>Discover the Network</h6>
        <ul>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
        </ul>
    </div>
    <div class="footer-links">
        <h6>Discover the Network</h6>
        <ul>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
        </ul>
    </div>
    <div class="footer-links">
        <h6>Discover the Network</h6>
        <ul>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
            <li><a href="#">Lorem, ipsum.</a></li>
        </ul>
    </div>
    <section class="btm-footer no-columns">
            <p>EazyCamper. All rights reserved. </p>
            <ul class="btm-footer__nav">
                <li>Lorem.</li>
                <li>Lorem.</li>
                <li>Lorem.</li>
                <li>Lorem.</li>
                <li>Lorem.</li>
            </ul>

    </section>
    `;
    footerElm.append(footerDiv)

//eksempel på at udskrive alle overskrifter i services i konsollen:

// services.forEach(service => console.log(service.headline))
