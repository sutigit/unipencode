import Link from 'next/link';
// import { signInGitHub, signOutGitHub } from '@/app/lib/actions';
import {Button} from '@nextui-org/react';


export function HomeLink() {
  return (
    <Link href="/"
      className={linkStyle}>
      <span>UniOpenSource</span>
    </Link>
  );
}

export function SignIn() {
  return (
    <form>
      <Button type="submit">Signin with GitHub</Button>
    </form>
  )
}

export function SignOut() {
  return (
    <form>
      <button className={linkStyleDark} type="submit">Sign Out</button>
    </form>
  )
}


export function Dashboard({ user }: { user: string }) {
  return (
    <Link href={`/dashboard/${user}/projects`}>
      <span className={linkStyleDark}>Dashboard</span>
    </Link>
  )
}

export function NewProject({ user }: { user: string }) {
  return (
    <Link href={`/dashboard/${user}/create-project`}>
      <span className={buttonStyle}>New Project + </span>
    </Link>
  )
}

export function InitProject({ repository_id }: { repository_id: string }) {
  // const initProjectWithRepoId = initProject.bind(null, repository_id);
  return (
    <form>
      <button className={buttonStyle} type="submit">Import</button>
    </form>
  )
}


const commonButtonStyle = `
  inline-flex 
  h-10 
  items-center 
  rounded-lg
  px-4 
  font-medium
  transition-colors 
  focus-visible:outline 
  focus-visible:outline-2 
  focus-visible:outline-offset-2 
  focus-visible:outline-blue-600`;

const commonLinkStyle = `
  inline-flex 
  h-10 
  items-center 
  rounded-lg
  px-4 
  font-medium
  transition-colors 
  focus-visible:outline 
  focus-visible:outline-2 
  focus-visible:outline-offset-2 
  focus-visible:outline-blue-600`;


export const linkStyle = commonButtonStyle + `
  text-white
  hover:text-gray-500`;

export const linkStyleDark = commonLinkStyle + `
  text-black
  hover:text-gray-500`;

export const buttonStyle = commonButtonStyle + `
  bg-white
  text-black
  hover:bg-gray-400`;

export const buttonStyleDark = commonButtonStyle + `
  bg-black
  text-white
  border 
  border-gray-600
  hover:bg-lightblack`;

export const buttonDisabledStyle = commonButtonStyle + `
  bg-gray-400
  text-black
  cursor-not-allowed`;

export const buttonCancelStyle = commonButtonStyle + `
  bg-coral
  text-black
  hover:bg-darkcoral`;