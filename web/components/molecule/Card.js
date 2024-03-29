import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/Card.module.css'

const Card = (props) => {
      
   return (
    <div key={props.key} className="w-full md:w-10/12 lg:max-w-[300px] lg:max-h-[540px] mx-auto py-5">
        <div className={styles.cardInner}>
            <div className="w-fit mx-auto">
                <Link href={"/post/" + [props.slug]}>
                    <img src={props.image} 
                        className={`${props.imgPadding ? 'p-8' :''} rounded-t-xl lg:max-h-[270px]`}
                    />
                </Link>
            </div>
            <div className="">
                <div>
                    <div className="text-center pt-3">
                        <h3 className="sf-gradient text-2xl">{props.title}</h3>
                    </div>
                    <div className="text-start text-xs px-3 pt-1 text-sf-dark-gray">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="w-fit p-3 mx-auto">
                    {props.tags.map((tag,index) => {
                        return (
                            <Link key={index} href={"/category/" + [tag]}>
                                <button className={`${styles[tag]} ${styles.roundButton}`}>{tag.toUpperCase().replaceAll("-", ' ')}</button>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
            
    </div>
   )
}


export default Card