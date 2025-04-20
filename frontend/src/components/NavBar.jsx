import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference for dark mode on mount
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    
    // Apply dark mode to document if needed
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-full bg-[#F9FAFB] dark:bg-[#0F172A] border-b border-[#E5E7EB] dark:border-[#334155]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-[#4F46E5] dark:text-[#6366F1]">
              Logo
            </span>
          </div>
          
          {/* Desktop Navigation using shadcn NavigationMenu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="#"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="#"
                  >
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 bg-white dark:bg-[#1E293B]">
                      <li>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
                          hover:bg-gray-100 dark:hover:bg-[#334155]"
                          href="#"
                        >
                          <div className="text-sm font-medium text-[#1F2937] dark:text-[#F1F5F9]">Consulting</div>
                          <p className="line-clamp-2 text-sm text-gray-500 dark:text-slate-400">
                            Expert advice and strategies
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
                          hover:bg-gray-100 dark:hover:bg-[#334155]"
                          href="#"
                        >
                          <div className="text-sm font-medium text-[#1F2937] dark:text-[#F1F5F9]">Development</div>
                          <p className="line-clamp-2 text-sm text-gray-500 dark:text-slate-400">
                            Custom software solutions
                          </p>
                        </NavigationMenuLink>  
                      </li>
                      <li>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
                          hover:bg-gray-100 dark:hover:bg-[#334155]"
                          href="#"
                        >
                          <div className="text-sm font-medium text-[#1F2937] dark:text-[#F1F5F9]">Support</div>
                          <p className="line-clamp-2 text-sm text-gray-500 dark:text-slate-400">
                            24/7 technical assistance
                          </p>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="#"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href="#"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex gap-2 items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full text-[#1F2937] dark:text-[#F1F5F9]"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button 
              className="bg-[#4F46E5] hover:bg-indigo-700 dark:bg-[#6366F1] dark:hover:bg-indigo-600 text-white"
            >
              Sign In
            </Button>
          </div>
          
          {/* Mobile menu using Sheet from shadcn */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full text-[#1F2937] dark:text-[#F1F5F9]"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-[#1F2937] hover:bg-gray-100 dark:text-[#F1F5F9] dark:hover:bg-[#334155]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white dark:bg-[#1E293B] border-[#E5E7EB] dark:border-[#334155]">
                <div className="flex flex-col gap-6 py-6">
                  <SheetClose asChild>
                    <Button 
                      variant="link" 
                      className="justify-start px-2 text-[#1F2937] dark:text-[#F1F5F9]"
                      href="#"
                    >
                      Home
                    </Button>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Button 
                      variant="link" 
                      className="justify-start px-2 text-[#1F2937] dark:text-[#F1F5F9]"
                      href="#"
                    >
                      Products
                    </Button>
                  </SheetClose>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="link" 
                        className="justify-start px-2 text-[#1F2937] dark:text-[#F1F5F9]"
                      >
                        Services <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="bg-white dark:bg-[#1E293B] border-[#E5E7EB] dark:border-[#334155]"
                    >
                      <DropdownMenuItem className="text-[#1F2937] dark:text-[#F1F5F9]">
                        <SheetClose asChild>
                          <Button variant="link" className="justify-start p-0 text-[#1F2937] dark:text-[#F1F5F9]">Consulting</Button>
                        </SheetClose>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[#1F2937] dark:text-[#F1F5F9]">
                        <SheetClose asChild>
                          <Button variant="link" className="justify-start p-0 text-[#1F2937] dark:text-[#F1F5F9]">Development</Button>
                        </SheetClose>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[#1F2937] dark:text-[#F1F5F9]">
                        <SheetClose asChild>
                          <Button variant="link" className="justify-start p-0 text-[#1F2937] dark:text-[#F1F5F9]">Support</Button>
                        </SheetClose>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <SheetClose asChild>
                    <Button 
                      variant="link" 
                      className="justify-start px-2 text-[#1F2937] dark:text-[#F1F5F9]"
                      href="#"
                    >
                      About
                    </Button>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Button 
                      variant="link" 
                      className="justify-start px-2 text-[#1F2937] dark:text-[#F1F5F9]"
                      href="#"
                    >
                      Contact
                    </Button>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Button 
                      className="mt-4 bg-[#4F46E5] hover:bg-indigo-700 dark:bg-[#6366F1] dark:hover:bg-indigo-600 text-white"
                    >
                      Sign In
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}