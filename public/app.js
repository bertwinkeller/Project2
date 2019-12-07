// Vehicle axios requests

// axios get request
const getVehicles = () => {
    axios.get('/vehicles')
    .then(({data}) => {
    displayVehicles(data)
    })
    .catch(e => console.error(e))
}

// displays vehicles
const displayVehicles = (array) => {
    array.forEach(car => {
      let rating = 0
      let ratingSrc
      let reviewsText = ''
      // Determine Ratings Value and Create Reviews
      car.reviews.forEach((e) => {
        rating += parseInt(e.rating)
        reviewsText += `<h5 class="d-inline">${e.name}</h5><p class="d-inline ml-3">Rating: ${e.rating}/5</p><p>${e.review}</p>`
      })
      // Determine Ratings Image Link
      rating = Math.ceil(rating/car.reviews.length)
      console.log(rating)
      switch (rating) {
        case 5:
          ratingSrc = "./images/iconFiveStars.svg"
          break
        case 4:
          ratingSrc = "./images/iconFourStars.svg"
          break
        case 3:
          ratingSrc = "./images/iconThreeStars.svg"
          break
        case 2:
          ratingSrc = "./images/iconTwoStars.svg"
          break
        case 1:
          ratingSrc = "./images/iconOneStars.svg"
          break
        default:
          ratingSrc = "./images/iconFiveStars.svg"
      }
        console.log(car)
        let carCard = document.createElement('div')
        carCard.className = 'vehicles'
        carCard.id = `carCard${car.id}`
        carCard.innerHTML = `
        <div class="card text-center border-1 mb-3">
          <div class="card-body">
            <img class="img-fluid" src="${car.photoLink}">
            <div class="row">
              <div class="col">
                <h6 class="card-title text-left mt-2 mb-0">${car.name}</h6>
                <div class="row ml-0">
                  <img src="${ratingSrc}">
                  <a href="#" class="text-primary ml-2" data-toggle="modal" data-target="#review${car.id}">Reviews</a>
                </div>
              </div>
              <div class="col">
                <a href="#" class="btn btn-primary btn-block mt-2" data-toggle="modal" data-target="#bookInstantly" data-vehicleId=${car.id}>Book Instantly</a>
              </div>
            </div>
          </div>
        </div>

      <!-- Reviews Modal -->
      <div class="modal" tabindex="-1" role="dialog" id="review${car.id}">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${car.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ${reviewsText}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      `
    document.getElementById('rentDisplay').append(carCard)
    })
    
}

const addVehicle = () => {
    axios.post('/vehicles', {
        name: document.getElementById('carName').value,
        mpg: document.getElementById('mpg').value,
        gasType: document.getElementById('gasType').value,
        doors: document.getElementById('doors').value,
        seats: document.getElementById('seats').value,
        photoLink: document.getElementById('photoLink').value

    })
    .then(() => {
        console.log('Vehicle added')
    })
    .catch(e => console.error(e))

}


const deleteVehicle = id => {
    axios.delete(`/vehicles/${id}`)
    .then(() => {
        console.log('Vehicle Removed')
    })
    .catch(e => console.error(e))
}

// Review axios requests
const getReviews = () => {
    axios.get('/reviews')
    .then(reviews => {
    console.log(reviews)
    })
    .catch(e => console.error(e))
}

const addReview = () => {
    axios.post('/reviews', {
        name: document.getElementById('reviewerName').value,
        rating: document.getElementById('rating').value,
        review: document.getElementById('review').value,
        vehicleId: document.getElementById('vehicleId').value
    })
    .then(() => {
        console.log('Review added')
    })
    .catch(e => console.error(e))

}
const updateReview = id => {

    axios.put(`/reviews/${id}`)
    .then(() => {
        console.log('Review Updated')
    })
    .catch(e => console.error(e))
}

const deleteReview = id => {
    axios.delete(`/reviews/${id}`)
    .then(() => {
        console.log('Review Removed')
    })
    .catch(e => console.error(e))
}

getVehicles()

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('username')
  localStorage.removeItem('password')
  window.location = './index.html'
})
