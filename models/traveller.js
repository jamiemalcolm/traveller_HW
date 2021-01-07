const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  // get map of journeys and return journeys.startLocation  
  
};

Traveller.prototype.getJourneyEndLocations = function () {
  // get map of journeys and return journeys.endLocation
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  // filter journeys return new array 
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  // filter journeys return new array
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // reduce on journeys 
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
