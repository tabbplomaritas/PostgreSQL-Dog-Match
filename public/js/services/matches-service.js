"use strict"; 

function MatchesService($http) {
  // TODO Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getMatches = () =>{
    return $http({
      method: "GET",
      url: "/portal/matches"
    });
  };


  return {
    getMatches
  };
}

angular
  .module("app")
  .factory("MatchesService", MatchesService);