'use client';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";

export default function CodeSection() {
    const [selected, setSelected] = useState('readme');

    return (
        <main className="border-gray border rounded-2xl p-5 my-3">
            <Tabs
                aria-label="Options"
                selectedKey={selected}
                // weird typescript
                onSelectionChange={setSelected}
                classNames={{
                    tab: "max-w-fit p-4",
                    tabContent: "group-data-[selected=true]:text-secondary text-medium font-medium",
                }}
            >
                <Tab key="readme" title="README">
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="license" title="MIT Lisenssi">
                    <Card>
                        <CardBody>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="contribution-guideline" title="Osallistumisohjeet">
                    <Card>
                        <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </main>
    );
}