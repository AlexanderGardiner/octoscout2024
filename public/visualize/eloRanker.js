// Function to calculate expected outcome based on Elo ratings
function expectedOutcome(team1_elo, team2_elo) {
  return 1 / (1 + Math.pow(10, (team2_elo - team1_elo) / 400));
}

// Function to update Elo ratings after a match
function updateElo(winner_elo, loser_elo, numberOfMatches) {
  let k;
  if (numberOfMatches < 10) {
    k = 60;
  } else if (numberOfMatches < 20) {
    k = 50;
  } else if (numberOfMatches < 40) {
    k = 60;
  } else {
    k = 40;
  }

  const expected_winning_prob = expectedOutcome(winner_elo, loser_elo);
  const actual_winning_prob = loser_elo / winner_elo; // Assuming the winner always wins for simplicity

  const winner_elo_new =
    winner_elo + k * (actual_winning_prob - expected_winning_prob);
  const loser_elo_new =
    loser_elo + k * (1 - actual_winning_prob - (1 - expected_winning_prob));

  return [winner_elo_new, loser_elo_new];
}

function calculateElos(data) {
  let eloTeams = {};
  let teamNames = [];
  console.log("ELOTEAMS" + JSON.stringify(eloTeams));
  dataKeys = Object.keys(data);

  for (let i = 0; i < data.length; i++) {
    if (
      !teamNames.includes(data[i]["01teamNumber"]) &&
      data[i]["01teamNumber"] != undefined
    ) {
      console.log(data[i]["01teamNumber"]);
      teamNames.push(data[i]["01teamNumber"]);
    }
  }
  console.log("ELOTEAMS" + JSON.stringify(eloTeams));

  for (let i = 0; i < teamNames.length; i++) {
    eloTeams[teamNames[i]] = 1200;
  }

  console.log("ELOTEAMS" + JSON.stringify(eloTeams));

  for (let i = 0; i < data.length; i++) {
    let [winner_elo_new, loser_elo_new] = [0, 0];

    // Update Elo ratings of the winner and loser
    if (
      eloTeams[data[i]["24bestTeamInput"]] != null &&
      eloTeams[data[i]["25middleTeamInput"]] == null
    ) {
      [winner_elo_new, loser_elo_new] = updateElo(
        eloTeams[data[i]["24bestTeamInput"]],
        eloTeams[data[i]["25middleTeamInput"]],
        i
      );

      eloTeams[data[i]["24bestTeamInput"]] = winner_elo_new;
      eloTeams[data[i]["25middleTeamInput"]] = loser_elo_new;
    }

    if (
      eloTeams[data[i]["24bestTeamInput"]] != null &&
      eloTeams[data[i]["26worstTeamInput"]] == null
    ) {
      [winner_elo_new, loser_elo_new] = updateElo(
        eloTeams[data[i]["24bestTeamInput"]],
        eloTeams[data[i]["26worstTeamInput"]],
        i
      );

      eloTeams[data[i]["24bestTeamInput"]] = winner_elo_new;
      eloTeams[data[i]["26worstTeamInput"]] = loser_elo_new;
    }

    if (
      eloTeams[data[i]["25middleTeamInput"]] != null &&
      eloTeams[data[i]["26worstTeamInput"]] == null
    ) {
      [winner_elo_new, loser_elo_new] = updateElo(
        eloTeams[data[i]["25middleTeamInput"]],
        eloTeams[data[i]["26worstTeamInput"]]
      );
      eloTeams[data[i]["25middleTeamInput"]] = winner_elo_new;
      eloTeams[data[i]["26worstTeamInput"]] = loser_elo_new;
    }
  }
  console.log("ELOTEAMS" + JSON.stringify(eloTeams));
  return eloTeams;
}
