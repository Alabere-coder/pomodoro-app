import { AiOutlineSetting } from "react-icons/ai"
import { Button } from "@radix-ui/themes"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="border-b border-transparent bg-slate-100 px-6">
        <div className=" h-[4rem] flex justify-between items-center">
            <h2 className="text-[30px] text-emerald-500">Pomoro</h2>
            <Link to="/setting" className="w-10 h-10 border cursor-pointer bg-white text-slate-600 border-solid border-slate-600 flex items-center justify-center rounded-full">
                <AiOutlineSetting className=" h-6 w-6"/>
            </Link>
        </div>
    </div>
  )
}

export default NavBar