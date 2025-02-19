import Link from 'next/link'
import { Instagram} from 'lucide-react'
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white h-72 px-10 pl-0 flex flex-col justify-between">
      <div className="flex items-center justify-start ">
        <h1 className="text-9xl font-bold">Let It Rain</h1>
        
        
      </div>
      <div className="relative flex items-center justify-start gap-4 pb-4">
        <p>© 2025 Cherra. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 left-1/2 absolute p-0">
            <Instagram />
            <FaTiktok />
        </div>
            
      </div>
    </footer>
  )
}