'use strict';

function getDogImage(optionDogBreed) {
    console.log('getDogImage()');
    fetch(`https://dog.ceo/api/breed/${optionDogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
  .catch(error => 
    alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    console.log('displayResults()');
    $('.results').html('');
    $('.results').append(
        `<img src="${responseJson.message}" class="results-img" alt="random dog image">`
    )
    //display the results section
    $('.results').removeClass('hidden');
}

function watchForm() {
    $(document).on('click', '.submit', function (event) {
        console.log('watchForm()');
        event.preventDefault();
        let optionDogBreed = $("#dog-breed").val();
        console.log(optionDogBreed);
        getDogImage(optionDogBreed);
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});