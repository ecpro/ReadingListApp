'use strict';

angular.module('reviewListApp', [])

.controller('FormController', ['$scope', function ($scope) {

    $scope.ratings = [1, 2, 3, 4, 5];
    $scope.selected = 5;


    $scope.genresSelected = {
        drama: false,
        sci_fi: false,
        romance: false,
        thriller: false,
        comedy: false
    }

    $scope.formData = {
        author: '',
        bookTitle: '',
        genres: {},
        bookImage: 'food-q-c-300-300-5',
        rating: $scope.selected,
        description: ""
    };


    $scope.submitForm = function () {
        $scope.formData.genres = $scope.genresSelected;

        console.log($scope.genresSelected);
        $scope.reviews.unshift($scope.formData);

        $scope.genresSelected = {
            drama: false,
            sci_fi: false,
            romance: false,
            thriller: false,
            comedy: false
        };

        $scope.formData = {
            author: '',
            bookTitle: '',
            genres: {},
            bookImage: 'food-q-c-300-300-5',
            rating: $scope.selected,
            description: ""
        };


        console.log("form submittted");
        console.log($scope.formData);
        console.log($scope.genresSelected);
    };

}])

.controller('ReviewController', ['$scope', function ($scope) {
    $scope.reviews = [
        {
            bookImage: 'harry potter',
            author: 'J K Rowling',
            bookTitle: 'Harry Potter',
            rating: 5,
            genres: {
                drama: true,
                sci_fi: true,
                romance: false,
                thriller: true,
                comedy: false
            },
            description: "The crown jewel of the Harry Potter series, 'Half-Blood Prince' is one of the finest novels I've read in my lifetime."
            },
        {
            bookImage: 'angels and demons',
            author: 'Dan Brown',
            bookTitle: 'Angels and Demons',
            rating: 4,
            genres: {
                drama: true,
                sci_fi: true,
                romance: true,
                thriller: true,
                comedy: true
            },
            description: "This book is just awesome. The sharp twists and thrills along the story are incredible. Trust me, it's a damn page-turner."
            }

        ];

    }])

;
