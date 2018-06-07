"use strict"; 

const dogs = {

template:`
  <section>
    <section ng-repeat="dog in $ctrl.dogs">  

      <input ng-blur="$ctrl.updateDog(dog);" ng-model="dog.dog_name"> 
      <input ng-blur="$ctrl.updateDog(dog);" ng-model="dog.dog_age"> 
      <input ng-blur="$ctrl.updateDog(dog);" ng-model="dog.dog_breed"> 
      <input ng-blur="$ctrl.updateDog(dog);" ng-model="dog.dog_colors"> 
      <input ng-blur="$ctrl.updateDog(dog);" ng-model="dog.fav_stuff"> 
      
    <button ng-click="$ctrl.deleteDog(dog.id)">Remove Dogs</button>
    </section>

    <form ng-submit="$ctrl.addDog($ctrl.newDog)">
      <input ng-model="$ctrl.newDog.dog_name"> 
      <input ng-model="$ctrl.newDog.dog_age"> 
      <input ng-model="$ctrl.newDog.dog_breed"> 
      <input ng-model="$ctrl.newDog.dog_colors"> 
      <input ng-model="$ctrl.newDog.fav_stuff"> 

      <button>Add Dog</button>
    </form>

  </section>
`, 


controller: ["DogService", function(DogService){
  const vm = this; 

  DogService.getDogs().then((response) => {
      vm.dogs=response.data; 
      console.log(vm.dogs); 
  });

  vm.addDog = (newDog) => {
    DogService.addDog(newDog).then((response) => {
      vm.dogs = response.data; 
      console.log()
    });
  };

  vm.deleteDog = (id) => {
    DogService.deleteDog(id).then((response =>{
      vm.dogs = response.data;
    })
  )};

}]



}; 

angular 
  .module("app")
  .component("dogs", dogs); 