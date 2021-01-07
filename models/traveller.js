const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  // get map of journeys and return journeys.startLocation  
  const start = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return start;
};

Traveller.prototype.getJourneyEndLocations = function () {
  // get map of journeys and return journeys.endLocation
  const end = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return end;
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
