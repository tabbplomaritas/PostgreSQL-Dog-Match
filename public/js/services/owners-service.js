"use strict"; 

function OwnersService($http) {
  // TODO Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getOwners = () =>{
    return $http({
      method: "GET",
      url: "/portal/owners"
    });
  };

  const addOwner = (newOwner) => {
    return $http({
      method: "POST",
      url: "/portal/owners",
      data: newOwner
    });
  };

  const deleteOwner = (id) =>{
    return $http({
      method: "DELETE",
      url: "/portal/owners/" + id
    });
  };

  const updateOwner = (owner) =>{
    return $http({
      method: "PUT",
      url: "/portal/owners/" + owner.owner_id,
      data: owner
    });
  };

  return {
    getOwners,
    addOwner, 
    deleteOwner, 
    updateOwner
  };
}

angular
  .module("app")
  .factory("OwnersService", OwnersService);