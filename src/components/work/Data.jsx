import Skillhive from "../../assets/SkillHive.jpg";
import ez from "../../assets/ez.jpg";
import ez1 from "../../assets/ez1.jpg";
import ez2 from "../../assets/ez2.jpg";



export const projectsData = [
    {
        id: 1,
        image: Skillhive,
        title: "SkillHive Home Services",
        category: "web",
        description: "A home services platform for booking verified professionals.\
        There are seprate website for Workers and Admins for easy management of the platform.\
        The website is built using React for the frontend and Node.js with Express for the backend,\
        and Firebase and Supabase for the database.   ",
        demoLink: "https://skillhives.co.in",
        repoLink: "https://github.com/Rohan-60/loc-serv.git",
    },
    {
        id: 2,
        image: ez,
        gallery: [ez, ez1, ez2],
        title: "Professional Operations Management System\
        for Logistics & Storage Excellence",
        category: "web",
        description: "A web-based warehouse management system built using React.js and Supabase,\
        featuring a Kanban-style task board with drag-and-drop functionality. \
        Designed to handle real-time updates and improve task organization through an interactive\
        user interface.",
        repoLink: "https://github.com/Rohan-60/EZSTORAGE2.git",

    },
    /*{
        id: 3,
        image: work3,
        title: "Brand design",
        category: "design",
    },
    {
        id: 4,
        image: work4,
        title: "App movil",
        category: "app",
    },
    {
        id: 5,
        image: work5,
        title: "Web design",
        category: "web",
    },*/
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
]