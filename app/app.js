'use strict';

angular.module('reviewListApp', [])

.controller('FormController', ['$scope', function ($scope) {
    $scope.formData = {};

    }])


.controller('ReviewController', ['$scope', function ($scope) {
    $scope.reviews = [
        {
            bookImage: 'img/nightlife-q-c-300-300-6.jpg',
            author: 'someone',
            bookTitle: 'someTitle',
            rating: 4,
            genres: {
                'drama': true,
                'sci-fi': false,
                'romance': true,
                'thriller': false,
                'comedy': false
            },
            description: "When things happen - enjoy them. They're little gifts. A fan brush is a fantastic            piece of equipment. Use it. Make friends with it. I'm gonna start with a little              Alizarin crimson and a touch of Prussian blue There's not a thing in the world              wrong with washing your brush. A little happy sunlight shining through there"
            },
        {
            bookImage: 'img/food-q-c-300-300-5.jpg',
            author: 'someone',
            bookTitle: 'someTitle',
            rating: 2,
            genres: {
                'drama': false,
                'sci-fi': true,
                'romance': true,
                'thriller': true,
                'comedy': false
            },
            description: "When things happen - enjoy them. They're little gifts. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue There's not a thing in the world wrong with washing your brush. A little happy sunlight shining through there"
            }

        ];

    }])

;
