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
            bookImage: 'nightlife-q-c-300-300-6',
            author: 'someone',
            bookTitle: 'someTitle',
            rating: 4,
            genres: {
                drama: true,
                sci_fi: false,
                romance: true,
                thriller: false,
                comedy: false
            },
            description: "When things happen - enjoy them. They're little gifts. A fan brush is a fantastic piece of equipment. Use it."
            },
        {
            bookImage: 'food-q-c-300-300-5',
            author: 'someone',
            bookTitle: 'someTitle',
            rating: 2,
            genres: {
                drama: false,
                sci_fi: false,
                romance: true,
                thriller: false,
                comedy: true
            },
            description: "When things happen - enjoy them. They're little gifts. A fan brush is a fantastic piece of equipment. Use it."
            }

        ];

    }])

;
