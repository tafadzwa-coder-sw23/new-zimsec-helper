import { Home, BookOpen, FileText, ClipboardList, Brain, Layers, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Subjects", url: "/subjects", icon: BookOpen },
  { title: "Practice Exams", url: "/exams", icon: FileText },
  { title: "Past Papers", url: "/past-papers", icon: ClipboardList },
  { title: "Flashcards", url: "/flashcards", icon: Layers },
  { title: "Tutor", url: "/tutor", icon: Brain },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">ZIMSEC Success</h1>
            <p className="text-xs text-muted-foreground">Your Learning Journey</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <div className="mx-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-4 border border-primary/20">
            <p className="text-xs font-medium text-foreground mb-1">💪 Stay Motivated!</p>
            <p className="text-xs text-muted-foreground">
              Every small step forward is progress. You've got this!
            </p>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-primary-foreground">
            S
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Student</p>
            <p className="text-xs text-muted-foreground truncate">student@zimsec.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
