var config = {
    apiKey: "AIzaSyDfWx2aIVOovJrvCcAqc3WwuPQrnbNnvAM",
    authDomain: "astrid-9940d.firebaseapp.com",
    databaseURL: "https://astrid-9940d.firebaseio.com",
    projectId: "astrid-9940d",
    storageBucket: "astrid-9940d.appspot.com",
    messagingSenderId: "974654352301"
    };
  firebase.initializeApp(config);
var database = firebase.database();

  angular.module('starter.controllers', [])
  .controller("registroctrl", function($scope){

    $scope.user={}

    $scope.registro=function(x) {
      $scope.user=x;
      firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(data){
         database.ref('users/' + data.user.uid).set({
        email: $scope.user.email, 
         username: $scope.user.name
     });
      }).catch(function(error){
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      alert("usuario registrado");
        });
      };
  })

.controller("registro",function($scope){

  })

.controller("loginctrl",function($scope){
  $scope.usuario = {};
  $scope.inicio = function(y){
    $scope.usuario = y;
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  //body...
  }
})