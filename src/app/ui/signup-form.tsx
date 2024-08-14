import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="secondary">Rekisteröidy</Button>
            <Modal
                className="bg-lightblack p-2"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Rekisteröidy</ModalHeader>
                            <ModalBody>
                                {/* <Input
                                    autoFocus
                                    //   endContent={
                                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    //   }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    //   endContent={
                                    //     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    //   }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div> */}
                                <div className="py-12">
                                    <p className="mb-5">Tällä hetkellä emme rekisteröi uusia käyttäjiä.</p>
                                    <p>Voit pyytää tunnuksia lähettämällä sähköpostia osoitteeseen: plalalal</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="warning" onPress={onClose}>
                                    Eiku
                                </Button>
                                {/* <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button> */}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
