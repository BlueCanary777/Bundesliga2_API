var app = function(){
  //request api_data
  var url = "http://api.football-data.org/v1/competitions/453/leagueTable";

  makeRequest(url, requestComplete);
  //assign api_data to variable
  //check that dat has been obtained in object form by using console.log
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !==200) return;
  var jsonString = this.responseText;
  var leagueData = JSON.parse(jsonString);
  output(leagueData);
  //populateList(leagueData);
  // console.log(leagueData.standing[0]);
}

var output = function(leagueData) {
  var teamNames = [];
  var gFor = [];
  var gAgainst = [];
  leagueData.standing.forEach(function(item) {
    teamNames.push(item.teamName),
    gFor.push(item.goals),
    gAgainst.push(item.goalsAgainst)
    console.log(`name: ${item.teamName} + goals for: ${item.goals} + goals against: ${item.goalsAgainst}`);
  })
}

// var columnTitle = 'Bundesliga2 Goals'
//
// var columnSeries = [{
//   name: item.teamName,
//   data: [item.goals, item.goalsAgainst]
// }];
//
// var columnCategories = ['Goals For', 'Goals Against'];

window.addEventListener('load', app);
