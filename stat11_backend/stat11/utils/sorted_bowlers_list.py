from stat11.models import BowlerScoreboard, Team
from stat11.serializers import BowlerScoreboardNestedSerializer

def get_sorted_bowler_list(match_id):
    sorted_bowler_data = []
    teams = Team.objects.filter(match__id=match_id)
    for i in teams:
        teams_bowlers = BowlerScoreboard.objects.filter(team__id=i.id)
        for index,bowlers in enumerate(teams_bowlers):
            serializer = BowlerScoreboardNestedSerializer(bowlers)
            data =serializer.data
            economy = ((bowlers.runs*6)/bowlers.balls)
            bowlerScore = bowlers.wickets*20 + economy*10 + 10*bowlers.maidens
            data['economy'] = round(economy,2)
            data['bowlerScore'] = bowlerScore
            sorted_bowler_data.append(data)
    sorted_data = sorted(sorted_bowler_data, key=lambda x: x['bowlerScore'], reverse=True)
    return (sorted_data)
        