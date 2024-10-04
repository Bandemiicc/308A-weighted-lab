/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */
/**
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */
/**
 * 5. Add axios interceptors to log the time between request and response to the console.
 * - Hint: you already have access to code that does this!
 * - Add a console.log statement to indicate when requests begin.
 * - As an added challenge, try to do this on your own without referencing the lesson material.
 */


// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_2o17ZdoFczzNDJYaxrdXdfiyh2scGP0srSvkYUx7Wb3fhEQ5YmqnXeCeQ8z0Kd12";

initialLoad()

async function initialLoad() {
  let res = await fetch(`https://api.thecatapi.com/v1/breeds`, { headers:{ "x-API-Key": "live_2o17ZdoFczzNDJYaxrdXdfiyh2scGP0srSvkYUx7Wb3fhEQ5YmqnXeCeQ8z0Kd12"}})
  let breeds = await res.json()
  console.log(breeds);
  breeds.forEach((breed) => {
  let options = document. createElement("option");
  options.setAttribute ('value', breed.id)
  options.textContent = breed.name
  breedSelect.appendChild(options)
})
console.log(breedSelect)
}

breedSelect.addEventListener("change", async function retrieve(e) {
    Carousel.clear()
    const breedID = (e.target.value)
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedID}&api_key=${API_KEY}`)
    const breeds = await res.json()
  
    //console.log(e.target.value);
    for (const breed of breeds) {
      let imgSrc = breed.url
      let imgAlt = breed.breeds[0].name
      let imgId = breed.breeds[0].reference_image_id;
      let item = Carousel.createCarouselItem(imgSrc, imgAlt, imgId)
      Carousel.appendCarousel(item);
      Carousel.start();
      console.log(imgSrc, imgAlt, imgId)
    }
  });