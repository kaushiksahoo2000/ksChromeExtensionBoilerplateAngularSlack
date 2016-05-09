angular.module('angularSlackChromeExtension.controllers', [])

.controller('IndexCtrl', function($http){

  this.name = '';
  this.submission = '';

  this.submitSlackMessage = function(){
    console.log("this is the slack username and message", this.name, this.submission);
    return $http({
      method: 'POST',
      // url: insert slack incoming webhook url here,
      data: {
        "username": this.name,
        // "icon_url": input slack message avatar image here,
        "text": this.submission
      },
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    .then(function(resp){
      this.name = '';
      this.submission = '';
      console.log(resp);
    });
  }

})
