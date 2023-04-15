from stat11.models import Team, BatterScoreboard
from stat11.serializers import TeamNestedSerializer

def get_match_team_data(match_id):
    match_team_data = []
    match_teams = Team.objects.filter(match__id=match_id)
    for index, team in enumerate(match_teams):
        team_runs = 0
        team_batter_scoreboard = BatterScoreboard.objects.filter(team__id=team.id)
        for scoreboard in team_batter_scoreboard:
            team_runs += scoreboard.runs
        serializer = TeamNestedSerializer(team)
        print(serializer.data)
        # match_team_data[f'team{index}'] = 
        