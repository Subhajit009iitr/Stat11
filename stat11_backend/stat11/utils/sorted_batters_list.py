from stat11.models import BatterScoreboard,Team
from stat11.serializers import BatterScoreboardNestedSerializer

def get_sorted_batter_list(match_id):
    sorted_batter_data = []
    teams = Team.objects.filter(match__id=match_id)
    for i in teams:
        teams_batters = BatterScoreboard.objects.filter(team__id=i.id)
        for index, batters in enumerate(teams_batters):
            serializer = BatterScoreboardNestedSerializer(batters)
            data =serializer.data
            strike_rate = 0.00
            if batters.balls!=0:
                strike_rate = round((batters.runs/batters.balls)*100,2)
            data['strike_rate'] = strike_rate
            sorted_batter_data.append(data)
    sorted_data = sorted(sorted_batter_data, key=lambda x: x['strike_rate'], reverse=True)
    return (sorted_data)