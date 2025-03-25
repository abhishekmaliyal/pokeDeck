import Topbar from "@/components/Topbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function page() {
  return (
    <>
      <Topbar />
      <div className="container flex w-screen h-screen pt-28 mx-40 ">
        <div className="me w-1/2 ">
          <h1 className="text-8xl">About me</h1>
          <h2 className="info pt-20 text-6xl">Hi!</h2>
          <h2 className="info text-4xl">I am a Front-End Web Developer.</h2>
          <div className="techstack">
            <Tabs defaultValue="account" className="w-full mt-32">
              <TabsList className="gap-2">
                <TabsTrigger
                  value="frontend"
                  className="tech text-4xl h-20 bg-amber-50 border-2 border-amber-600 focus:border-red-800 mb-10"
                >
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="styling"
                  className="tech text-4xl h-20 bg-amber-50 border-2 border-amber-600 focus:border-red-800 mb-10"
                >
                  Styling
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="tech tech text-4xl h-20 bg-amber-50 border-2 border-amber-600 focus:border-red-800 mb-10"
                >
                  Backend
                </TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="subtext py-10 text-2xl">
                <p>ReactJS - JavaScript frontend Library</p>
                <p>Nextjs - ReactJS framework</p>
              </TabsContent>
              <TabsContent value="styling" className="subtext py-10 text-2xl">
                <p>TailwindCSS - CSS framework</p>
              </TabsContent>
              <TabsContent value="backend" className="subtext py-10 text-2xl">
                <p>RESTful API - API architecture that uses HTTP methods</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="site w-1/2">
          <h1 className="text-8xl">About site</h1>
          <h2 className="info pt-20 text-6xl">PokeDeckInfo.</h2>
          <h2 className="info text-4xl">This site was Developed using. </h2>
          <Tabs defaultValue="account" className="w-full mt-32">
            <TabsList className="gap-2">
              <TabsTrigger
                value="frontend"
                y
                className="tech text-4xl h-20 bg-amber-50 border-2 border-amber-600 focus:border-red-600 mb-10"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="styling"
                className="tech text-4xl h-20 bg-amber-50 border-2 border-amber-600 focus:border-red-600 mb-10"
              >
                Styling
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="tech text-4xl h-20 bg-amber-50 border-2 border-amber-600 focus:border-red-600 mb-10"
              >
                Backend
              </TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="subtext py-10 text-2xl">
              <p>Nextjs is used for the frontend of the project</p>
            </TabsContent>
            <TabsContent value="styling" className="subtext py-10 text-2xl">
              <p>TailwindCSS is used for styling the project</p>
              <p>custom fonts are used for the project</p>
            </TabsContent>
            <TabsContent value="backend" className="subtext py-10 text-2xl">
              <p>pokeAPI is used for the pokemon data</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
