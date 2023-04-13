import { BiHomeAlt2, BiLogIn, BiHelpCircle, BiLogOut } from 'react-icons/bi'

const iconSize = 24

const homeBarTabs = [
    {
        icon: <BiHomeAlt2 size={iconSize} />,
        text: 'Home'
    },
    {
        icon: <BiLogIn size={iconSize} />,
        text: 'Login'
    },
    {
        icon: <BiLogOut size={iconSize} />,
        text: 'Logout'
    },
    {
        icon: <BiHelpCircle size={iconSize} />,
        text: 'Help'
    }
]

export default homeBarTabs