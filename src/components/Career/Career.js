import Card from '../Card/Card';
import careerimage from '../../Assets/Career/career.jpeg';
import career1 from '../../Assets/Career/career1.jpeg';
import career2 from '../../Assets/Career/career2.jpeg';
import career3 from '../../Assets/Career/career3.jpeg';
import career4 from '../../Assets/Career/career4.jpeg';
import career5 from '../../Assets/Career/career5.jpeg';
import './Career.css'
const Career = () => {
    const careerData = [
        {
            id: "1",
            img: careerimage,
            title: "UI/UX Designer Roles & Responsibilities & Job Description",
            description: "The role of a UI UX designer involves creating and improving the user interface and overall user experience of digital products such as websites, mobile apps, and software"

        },
        {
            id: "2",
            img: career1,
            title: "Roles and Responsibilities of a Data Scientist",
            description: "A data scientist is a tech professional that collects, analyzes, and interprets vast amounts of data using analytical, statistical, and programming skills."

        },
        {
            id: "3",
            img: career2,
            title: "Business Analyst – An Insight into Their Life",
            description: "A business analyst is a professional who works within an organization or a business to analyze and assess business requirements, processes, systems, and operations. "

        },
        {
            id: "4",
            img: career3,
            title: "How to Become a Successful QA Automation Tester",
            description: "QA automation testing is a more crucial stage in SDLC (Software Development Lifecycle). It is a testing phase in software development where you test the developed software with specialized automation tools."

        },
        {
            id: "5",
            img: career4,
            title: "Roles & Responsibilities of Full Stack Developers in 2023",
            description: "Full stack developers play a pivotal role in modern software development, possessing a diverse skill set that allows them to handle both front-end and back-end tasks"

        },
        {
            id: "6",
            img: career5,
            title: "Top 9 Business Analytics Skills You Should Know",
            description: "Business Analytics is the process of transforming data into insights to scale up business objectives. It contains a set of disciplines and technologies for solving business problems using data analysis, statistical models, etc."

        }
    ]

    return (
        <div className="career-container">
                {careerData.map((item, index)=>{
                    return (
                        <div className="career-list">
                            <Card item={item} key={index} />
                        </div>
                    )
                })}
        </div>
    )
}

export default Career;