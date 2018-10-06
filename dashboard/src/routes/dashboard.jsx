// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import CalendarToday from "@material-ui/icons/CalendarToday";
// core components/views
import DashboardPage from "views/Whiteboard/Whiteboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
// Custom
import CalendarPage from "views/Calendar/index.jsx";

const dashboardRoutes = [
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/whiteboard",
    sidebarName: "Whiteboard",
    navbarName: "Whiteboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/calendar",
    sidebarName: "Semester Calendar",
    navbarName: "Semester Calendar",
    icon: CalendarToday,
    component: CalendarPage
  },
  { redirect: true, path: "/", to: "/whiteboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
