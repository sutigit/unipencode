import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

import { authenticate } from '@/app/lib/actions';
import { useFormStatus, useFormState } from 'react-dom'

function LoginButton() {

    const { pending } = useFormStatus();

    return (
        <Button
            isLoading={pending}
            aria-disabled={pending}
            color="primary"
            type="submit"
            form="login-form">
            Kirjaudu sisään
        </Button>)
}

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [errorMessage, dispatch] = useFormState(authenticate, undefined)

    return (
        <>
            <Button onPress={onOpen} >Kirjaudu</Button>
            <Modal
                className="bg-lightblack p-2"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Kirjaudu</ModalHeader>
                            <ModalBody>
                                {errorMessage && (
                                    <>
                                        <p className="text-sm text-red">{errorMessage}</p>
                                    </>
                                )}

                                <Input
                                    label="Tunnus"
                                    type="text"
                                    isRequired
                                    errorMessage="Kirjoita tunnuksesi"
                                    form="login-form"
                                    name="username"
                                    autoFocus
                                    placeholder="Kirjoita tunnuksesi"
                                    variant="bordered"
                                />
                                <Input
                                    label="Salasana"
                                    type="password"
                                    isRequired
                                    errorMessage="Kirjoita salasanasi"
                                    form="login-form"
                                    name="password"
                                    placeholder="Kirjoita salasanasi"
                                    variant="bordered"
                                />

                                {/* REMEMBER ME / FORGOT PASSWORD */}
                                {/* <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Muista minut
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Unohtuiko salasana?
                                    </Link>
                                </div> */}


                            </ModalBody>
                            <ModalFooter>
                                <Button color="warning" onPress={onClose}>
                                    Eiku
                                </Button>
                                <form id="login-form" action={dispatch}>
                                    <LoginButton />
                                </form>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
