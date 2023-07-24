import Card from "../Card/Card";
import './CyberSecurity.css';
import cyberimage from '../../Assets/CyberSecurity/cybersecurity.jpeg';
import cyber1 from '../../Assets/CyberSecurity/cyber1.jpeg';
import cyber2 from '../../Assets/CyberSecurity/cyber2.jpeg';
import cyber3 from '../../Assets/CyberSecurity/cyber3.jpeg';
import cyber4 from '../../Assets/CyberSecurity/cyber4.jpeg';
import cyber5 from '../../Assets/CyberSecurity/cyber5.jpeg';


const CyberSecurity = () => {
    const cyberData = [
        {
            id: "1",
            img: cyberimage,
            title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
            description: "Cybersecurity involves the protection of computer-based equipment and information from unintended or unauthorized access. "

        },
        {
            id: "2",
            img: cyber1,
            title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
            description: "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism."

        },
        {
            id: "3",
            img: cyber2,
            title: "Top 7 Cyber Security Attacks in Real Life",
            description: "Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems."
        },
        {
            id: "4",
            img: cyber3,
            title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
            description: "Ethical hackers perform hacking with prior permission from the concerned authorities. In order to perform this and carry out penetration testing various hacking techniques and tools are used."
        },    
        {
            id: "5",
            img: cyber4,
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            description: "Hacking is illegal but ethical hacking is the authorized practice of bypassing system security to identify any potential data threat. Ethical hackers try to examine the systems to pinpoint the weak points."

        },
        {
            id: "6",
            img: cyber5,
            title: "Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap",
            description: "According to the job statistics of 2020, cybersecurity jobs were among the top 15 emerging jobs. Cybersecurity jobs are also one of the most handsomely paying jobs in recent times."
        }
    ]

    return (
        <div className="cyber-container">
                {cyberData.map((item, index)=>{
                    return (
                        <div className="cyber-list">
                            <Card item={item} key={index} />
                        </div>
                    )
                })}
        </div>
    )
}

export default CyberSecurity;