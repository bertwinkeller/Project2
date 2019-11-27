// Vehicle axios requests

const getVehicles = () => {
    axios.get('/vehicles')
    .then(vehicles => {
    console.log(vehicles)
    })
    .catch(e => console.error(e))
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
        review: document.getElementById('review').value

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

//