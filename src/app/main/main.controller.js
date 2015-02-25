'use strict';

angular.module('lcsStalker')
.controller('MainCtrl', function($scope) {

    $scope.teams = [{
        "id": 0,
        "name": "TSM"
    }, {
        "id": 1,
        "name": "C9"
    }, {
        "id": 2,
        "name": "CLG"
    }, {
        "id": 3,
        "name": "DIG"
    }];

    $scope.players = [{
        "id": 0,
        "name": "Marcus 'Dyrus' Hill",
        "team": "TSM"
    }, {
        "id": 1,
        "name": "Søren 'Bjergsen' Bjerg",
        "team": "TSM"
    }, {
        "id": 2,
        "name": "Darshan 'Zion Spartan' Upadhyaya",
        "team": "CLG"
    }, {
        "id": 3,
        "name": "Alan 'KiWiKiD' Nguyen",
        "team": "DIG"
    }];

    $scope.currentTeam = null;

    function setCurrentTeam(team) {
        $scope.currentTeam = team || null;

        cancelCreating();
        cancelEditing();
    }

    function isCurrentTeam(team) {
        return $scope.currentTeam !== null && team.name === $scope.currentTeam.name;
    }

    $scope.setCurrentTeam = setCurrentTeam;
    $scope.isCurrentTeam = isCurrentTeam;

    // -------------------
    // Creating and Editing Players
    // -------------------

    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;

        resetCreateForm();
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    function shouldShowCreating() {
        return $scope.currentTeam && !$scope.isEditing;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.shouldShowCreating = shouldShowCreating;

    function startEditing() {
        $scope.isCreating = false;
        $scope.isEditing = true;
    }

    function cancelEditing() {
        $scope.isEditing = false;
    }

    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowEditing = shouldShowEditing;

    ///////////////////////
    //  CRUD             //
    ///////////////////////

    function resetCreateForm() {
        $scope.newPlayer = {
            name: '',
            team: ''
        }
    }

    function createPlayer(player) {
        player.id = $scope.players.length;
        $scope.players.push( player );

        resetCreateForm();
    }

    $scope.createPlayer = createPlayer;

});



// angular.module('lcsStalker', [

// ])
//     .service('lcsStalkerModel', function ($http) {
//         var model = this,
//             URLS = {
//                 FETCH: 'data/categories.json'
//             },
//             categories;

//         function extract(result) {
//             return result.data;
//         }

//         function cacheCategories(result) {
//             categories = extract(result);
//             return categories;
//         }

//         model.getCategories = function() {
//             return $http.get(URLS.FETCH).then(cacheCategories);
//         }
//     })


// $scope.awesomeThings = getCategories().then

// CategoriesModel.getCategories()
//   .then(function(result){
//       categoriesListCtrl.categories = result;
//   });
// $scope.awesomeThings = [
//   {
//     'title': 'AngularJS',
//     'url': 'https://angularjs.org/',
//     'description': 'HTML enhanced for web apps!',
//     'logo': 'angular.png'
//   },
//   {
//     'title': 'BrowserSync',
//     'url': 'http://browsersync.io/',
//     'description': 'Time-saving synchronised browser testing.',
//     'logo': 'browsersync.png'
//   },
//   {
//     'title': 'GulpJS',
//     'url': 'http://gulpjs.com/',
//     'description': 'The streaming build system.',
//     'logo': 'gulp.png'
//   },
//   {
//     'title': 'Jasmine',
//     'url': 'http://jasmine.github.io/',
//     'description': 'Behavior-Driven JavaScript.',
//     'logo': 'jasmine.png'
//   },
//   {
//     'title': 'Karma',
//     'url': 'http://karma-runner.github.io/',
//     'description': 'Spectacular Test Runner for JavaScript.',
//     'logo': 'karma.png'
//   },
//   {
//     'title': 'Protractor',
//     'url': 'https://github.com/angular/protractor',
//     'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
//     'logo': 'protractor.png'
//   },
//   {
//     'title': 'jQuery',
//     'url': 'http://jquery.com/',
//     'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
//     'logo': 'jquery.jpg'
//   },
//   {
//     'title': 'Foundation',
//     'url': 'http://foundation.zurb.com/',
//     'description': 'The most advanced responsive front-end framework in the world.',
//     'logo': 'foundation.png'
//   },
//   {
//     'title': 'Sass (Node)',
//     'url': 'https://github.com/sass/node-sass',
//     'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
//     'logo': 'node-sass.png'
//   }
// ];
// angular.forEach($scope.awesomeThings, function(awesomeThing) {
//   awesomeThing.rank = Math.random();
// });
