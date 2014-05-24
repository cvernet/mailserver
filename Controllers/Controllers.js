//
// Gestion des controlleurs
//

//
// Gestion de la navigation 
//
var webmail = angular.module("webmail", ['ui.tinymce']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/Inbox', {templateUrl: 'Views/Inbox.html',   controller: 'MyInbox'}).
      when('/MyInbox', {templateUrl: 'Views/Inbox.html',   controller: 'MyInbox'}).
      when('/Mail', {templateUrl: 'Views/Mail.html', controller: 'Mail'}).      
      when('/NewMail', {templateUrl: 'Views/NewMail.html', controller: 'NewMail'}).      
      when('/Sent', {templateUrl: 'Views/Sent.html', controller: 'Sent'}).                  
      when('/Trash', {templateUrl: 'Views/Trash.html', controller: 'Trash'}).                  
      when('/Help', {templateUrl: 'Views/Help.html', controller: 'Help'}).                  
      when('/Settings', {templateUrl: 'Views/Settings.html',   controller: 'Settings'}).
      otherwise({templateUrl: 'Views/Inbox.html', controller: 'MyInbox'});
}]);

//
//Inbox
//
webmail.controller('Inbox',
function ($scope, $http, $routeParams) {
  $scope.mails = [
  {"from": "Sandra","to": "Cyril","subject": "Tonight","date": "16 may"},
  {"from": "Alex","to": "Cyril2","subject": "Webmail","date": "17 may"},
  {"from": "Guillaume","to": "Cyril","subject": "News","date": "18 may"}
  
  ];                                   
});

//
//MyInbox
//
webmail.controller('MyInbox',
function ($scope, $http, $routeParams) {
  url = 'http://mail-cver.rhcloud.com/imap';
  var promise = $http.get(url).then(function(response) {
	$scope.mails = response.data;
}
	);
                                    
});

//
//Mail
//
webmail.controller('Mail',
function ($scope, $http, $routeParams) {
   $scope.from = "exped@gmail.com";
   $scope.to = "cvernet@gmail.com, matefia@gmail.com";
   $scope.subject = "The best idea !";
   $scope.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis.";
                        
});

//
//NewMail
//
webmail.controller('NewMail',
function ($scope, $http, $routeParams, $location) {          
  		if (tinyMCE.activeEditor) {
			tinyMCE.activeEditor.setContent("");
		}
    
	$scope.optionsTinyMce = {
		language: "fr_FR",
		statusbar: false,
		menubar: false
	};

  $scope.SendMail = function () {
  //Call nodejs server to send mail
  // data = '{"from":"cvernet@gmail.com","to":"cvernet@gmail.com","subject":"' + $scope.subject + '","content":"' + $scope.content + '"}';
    data =  JSON.stringify($scope.mail);
    
    $http.post('http://mail-cver.rhcloud.com/post', data).success(
          function(data) {
      	  });
     
    $location.path( "/Inbox" );
  };
                                     
});

//
//Sent
//
webmail.controller('Sent',
function ($scope, $http, $routeParams) {
                                     
});

//
//Trash
//
webmail.controller('Trash',
function ($scope, $http, $routeParams) {
                                     
});

//
//Help
//
webmail.controller('Help',
function ($scope, $http, $routeParams) {
                                     
});

//
//Settings
//
webmail.controller('Settings',
function ($scope, $http, $routeParams) {
                                     
});