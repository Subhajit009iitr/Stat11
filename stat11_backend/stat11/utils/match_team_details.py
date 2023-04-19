from stat11.models import Team, BatterScoreboard
from stat11.serializers import TeamNestedSerializer

def get_match_team_details(match_id):
    match_team_data = []
    match_teams = Team.objects.filter(match__id=match_id)

    for index, team in enumerate(match_teams):
        team_runs = 0
        team_wickets = 0
        team_extras = 0
        team_balls = 0
        team_batter_scoreboard = BatterScoreboard.objects.filter(team__id=team.id)
        for scoreboard in team_batter_scoreboard:
            team_balls += scoreboard.balls
            team_runs += scoreboard.runs
            if scoreboard.exit_time is not None:
                team_wickets += 1
        serializer = TeamNestedSerializer(team)
        data = serializer.data
        team_extras=team.no_ball+team.wide+team.bye+team.legbye
        data['team_runs'] = team_runs + team_extras
        data['team_extras'] = team_extras
        data['team_wickets'] =  team_wickets
        team_current_overs = team_balls//6
        team_current_over_balls = team_balls%6
        data['team_current_overs'] = team_current_overs
        data['team_current_over_balls'] = team_current_over_balls
        match_team_data.append(data)
    return (match_team_data)
