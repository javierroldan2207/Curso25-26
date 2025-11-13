import PropTypes, { array } from "prop-types";
import './Profile.css';
const imgDefautl = "data:image/png;base64,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"
const mBio = "La Bio esta vacia.";
let badge = "premium";



const Profile = ({ urlImg, name, email, bio, skills, isPremium}) => {
    urlImg = urlImg == undefined ? imgDefautl : urlImg;
    skills = skills == undefined ? [] : skills;
    bio = bio == undefined ? mBio : bio;
    badge = isPremium == true ? badge :"normal";
    return (
        <>
            <div id={badge}>
                <div id="img">
                    <img src={urlImg} />
                </div>
                <div>
                    <h1 id="name">{name}</h1>
                    <p id="email">{email}</p>
                    <p>{bio}</p>
                </div>
                <div id="skills">
                    {skills.map((skill,index) => (<div className="skill" key={index}>{skill}</div>))}
                </div>
            </div>
        </>
    );
};

Profile.prototype = {
    skills: PropTypes.array.isRequired
};

export default Profile;
