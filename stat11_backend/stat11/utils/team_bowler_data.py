from stat11.models import BowlerScoreboard
from stat11.serializers import BowlerScoreboardNestedSerializer

def get_team_bowler_data(team_id):
    team_bowler_data = []
    teams_bowlers = BowlerScoreboard.objects.filter(team__id=team_id)
    for index,bowlers in enumerate(teams_bowlers):
        serializer = BowlerScoreboardNestedSerializer(bowlers)
        data =serializer.data
        economy = ((bowlers.runs*6)/bowlers.balls)
        bowlerScore = bowlers.wickets*20 + economy*10 + 10*bowlers.maidens
        data['economy'] = economy
        data['bowlerScore'] = bowlerScore
        team_bowler_data.append(data)
    sorted_data = sorted(team_bowler_data, key=lambda x: x['bowlerScore'], reverse=True)
    return (sorted_data)
        