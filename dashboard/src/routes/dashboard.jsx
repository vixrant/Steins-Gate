// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import CalendarToday from "@material-ui/icons/CalendarToday";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
// Custom
import CalendarPage from "views/Calendar/index.jsx";

const dashboardRoutes = [
  {
    path: "/whiteboard",
    sidebarName: "Whiteboard",
    navbarName: "Whiteboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
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
