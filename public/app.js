// Vehicle axios requests

const getVehicles = () => {
    axios.get('/vehicles')
    .then(({data}) => {
    displayVehicles(data)
    })
    .catch(e => console.error(e))
}

const displayVehicles = (array) => {
    array.forEach(car => {
        console.log(car)
        let carCard = document.createElement('div')
        carCard.innerHTML = `
        <div class="card text-center border-dark mb-3">
            <div class="card-header">
                Featured
            </div>
        <div class="card-body">
            <h5 class="card-title">${car.name}</h5>
            <img class="card-img-top embed-responsive-item" src="${car.photoLink}">
        <br>
        <br>
            <a href="#" class="btn btn-primary">Rent</a>
        </div>
        <div class="card-footer text-muted">
        </div>
        </div>
    <br>`
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
const updateVehicle = id => {

    axios.put(`/vehicles/${id}`)
    .then(() => {
        console.log('Vehicle Updated')
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