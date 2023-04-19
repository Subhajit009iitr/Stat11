from stat11.models import BatterScoreboard
from stat11.serializers import BatterScoreboardNestedSerializer

def get_team_batter_list(team_id):
    team_batter_data = []
    teams_batters = BatterScoreboard.objects.filter(team__id=team_id)
    for index,batters in enumerate(teams_batters):
        serializer = BatterScoreboardNestedSerializer(batters)
        data =serializer.data
        strike_rate = round((batters.runs/batters.balls)*100,2)
        data['strike_rate'] = strike_rate
        team_batter_data.append(data)
    sorted_data = sorted(team_batter_data, key=lambda x: x['strike_rate'], reverse=True)
    return (sorted_data)
        