import Card from "../Card/Card";
import './All.css';
import allimage from '../../Assets/Allimg/All.jpeg';
import allimg1 from '../../Assets/Allimg/all1.jpeg';
import allimg2 from '../../Assets/Allimg/all2.jpeg';
import allimg3 from '../../Assets/Allimg/all3.jpeg';
import allimg4 from '../../Assets/Allimg/all4.jpeg';
import allimg5 from '../../Assets/Allimg/all5.jpeg';

const All = () => {

    const all = [
        {
            id: "1",
            img: allimage,
            title: "Hottest UI UX Designer Tools of 2023 | Elevate Your Creativity",
            description: "UI UX is an ever-growing domain that keeps on changing its trends"

        },
        {
            id: "2",
            img: allimg1,
            title: "UI/UX Designer Roles & Responsibilities & Job Description",
            description: "UI UX is the abbreviated word that’s been rocking the trend over the years, especially in the past decade."

        },
        {
            id: "3",
            img: allimg2,
            title: "Roles and Responsibilities of a Data Scientist",
            description: "Data science is a rapidly growing field that has become essential for businesses to thrive in the digital age."

        },
        {
            id: "4",
            img: allimg3,
            title: "9 Best YouTube Channels to Learn DevOps from Scratch",
            description: "DevOps is the right mix of Software Development & IT Operations that accelerates the development"

        },
        {
            id: "5",
            img: allimg4,
            title: "Best Websites to Learn Data Science in 2023: Beginner to Expert",
            description: "Are you interested in learning data science but not sure where to start? In this blog, we’ll explore the best websites for data science that offer great resources to help you learn and master this exciting field."

        },
        {
            id: "6",
            img: allimg5,
            title: "Roles & Responsibilities of Full Stack Developers in 2023",
            description: "In this blog, we’ll be talking about all the key aspects required to become a full stack developer. "

        }
    ]

    return (
        <div className="all-container">
                {all.map((item, index)=>{
                    return (
                        <div className="all-list">
                            <Card item={item} key={index} />
                        </div>
                    )
                })}
        </div>
    )
}

export default All;