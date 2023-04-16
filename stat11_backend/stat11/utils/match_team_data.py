from stat11.models import Team, BatterScoreboard
from stat11.serializers import TeamNestedSerializer

def get_match_team_data(match_id):
    match_team_data = []
    match_teams = Team.objects.filter(match__id=match_id)
    
    # print(match_teams)
    # for i in match_teams:
    #     print(vars(i))
    for index, team in enumerate(match_teams):
        team_runs = 0
        team_extras = 0
        team_batter_scoreboard = BatterScoreboard.objects.filter(team__id=team.id)
        for scoreboard in team_batter_scoreboard:
            team_runs += scoreboard.runs
        serializer = TeamNestedSerializer(team)
        data = serializer.data
        data['team_runs'] = team_runs
        team_extras=team.noball+team.wide+team.bye+team.legbye
        data['team_extras'] = team_extras
        match_team_data.append(data)
    return (match_team_data)
        