import GitHubIcon from '@material-ui/icons/GitHub';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';



const data = [
    {
        id: 1,
        icon: <GitHubIcon fontSize='large'/>,
        title: 'This Portfolio Page',
        paragraph: 'github.com/sholomperman/portfolio',
        link: 'https://github.com/sholomperman/portfolio'
        
    },
    {
        id: 2,
        icon: <GitHubIcon fontSize='large'/>,
        title: 'My github',
        link: 'https://github.com/sholomperman',
        paragraph: 'GitHub.com/sholomperman'
    },
    {
        id: 3,
        icon: <QueryBuilderIcon fontSize='large'/>,
        title: 'reacrt-clock',
        paragraph: 'https://sholomperman.github.io/reacrt-clock/',
        link: 'https://sholomperman.github.io/reacrt-clock/',
    },
    {
        id: 4,
        icon: <PlaylistAddCheckIcon fontSize='large'/>,
        title: 'To do list',
        paragraph: 'sholomperman.github.io/my-first-to-do-list/',
        link: 'https://sholomperman.github.io/my-first-to-do-list/',
    }
];

export default data