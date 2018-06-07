"use strict"; 

function DogService($http) {
  // TODO Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getDogs = () =>{
    return $http({
      method: "GET",
      url: "/portal/dogs"
    });
  };

  return {
    getDogs
  };
}

angular
  .module("app")
  .factory("DogService", DogService);