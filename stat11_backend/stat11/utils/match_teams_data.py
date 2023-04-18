from stat11.models import Team, BatterScoreboard
from stat11.serializers import TeamNestedSerializer, TeamSerializer

def get_match_team_data(match_id):
    match_teams_data = []
    match_teams = Team.objects.filter(match__id=match_id)

    for team in match_teams:
        team_runs = 0
        team_wickets = 0
        team_batter_scoreboard = BatterScoreboard.objects.filter(team__id=team.id)
        for scoreboard in team_batter_scoreboard:
            team_runs += scoreboard.runs
            if scoreboard.exit_time is not None:
                team_wickets += 1
        serializer = TeamSerializer(team)
        team_data = serializer.data
        team_data['runs'] = team_runs
        team_data['wickets'] = team_wickets
        match_teams_data.append(team_data)

    return (match_teams_data)
        
def segregate_match_and_teams_date_wise(match_and_teams_list):
    segregated_list = []
    temp = []
    date = ''

    if len(match_and_teams_list)>0:
        date = match_and_teams_list[0]['match']['date']

    for match_data in match_and_teams_list:
        if date!=match_data['match']['date']:
            segregated_list.append(temp)
            date = match_data['match']['date']
            temp = [match_data]
        else:
            temp.append(match_data)

    segregated_list.append(temp)
    return segregated_list
        