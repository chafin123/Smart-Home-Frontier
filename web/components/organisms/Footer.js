import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
   return (
       <div className="mx-auto w-fit py-16 opacity-20">
            <div>
                <p className="text-black">Created By <Link href="https://stevenchafin.us/">Steven Chafin</Link></p>
            </div>
            <div className="flex justify-between w-4/12 mx-auto">
                <div>
                    <Link href="mailto:stevend.chafin@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.linkedin.com/in/steven-chafin-3174a1184/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </Link>
                </div>
                <div>
                    <Link href="https://github.com/chafin123">
                        <FontAwesomeIcon icon={faGithub}/>
                    </Link>
                </div>
            </div>
       </div>
   )
}
export default Footer