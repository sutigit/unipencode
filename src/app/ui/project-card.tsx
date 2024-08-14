
import { Project } from '@/app/lib/definitions'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card 
      isPressable 
      className="grow bg-lightblack max-w-lg m-auto"
      as={Link}
      href={`/project/${'lol'}/code`}
      >

      <CardHeader className="flex gap-3 p-0">
        <Image
          isZoomed
          shadow="none"
          radius="none"
          width="100%"
          alt={'test'}
          className="w-full aspect-video object-cover"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </CardHeader>



      <CardBody className='flex flex-col gap-6 p-6 h-45 max-h-45'>
        <div className='flex flex-row gap-5'>
          <Image
            className='bg-default'
            alt="user avatar"
            height={32}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/117278596?v=4"
            width={32}
          />
          <div className="flex flex-col items-start">
            <p className="text-lg font-medium">Myyrä Peli</p>
            <p className="text-small text-zinc-400">Luonut Sutigit</p>
          </div>
        </div>

        <p className='text-sm max-h-16 overflow-hidden text-clip ...'>
          Kaivataan apuja! Tässä nyt kirjoitelen vain tekstiä jotta saan testattua miltä tämä näyttää.
          Kaivataan apuja! Tässä nyt kirjoitelen vain tekstiä jotta saan testattua miltä tämä näyttää.
          Kaivataan apuja! Tässä nyt kirjoitelen vain tekstiä jotta saan testattua miltä tämä näyttää.
        </p>
      </CardBody>


      <CardFooter className='flex justify-between items-end text-sm p-6'>
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
      </CardFooter>


    </Card>
  );
}
