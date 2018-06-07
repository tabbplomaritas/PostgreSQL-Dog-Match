"use strict"; 

function DogService($http) {
  // TODO Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getDogs = () =>{
    return $http({
      method: "GET",
      url: "/portal/dogs"
    });
  };

  const addDog = (newDog) =>{
    return $http({
      method:"POST", 
      url:"/portal/dogs", 
      data: newDog
    });
  };

  const deleteDog = (id) =>{
    return $http({
      method:"DELETE", 
      url:"/portal/dogs/" +id, 
    });
  };

  return {
    getDogs, 
    addDog, 
    deleteDog
  };
}

angular
  .module("app")
  .factory("DogService", DogService);