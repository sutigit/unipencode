
import NavContent from "./nav-content";
import { auth } from "@/auth";

export default async function NavBar() {
  const session = await auth();
  
  return (
    <NavContent session={session}/>
  );
}