"use strict";
const matches = {
  
  template: `
  <section>
  <h1>It's a match!</h1>
    <section class="dogMatches" ng-repeat="match in $ctrl.matches">
      <h2>{{}}</h2>
      <p>Human named:{{match.owner_name}}</p> 
      <p>Is a great match with : {{match.dog_name}}</p> 
      <p>Because they both love: {{match.fav_stuff}}</p> 
      
    </section>


  
  </section>
  `,
  controller: ["MatchesService", function(MatchesService) {
    const vm = this;
    // TODO Call the StudentService to retrieve the list of the students
    MatchesService.getMatches().then((response) =>{
      vm.matches = response.data;
      console.log(vm.matches);
    });

    
  }]
};

angular
  .module("app")
  .component("matches", matches);