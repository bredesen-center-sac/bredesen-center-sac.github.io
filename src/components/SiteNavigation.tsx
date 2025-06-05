import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react" // Assuming lucide-react is installed for icons
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "PhD Timeline",
    href: "/resources/phd-timeline",
    description: "A guide to the Bredesen Center PhD journey milestones."
  },
  {
    title: "Health & Wellness",
    href: "/resources/wellness",
    description: "Student health services, insurance, and wellness programs."
  },
  // {
  //   title: "Financial Aid",
  //   href: "/resources/financial",
  //   description: "Scholarships, grants, financial planning, and emergency assistance."
  // },
  // {
  //   title: "Career Services",
  //   href: "/resources/career",
  //   description: "Career counseling, internships, job placement, and professional development."
  // },
  // {
  //   title: "Campus Resources",
  //   href: "/resources/campus",
  //   description: "Dining, housing, transportation, and other campus facilities."
  // },
  // {
  //   title: "International Student Resources",
  //   href: "/resources/international",
  //   description: "Support, services, and information for international students."
  // }
]

export function SiteNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Left and Center Group: Logo/Title and Main Navigation */}
      <div className="flex items-center">
        <div className="mr-4 flex"> {/* Original Logo and Site Title Container */}
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="h-6 w-6 rounded bg-ut-orange"></div>
            <span className="hidden font-bold sm:inline-block text-ut-smokey">
              Student Advisory Council
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation Menu (hidden on md and below) */}
        <div className="hidden md:flex">
          <NavigationMenu dir="ltr" viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
                  About SAC
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/members">
                  Council Members
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/events">
                  Events & Calendar
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/contact">
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/announcements">
                  Announcements
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Student Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      
      {/* Right Group: University Link and Mobile Menu Trigger */}
      <div className="flex items-center gap-4">
        {/* University of Tennessee Link (hidden on xs) */}
        <a 
          href="https://www.utk.edu" 
          className="text-sm text-ut-smokey hover:text-ut-orange transition-colors hidden sm:block"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Tennessee
        </a>

        {/* Mobile Menu Trigger (visible on md and below) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-4">
                <SheetTitle>
                  <a className="flex items-center space-x-2" href="/">
                    <div className="h-6 w-6 rounded bg-ut-orange"></div>
                    <span className="font-bold text-ut-smokey">SAC</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-1 p-2">
                <a href="/" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium">Home</a>
                <a href="/about" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium">About SAC</a>
                <a href="/members" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium">Council Members</a>
                <a href="/events" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium">Events & Calendar</a>
                <a href="/contact" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium">Contact Us</a>
                <a href="/announcements" className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium">Announcements</a>
                
                <div className="pt-3">
                  <h3 className="mb-1 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Student Resources</h3>
                  <div className="flex flex-col space-y-1">
                    {components.map((component) => (
                      <a 
                        key={component.title} 
                        href={component.href}
                        className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium"
                      >
                        {component.title}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="pt-3 sm:hidden">
                   <a 
                    href="https://www.utk.edu" 
                    className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Tennessee
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}) 