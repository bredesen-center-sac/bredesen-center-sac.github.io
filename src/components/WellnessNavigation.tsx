"use client"; // Required for shadcn/ui client components

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Define the navigation items based on the provided information
const healthSections = [
  {
    groupLabel: "Student Health Center (SHC)",
    items: [
      { title: "Location & Hours", href: "#shc-location-hours" },
      { title: "Services Provided", href: "#shc-services" },
      { title: "Appointments & Contact", href: "#shc-appointments" },
      { title: "Patient Portal", href: "#shc-portal" },
      { title: "Health Center Costs", href: "#shc-costs" },
      { title: "Pharmacy Services", href: "#shc-pharmacy" },
    ],
  },
  {
    groupLabel: "UT-Sponsored Health Insurance",
    items: [
      { title: "Overview", href: "#insurance-overview" },
      { title: "Referrals", href: "#insurance-referrals" },
      { title: "Eligibility", href: "#insurance-eligibility" },
      { title: "Enrollment & Coverage", href: "#insurance-enrollment" },
      { title: "Graduation & Employment", href: "#insurance-graduation" },
    ],
  },
  {
    groupLabel: "Center for Health Education & Wellness",
    items: [
      { title: "CHEW Overview & Services", href: "#chew" },
    ],
  },
  {
    groupLabel: "Additional Information",
    items: [
      { title: "Best Practices", href: "#best-practices" },
      { title: "Contact Information", href: "#contact-information" },
    ],
  },
];

export function WellnessNavigation() {
  // Determine active section based on URL hash (basic example)
  const [activeHash, setActiveHash] = React.useState("");

  React.useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    // Set initial hash
    handleHashChange(); 
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <Sidebar className="h-auto md:sticky md:top-16 md:max-h-[calc(100vh-4rem)]"> {/* Adjust top to match header height */}
      <SidebarContent>
        {healthSections.map((section) => (
          <SidebarGroup key={section.groupLabel}>
            <SidebarGroupLabel>{section.groupLabel}</SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={activeHash === item.href ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                  >
                    <a href={item.href}>{item.title}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
} 