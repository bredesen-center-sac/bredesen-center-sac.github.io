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
  {
    title: "Financial Aid",
    href: "/resources/financial",
    description: "Scholarships, grants, financial planning, and emergency assistance."
  },
  {
    title: "Career Services",
    href: "/resources/career",
    description: "Career counseling, internships, job placement, and professional development."
  },
  {
    title: "Campus Resources",
    href: "/resources/campus",
    description: "Dining, housing, transportation, and other campus facilities."
  },
  {
    title: "International Student Resources",
    href: "/resources/international",
    description: "Support, services, and information for international students."
  }
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
              <NavigationMenuTrigger>Student Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
      
      {/* Right Group: University of Tennessee Link */}
      <div className="flex items-center">
        <a 
          href="https://www.utk.edu" 
          className="text-sm text-ut-smokey hover:text-ut-orange transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Tennessee
        </a>
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