import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { BlogSection } from "./sections/BlogSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";

export const PepperlylBlogs = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Navigation menu items
  const navItems = [
    { name: "Home", active: false },
    { name: "Shop", active: false },
    { name: "Explore NFTs", active: false },
    { name: "Blog", active: true },
  ];

  // Sidebar menu items
  const sidebarItems = [
    { name: "Home", icon: "https://res.cloudinary.com/da8ptobvx/image/upload/v1752509820/dasboard_qco5fs.png", active: true },
    { name: "My Blogs", icon: "https://res.cloudinary.com/da8ptobvx/image/upload/v1752510078/Document_pkgusp.png", active: false },
    { name: "Rewards", icon: "https://res.cloudinary.com/da8ptobvx/image/upload/v1752510302/donate_j7nnbe.png", active: false },
  ];

  return (
    <div className="w-full min-h-screen bg-[#04011c] overflow-x-hidden">
      <div className="relative w-full">
        {/* Background gradient effect */}
        <div className="absolute w-[1510px] h-[1510px] top-[313px] left-[313px] rounded-[754.98px] -rotate-45 blur-[250px] [background:conic-gradient(from_180deg_at_50%_50%,rgba(217,217,217,0.2)_0%,rgba(41,127,255,0.2)_0%,rgba(191,56,255,0.2)_22%,rgba(207,104,255,0.2)_52%,rgba(40,203,255,0.2)_74%,rgba(225,161,255,0.2)_100%)] hidden lg:block" />

        {/* Header navigation */}
        <header className="relative flex items-center justify-between px-4 lg:px-10 py-4 lg:py-6 z-10">
          <div className="flex items-center gap-4 lg:gap-14">
            {/* Logo */}
            <img className="w-[150px] lg:w-[234px] h-8 lg:h-12" alt="Logo" src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753010273/Logo_x9i4zz.png" />

            {/* Navigation menu */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="flex items-center gap-4">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <div className="flex flex-col items-start gap-1.5">
                      <div
                        className={`${item.active ? "" : "font-light"} [font-family:'Inter',Helvetica] text-[#ffffff] text-lg`}
                      >
                        {item.name}
                      </div>
                      <div
                        className={`${item.active ? "bg-[#5f00ff]" : ""} w-full h-0.5 rounded-lg`}
                        style={{
                          width:
                            item.name === "Home"
                              ? "51px"
                              : item.name === "Shop"
                                ? "45px"
                                : item.name === "Explore NFTs"
                                  ? "111px"
                                  : "39px",
                        }}
                      />
                    </div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-4">
            {/* Search bar */}
            <img className="h-12" src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753010606/Frame_1000001333_es4oul.png" alt="Search Product" />

            {/* Action buttons */}
            <img
              className="w-16 h-16"
              alt="Group"
              src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png"
            />
            <img
              className="w-16 h-16"
              alt="Group"
              src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753011004/Group_1000004362_plrxgo.png"
            />

            {/* User profile */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="w-14 h-14">
                  <AvatarImage src="..//avatar-1.png" alt="User avatar" />
                  <AvatarFallback>UP</AvatarFallback>
                </Avatar>
                <div className="[font-family:'Sora',Helvetica] font-normal text-darkmodaltext text-lg text-center tracking-[0.60px] leading-6">
                  Hi, Precious
                </div>
              </div>
              <div className="w-8 h-8 relative">
                <img
                  className="absolute w-4 h-2.5 top-3 left-[9px]"
                  alt="Vector"
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753011152/u_angle-down_nu4wde.png"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#04011c] z-50 p-4">
            <div className="flex items-center justify-between mb-8">
              <img className="w-[150px] h-8" alt="Logo" src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753010273/Logo_x9i4zz.png" />
              <button
                className="p-2 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col items-start gap-1.5">
                  <div
                    className={`${item.active ? "font-semibold" : "font-light"} [font-family:'Inter',Helvetica] text-[#ffffff] text-xl`}
                  >
                    {item.name}
                  </div>
                  <div
                    className={`${item.active ? "bg-[#5f00ff]" : ""} w-full h-0.5 rounded-lg`}
                    style={{
                      width:
                        item.name === "Home"
                          ? "51px"
                          : item.name === "Shop"
                            ? "45px"
                            : item.name === "Explore NFTs"
                              ? "111px"
                              : "39px",
                    }}
                  />
                </div>
              ))}
            </nav>
            
            <div className="mt-8">
              <img className="h-12 mb-6" src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753010606/Frame_1000001333_es4oul.png" alt="Search Product" />
              
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="..//avatar-1.png" alt="User avatar" />
                  <AvatarFallback>UP</AvatarFallback>
                </Avatar>
                <div className="[font-family:'Sora',Helvetica] font-normal text-darkmodaltext text-lg">
                  Hi, Precious
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 ml-4 lg:ml-10 mt-4 lg:mt-8">
          <div className="opacity-50 [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-base leading-[21px]">
            Home
          </div>
          <img
            className="w-[6.89px] h-[12.21px] object-cover"
            alt="Line"
            src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753011481/Line_13_icvztn.png"
          />
          <div className="[font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-[21px]">
            Blogs
          </div>
        </div>

        {/* Separator line */}
        <Separator className="h-2 lg:h-3 mt-4 bg-[linear-gradient(156deg,rgba(30,27,70,1)_0%,rgba(71,81,114,0.58)_100%)]" />

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row mt-4">
          {/* Sidebar */}
          <aside className="w-full lg:w-[271px] bg-[#0b1023] lg:rounded-[0px_16px_16px_0px] p-4 lg:p-6">
            <div className="flex lg:flex-col gap-4 lg:gap-0 overflow-x-auto lg:overflow-x-visible">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 lg:gap-4 p-3 lg:p-4 mb-0 lg:mb-6 rounded-2xl whitespace-nowrap ${item.active ? "bg-[#5f00ff]" : ""}`}
              >
                <img
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  alt={`Icon ${item.name}`}
                  src={item.icon}
                />
                <div
                  className={`[font-family:'Inter',Helvetica] font-medium text-[#ffffff] ${item.active ? "text-lg lg:text-xl" : "text-base lg:text-lg"}`}
                >
                  {item.name}
                </div>
              </div>
            ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 bg-[#0b1023]">
            {/* Blog section */}
            <BlogSection />

            {/* Token promotion section */}
            <div className="relative mt-8 px-4 lg:px-6">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-[68px] h-[63.08px]">
                      <div className="absolute w-[55px] h-[55px] top-1 left-1.5 bg-[#222a46] rounded-[27.45px]" />
                      <img
                        className="absolute w-[68px] h-[63px] top-0 left-0"
                        alt="Neon border circle"
                        src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png"
                      />
                      <img
                        className="absolute w-5 h-5 top-[22px] left-[21px]"
                        alt="Image"
                        src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png"
                      />
                    </div>
                    <div className="[font-family:'Sora',Helvetica] font-normal text-text text-base text-center tracking-[0] leading-6 w-[134px]">
                      Create Blogs &amp; Win Free Tokens
                    </div>
                  </div>

                  <div className="[font-family:'Sora',Helvetica] font-semibold text-text text-2xl lg:text-[32px] tracking-[1.28px] leading-[40px] lg:leading-[60px] mb-4">
                    Win Free $HPVQ TOKEN
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex flex-col items-start gap-1">
                      <div className="[font-family:'Sora',Helvetica] font-normal text-text text-base text-center tracking-[0] leading-6">
                        Check Reward Stat
                      </div>
                      <img
                        className="w-[81px] h-px object-cover"
                        alt="Line"
                        src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753012617/Line_5_gmh04h.png"
                      />
                    </div>
                    <img
                      className="w-6 h-6"
                      alt="Icons arrow right"
                      src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753012505/icons_arrow-right_ihty0h.png"
                    />
                  </div>

                  <img
                    className="w-[110px] h-3.5 mt-2"
                    alt="Frame"
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1753012713/Frame_883_ee8bil.png"
                  />
                </div>

                <div className="relative hidden lg:block">
                  <img
                    className="w-[97px] h-[357px]"
                    alt="Vector"
                    src="/vector-317.svg"
                  />
                  <img
                    className="absolute w-24 h-[357px] top-0 left-[15px]"
                    alt="Vector"
                    src="/vector-316.svg"
                  />
                  <div className="absolute top-[99px] left-[162px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(35,35,35,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Sora',Helvetica] font-bold text-transparent text-[160px] tracking-[6.40px] leading-[60px] whitespace-nowrap">
                    $HPVQ
                  </div>
                  <div className="absolute top-[168px] left-[319px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(43,43,43,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Sora',Helvetica] font-bold text-transparent text-8xl tracking-[3.84px] leading-[60px] whitespace-nowrap">
                    Token
                  </div>
                  <img
                    className="absolute w-[328px] h-[280px] top-[47px] left-[466px]"
                    alt="Rocket"
                    src="/vecteezy-ai-generated-3d-flying-rocket-png-isolated-on-transpare.png"
                  />
                  <img
                    className="absolute w-[649px] h-[310px] top-0 left-0 object-cover"
                    alt="Glowing neon spiral"
                    src="/vecteezy-glowing-neon-spiral-circle-realistic-round-light-flares.png"
                  />
                </div>
              </div>
              
              {/* Mobile token visual */}
              <div className="lg:hidden mt-8 text-center">
                <div className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(35,35,35,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Sora',Helvetica] font-bold text-transparent text-6xl tracking-[2.4px] leading-[60px]">
                  $HPVQ
                </div>
                <div className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(43,43,43,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Sora',Helvetica] font-bold text-transparent text-4xl tracking-[1.6px] leading-[60px]">
                  Token
                </div>
              </div>
            </div>

            {/* User profile section */}
            <UserProfileSection />
          </main>
        </div>
      </div>
    </div>
  );
};
