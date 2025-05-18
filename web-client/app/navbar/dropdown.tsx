import {
  LogOut,
  User,
  Upload
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  // DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownProps {
  userName: string | null
}

import { signOut } from "../firebase/firebase"
import Link from "next/link"


export function Dropdown({ userName }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-sm">
          <User />
          {userName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">

        <Link href="upload">
          <DropdownMenuItem disabled={false}  >
            <Upload />
            <span>Upload</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          <LogOut />
          <span >Log out</span>
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
