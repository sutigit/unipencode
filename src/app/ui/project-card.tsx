
import { Project } from '@/app/lib/definitions'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      isPressable
      className="grow bg-lightblack max-w-lg m-auto py-6"
      as={Link}
      href={`/project/${'lol'}/overview`}
    >

      <CardHeader className="flex flex-col items-start gap-6 px-6">
        <div className='flex flex-row gap-3 items-center'>
          <Image
            className='bg-default'
            alt="user avatar"
            height={20}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/117278596?v=4"
            width={20}
          />
          <p className="text-small text-zinc-400">Created by Sutigit</p>
        </div>
        <h2 className='text-3xl text-white'>Placeholder</h2>
      </CardHeader>



      <CardBody className='flex flex-col gap-6 p-6 h-45 max-h-45'>


        <p className='max-h-16 overflow-hidden text-clip ...'>
          Kaivataan apuja! Tässä nyt kirjoitelen vain tekstiä jotta saan testattua miltä tämä näyttää.
        </p>

        <div className="flex flex-col items-start gap-2">
          <div className='flex gap-2 items-center'>
            <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
            <p>
              Javascript
            </p>
          </div>
          {/* <p>15 tehtävää</p>
          <p>8 muutospyyntöä</p> */}
          <p className='text-sm text-zinc-400'># Aloittelijoille, Fysiikka</p>
        </div>
      </CardBody>


      <CardFooter className='flex justify-between items-end text-sm p-6'>
        <Image
          isZoomed
          shadow="none"
          width="100%"
          radius="md"
          alt={'test'}
          className="w-full aspect-video object-cover"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </CardFooter>
    </Card>
  );
}
