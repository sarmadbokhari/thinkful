var app=angular.module("ngMadLibs",["ngAnimate"]);app.controller("madController",function(e){e.master={},e.resetForm=function(){e.madlibs=angular.copy(e.master),e.madForm.$submitted=!1},e.gender="male",e.changeGender=function(){e.gender="male"===e.gender?"female":"male"}});