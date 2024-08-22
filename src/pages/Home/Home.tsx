import styled from "./Home.module.scss"
import teleicon from "assets/images/telephone-svgrepo-com.svg"
import instaicon from "assets/images/instagram-logo-thin-svgrepo-com.svg"
import appointicon from "@assets/images/calendar-alt-svgrepo-com.svg"
import barberimg from "@assets/images/images.png"
import Card from "@components/Common/Card/Card"

export default function Home(){

    return(
        <>
        <div className={styled.HomePage}>
            <main>
            <Card
        imgSrc="https://source.unsplash.com/WLUHO9A_xik/300x200/"
        spanTag="4 Day ago"
        constentHead="Post One"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="3224"
        views="7"
        comment="21"
        color="rgb(248, 51, 84)"
      />
            </main>
        </div>
        </>
    )
}