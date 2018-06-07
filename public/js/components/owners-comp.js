"use strict";
const owners = {
  // owner_name, owner_address, owner_age, dog_name, fav_stuff
  template: `
  <section>
    <section ng-repeat="owner in $ctrl.owners">

      <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.owner_name"> 
      <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.owner_address"> 
      <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.owner_age"> 
      <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.current_dog_name"> 
      <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.fav_stuff"> 

      <button ng-click="$ctrl.deleteOwner(owner.owner_id)">Remove Owner</button>
    </section>

    <form ng-submit="$ctrl.addOwner($ctrl.newOwner);">
      <label>Name</label>
      <input ng-model="$ctrl.newOwner.owner_name"> 
      <label>Address</label>
      <input ng-model="$ctrl.newOwner.owner_address"> 
      <label>Age</label>
      <input ng-model="$ctrl.newOwner.owner_age"> 
      <label>Dog's name</label>
      <input ng-model="$ctrl.newOwner.current_dog_name"> 
      <label>Fav Stuff</label>
      <input ng-model="$ctrl.newOwner.fav_stuff"> 
      <button>Add New Owner</button>
    </form>
  
  </section>
  `,
  controller: ["OwnersService", function(OwnersService) {
    const vm = this;
    // TODO Call the StudentService to retrieve the list of the students
    OwnersService.getOwners().then((response) =>{
      console.log(response);
      vm.owners = response.data;
    });

    vm.addOwner = (newOwner) => {
      console.log("addOwner button working");
      OwnersService.addOwner(newOwner).then((response) => {
        console.log("addOwner service method working");
        
        vm.owners = response.data;
        
        });
      vm.newOwner = {};
    };

    vm.deleteOwner = (id) => {

      OwnersService.deleteOwner(id).then((response =>{
        vm.owners = response.data;
      })
    )};

    vm.updateOwner = (id) => {
        OwnersService.updateOwner(id).then((response =>{
        vm.owners = response.data;
      })
    )};



  }]
};

angular
  .module("app")
  .component("owners", owners);