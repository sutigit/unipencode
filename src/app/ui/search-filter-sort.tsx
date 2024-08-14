'use client'
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

export default function SearchFilterSort() {
    const [value, setValue] = useState("");

    return (
        <div>
            <Input
                label="Etsi"
                value={value}
                onValueChange={setValue}
                className="w-full mb-10"
            />
        </div>
    );
}