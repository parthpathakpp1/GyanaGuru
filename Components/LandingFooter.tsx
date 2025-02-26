import Image from "next/image";
import Link from "next/link";
import {AiFillGithub ,AiFillTwitterCircle ,AiFillLinkedin ,AiFillInstagram,AiFillFacebook} from "react-icons/ai"

const LandingFooter = () => {
    const hoverEffect = "flex items-center transition ease-out duration-200 hover:text-black";
    
    const currentYear = new Date().getFullYear();
    
    return (

 <footer className="bg-gray-100">
     
<div className="w-80vw mx-auto max-w-1200px">
{/* <Image width={40} height={40} src="./logo.svg" alt="logo" /> */}
<div className="flex justify-around flex-wrap">
    
    <div className="mb-6 mt-8">
        <div className="font-bold text-lg mb-3 text-black text-opacity-90">Quick Links</div>
        <ul className="list-none m-0 p-0">
               <li className="leading-8 text-base text-black text-opacity-80">
                <Link href="#" className={hoverEffect}>Home</Link>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                <Link href="#" className={hoverEffect}>Courses</Link>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                <Link href="#" className={hoverEffect}>Our Services</Link>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                <Link href="#" className={hoverEffect}>Benefits</Link>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                <Link href="#" className={hoverEffect}>FAQ</Link>
                </li>
        </ul>
        </div>
        
        <div className="mb-24 mt-8">
           <div className="font-bold text-lg mb-3 text-black text-opacity-90">Community</div>
           <ul>
                <li className="leading-8 text-base text-black text-opacity-80">
                <a href="https://github.com/PiyushKalyanpy/GyanaGuru" target="_blank" className={hoverEffect}><AiFillGithub className="mr-1" />Github</a>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                   <a href="https:twitter.com" className={hoverEffect}><AiFillTwitterCircle className="mr-1" />Twitter</a>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                   <a href="https://www.linkedin.com/in/piyush-kalyan/" className={hoverEffect}><AiFillLinkedin className="mr-1" />Linkedin</a>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                   <a href="https:instagram.com" className={hoverEffect}><AiFillInstagram className="mr-1" />Instagram</a>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                   <a href="https:facebook.com" className={hoverEffect}><AiFillFacebook className="mr-1" />Facebook</a>
                </li>
             </ul>
        </div>
        
        <div className="mb-24 mt-8">
           <div className="font-bold text-lg mb-3 text-black text-opacity-90">Help</div>
           <ul>
                <li className="leading-8 text-base text-black text-opacity-80">
                   <a href="https://github.com/PiyushKalyanpy/GyanaGuru/issues" target="_blank" className={hoverEffect}>Github Issues</a>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                   <a href="https://github.com/PiyushKalyanpy"className={hoverEffect} target="_blank" >Contribution</a>
                </li>
                <li className="leading-8 text-base text-black text-opacity-80">
                   <a href="https:github.com" className={hoverEffect} target="_blank">Github Discussions</a>
                </li>
             </ul>
        </div>
        </div>
</div>
<div className="flex flex-row justify-center w-full border-y-2 items-center gap-8 border-black  ">
            <div className="flex flex-row items-center">
          <Image width={40} height={40} src="./logo.svg" alt="logo" />
          <h1 className="font-archivo font-semibold text-lg "><a href="#">GyanaGuru</a></h1>
        </div>
        <p>© {currentYear} Gyana Guru. All rights reserved.</p>
        </div>
 </footer>
 
    );
}

export default LandingFooter;