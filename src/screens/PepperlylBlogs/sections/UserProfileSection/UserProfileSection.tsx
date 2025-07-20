import { PlusIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const UserProfileSection = (): JSX.Element => {
  // Blog category data
  const categories = [
    { name: "All", count: 100, active: true },
    { name: "E-commerce", count: 10, active: false },
    { name: "Cryptocurrency", count: 20, active: false },
    { name: "NFTs", count: 30, active: false },
    { name: "Blockchain", count: 40, active: false },
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      category: "E-commerce",
      title: "Top 5 E-commerce Innovations to Watch in 2025",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
    {
      id: 2,
      category: "E-commerce",
      title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image-2.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
    {
      id: 3,
      category: "Cryptocurrency",
      title: "Top Benefits of Using Crypto for Everyday Shopping",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image-4.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
    {
      id: 4,
      category: "Cryptocurrency",
      title: "How CheetahHPVQ Simplifies Secure Crypto Transactions",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image-6.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
    {
      id: 5,
      category: "E-commerce",
      title: "Top 5 E-commerce Innovations to Watch in 2025",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image-8.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
    {
      id: 6,
      category: "E-commerce",
      title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image-10.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
    {
      id: 7,
      category: "Cryptocurrency",
      title: "Top Benefits of Using Crypto for Everyday Shopping",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image-12.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
    {
      id: 8,
      category: "Cryptocurrency",
      title: "How CheetahHPVQ Simplifies Secure Crypto Transactions",
      excerpt: "In today's digital-first world, web applications ... ",
      image: "/placeholder---image-14.png",
      author: {
        name: "Jacob Jones",
        avatar: "/placeholder---image-15.png",
        date: "11 Jan 2022",
      },
      engagement: { likes: 22, comments: 22, shares: 22 },
    },
  ];

  // Pagination data
  const paginationItems = [1, 2, 3, 4, 5, 6, 7, 18];

  return (
    <section className="w-full py-6 lg:py-8 px-4 lg:px-6 bg-[#ffffff03] rounded-[32px_32px_16px_16px] border border-solid border-[#ffffff14] backdrop-blur-[20.5px]">
      <div className="flex flex-col gap-6 lg:gap-8 max-w-[1133px] mx-auto">
        {/* Header with title, filters and create button */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 w-full lg:w-auto">
            <h2 className="font-['Sora',Helvetica] font-semibold text-[#ffffff] text-xl lg:text-2xl">
              Blogs
            </h2>

            <Tabs defaultValue="all" className="w-full lg:w-auto">
              <TabsList className="bg-[#ffffff03] rounded-[32px] shadow-[inset_0px_1px_9.3px_1px_#ffffff29] p-1.5 h-auto flex-wrap lg:flex-nowrap overflow-x-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.name.toLowerCase()}
                    value={category.name.toLowerCase()}
                    className={`px-3 lg:px-6 py-2 lg:py-3 rounded-[28px] text-sm lg:text-xl whitespace-nowrap ${
                      category.active
                        ? "bg-[linear-gradient(180deg,rgba(76,140,255,0.16)_0%,rgba(113,66,221,0.16)_100%)] text-[#d9d9d9] font-medium relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[28px] before:[background:linear-gradient(139deg,rgba(29,123,255,1)_0%,rgba(113,66,221,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]"
                        : "bg-transparent text-[#6f7587] font-normal"
                    }`}
                  >
                    {category.name}({category.count})
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <Button className="bg-[#5f00ff] text-white rounded-lg h-12 lg:h-[66px] px-6 lg:px-10 w-full lg:w-auto">
            <PlusIcon className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
            <span className="font-['Sora',Helvetica] font-semibold text-sm lg:text-base">
              Create Blog
            </span>
          </Button>
        </header>

        {/* Blog grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-[#0000000a] rounded-3xl border border-solid border-[#ffffff33] h-auto lg:h-[673px]"
            >
              <CardContent className="p-2.5">
                <div className="flex flex-col gap-4 lg:gap-6">
                  {/* Blog image */}
                  <div className="flex flex-col h-[200px] lg:h-[367px] items-center justify-center p-1 bg-[#0000004c] rounded-2xl border border-solid border-[#ffffff33]">
                    <img
                      className="w-full h-[184px] lg:h-[351px] object-cover rounded-xl"
                      alt={post.title}
                      src={post.image}
                    />
                  </div>

                  <div className="flex flex-col gap-4 lg:gap-8">
                    {/* Blog content */}
                    <div className="flex flex-col gap-2">
                      <Badge
                        variant="outline"
                        className="w-fit bg-transparent text-[#6c6c6c] font-['Sora',Helvetica] font-semibold text-sm lg:text-base rounded-none px-0"
                      >
                        {post.category}
                      </Badge>

                      <h3 className="font-['Sora',Helvetica] font-bold text-[#ffffff] text-lg lg:text-2xl leading-[24px] lg:leading-[33.6px]">
                        {post.title}
                      </h3>

                      <p className="font-['Sora',Helvetica] text-sm lg:text-base">
                        <span className="text-[#6c6c6c] leading-6">
                          {post.excerpt}
                        </span>{" "}
                        <span className="text-[#9a7acf] leading-6 cursor-pointer">
                          See More
                        </span>
                      </p>
                    </div>

                    {/* Author and engagement */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <Avatar className="w-10 h-10 lg:w-12 lg:h-12">
                          <AvatarImage
                            src={post.author.avatar}
                            alt={post.author.name}
                          />
                          <AvatarFallback>
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                          <span className="font-['Sora',Helvetica] font-semibold text-[#ffffff] text-sm lg:text-base">
                            {post.author.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-['Sora',Helvetica] font-normal text-[#6c6c6c] text-xs lg:text-sm">
                              {post.author.date}
                            </span>
                            <span className="text-[#6c6c6c]">•</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 lg:gap-6">
                        {/* Like button */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 lg:w-[39px] lg:h-[39px] rounded-full bg-[#ffffff0a] border-[#ffffff33] backdrop-blur-[20.5px]"
                          >
                            <img
                              className="w-3 h-3 lg:w-[19px] lg:h-4"
                              alt="Like"
                              src="/vector-2.svg"
                            />
                          </Button>
                          <span className="font-['Sora',Helvetica] font-semibold text-[#ffffff] text-xs lg:text-sm hidden lg:inline">
                            {post.engagement.likes}
                          </span>
                        </div>

                        {/* Comment button */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 lg:w-[39px] lg:h-[39px] rounded-full bg-[#ffffff0a] border-[#ffffff33] backdrop-blur-[20.5px]"
                          >
                            <img
                              className="w-3 h-3 lg:w-[18px] lg:h-[18px]"
                              alt="Comment"
                              src="/vector.svg"
                            />
                          </Button>
                          <span className="font-['Sora',Helvetica] font-semibold text-[#ffffff] text-xs lg:text-sm hidden lg:inline">
                            {post.engagement.comments}
                          </span>
                        </div>

                        {/* Share button */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 lg:w-[39px] lg:h-[39px] rounded-full bg-[#ffffff0a] border-[#ffffff33] backdrop-blur-[20.5px]"
                          >
                            <img
                              className="w-3 h-3 lg:w-5 lg:h-5"
                              alt="Share"
                              src="/send.svg"
                            />
                          </Button>
                          <span className="font-['Sora',Helvetica] font-semibold text-[#ffffff] text-xs lg:text-sm hidden lg:inline">
                            {post.engagement.shares}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <Pagination className="w-full">
          <PaginationContent className="bg-[#ffffff03] rounded-[16px_16px_32px_32px] py-3 lg:py-[18px] shadow-inner-shadow flex justify-center flex-wrap gap-2">
            <PaginationItem>
              <PaginationPrevious className="w-8 h-8 lg:w-[35px] lg:h-[35px] p-0 flex items-center justify-center bg-[#222222] rounded-lg border-none">
                <img className="w-2 h-1.5 lg:w-2.5 lg:h-2" alt="Previous" src="/vector-8.svg" />
              </PaginationPrevious>
            </PaginationItem>

            {paginationItems.map((page, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  className={`w-7 h-7 lg:w-[31px] lg:h-[31px] p-0 flex items-center justify-center rounded-lg text-xs lg:text-sm ${
                    page === 1
                      ? "bg-[#5f00ff] text-[#333333] font-semibold"
                      : "bg-[#222222] text-[#6f7587] font-normal"
                  }`}
                  isActive={page === 1}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis className="w-4 h-4 lg:w-5 lg:h-5" />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext className="w-8 h-8 lg:w-[35px] lg:h-[35px] p-0 flex items-center justify-center bg-[#222222] rounded-lg border-none">
                <img className="w-2 h-1.5 lg:w-2.5 lg:h-2" alt="Next" src="/vector-13.svg" />
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};
