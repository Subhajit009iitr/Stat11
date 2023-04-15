import { BiHomeAlt2, BiLogIn, BiHelpCircle, BiLogOut } from 'react-icons/bi'

const iconSize = 24

const homeBarTabs = [
    {
        icon: <BiHomeAlt2 size={iconSize} color='hint.light'/>,
        text: 'Home'
    },
    {
        icon: <BiLogIn size={iconSize} color='hint.light' />,
        text: 'Login'
    },
    {
        icon: <BiLogOut size={iconSize} color='hint.light' />,
        text: 'Logout'
    },
    {
        icon: <BiHelpCircle size={iconSize} color='hint.light' />,
        text: 'Help'
    }
]

export default homeBarTabs