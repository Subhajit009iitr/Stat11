import { MdOutlineScoreboard, MdSportsCricket, MdLiveTv } from 'react-icons/md'
import { IoAnalytics } from 'react-icons/io5'
import { RiTeamLine } from 'react-icons/ri'

const iconSize = 24

const matchBarTabs = [
    {
        icon: <MdLiveTv size={iconSize} />,
        text: 'Live'
    },
    {
        icon: <MdOutlineScoreboard size={iconSize} />,
        text: 'Scoreboard'
    },
    {
        icon: <IoAnalytics size={iconSize} />,
        text: 'Analysis'
    },
    {
        icon: <RiTeamLine size={iconSize} />,
        text: 'Teams'
    },
    {
        icon: <MdSportsCricket size={iconSize} />,
        text: 'Highlights'
    }
]

export default matchBarTabs