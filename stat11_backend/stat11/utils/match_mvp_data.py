from stat11.models import Team, BatterScoreboard ,BowlerScoreboard

def get_match_mvp_data(match_id):
    mvp_list = []
    match_teams = Team.objects.filter(match__id=match_id)
    for i in range(0,2):
        team_batter_scoreboard = BatterScoreboard.objects.filter(team__id=match_teams[i].id)
        team_bowler_scoreboard = BowlerScoreboard.objects.filter(team__id=match_teams[i].id)
        for ind, player in enumerate(team_batter_scoreboard):
            obj = {
                'player_id': player.id,
                'playerName':player.player.person.first_name+" "+player.player.person.last_name,
                'team':player.team.name,
                'mvp_score':0,
                'mvp_runs':player.runs/2,
                'mvp_wickets':0,
                'mvp_rungiven':0
            }

            mvp_list.append(obj)

        for ind,player in enumerate(team_bowler_scoreboard):
            got = False
            for i,pl in enumerate(mvp_list):
                if(pl['player_id'] == player.id):
                    pl['mvp_wickets'] = player.wickets
                    pl['mvp_rungiven'] = player.runs
                    got = True
                    break
            if(got == False):
                obj = {
                'player_id': player.id,
                'playerName':player.player.person.first_name+" "+player.player.person.last_name,
                'team':player.team.name,
                'mvp_score':0,
                'mvp_runs':0,
                'mvp_wickets':player.wickets,
                'mvp_rungiven':player.runs
                }
                mvp_list.append(obj)
        for i in mvp_list:
            i['mvp_score']+=i['mvp_wickets']*10-i['mvp_rungiven']/2
    sorted_data = sorted(mvp_list, key=lambda x: x['mvp_score'], reverse=True)
    if(len(sorted_data)>=3):
        top_three = [sorted_data[0],sorted_data[1],sorted_data[2]]
    else:
        top_three=sorted_data
    return (top_three)