import img1 from "../assets/imgH/imgH1.png"
import img2 from "../assets/imgH/imgH2.png"
import img3 from "../assets/imgH/imgH3.png"
import img4 from "../assets/imgH/imgH4.png"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div style={{fontFamily:"'Roboto Mono'"}} className="w-full h-screen bg-[#91FFB2]">
        {/* ส่วนบน */}
        <div className="w-8/12 mx-auto flex py-20 ">
        {/* ส่วนที่ 1 */}
        <div className="flex flex-col">
        <div>
            <h1 className="text-6xl font-bold text-[#333333] ">My Web Design by <br /> React + TailwindCSS</h1>
        </div>
        <div className="mt-10 ">
            <span className="text-[#333333] text-lg max-w-md block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod molestiae eius exercitationem dolores facere velit voluptas alias tempore porro sequi voluptatibus possimus nihil recusandae, illum quibusdam deserunt omnis vel minima?
            </span>
        </div>
        <div className="mt-10">
            <a href="https://github.com/Tadaphat-95" className="bg-[#333333] text-white py-2 px-5 rounded-4xl">
                Follow Me
            </a>
        </div>
        <div className='mt-15 flex'>
            <Link to="/MyPageA" >
            <img src={img1} alt="img1" className="w-80 h-min mr-5" />
            </Link>
            <Link to="/MyPageB">
            <img src={img2} alt="img2" className="w-80 h-min" />
            </Link>
        </div>
        </div>
        {/* ส่วนที่ 2 */}
        <div>
            <Link to="/MyPageC">
            <img src={img3} alt="img3" className="w-56 h-full ml-20 mr-20" />
            </Link>
        </div>
        {/* ส่วนที่ 3 */}
        <div>
            <Link to="/MyPageD">
            <img src={img4} alt="img4" className="w-34 h-full " />
            </Link>
            </div>
        </div>
        {/* ส่วนล่าง */}
        <div className="flex flex-col justify-center items-center text-lg">
            <span>(รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</span>
            <span>Created by NinniN SAU</span>
            <span>Copyright © 2025 WoW WoW WoW</span>
        </div>

      </div>
    </>
  )
}
