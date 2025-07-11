import { ProfileStyled } from "./Profile.styles";
import Button from "../Button/Button.jsx";
import props from "../user-data";
import Icon from "../Icons";

function Profile() {

    const {avatar_url, name, blog, location, bio, twitter_username, followers, following, login} = props;

    return (
        <ProfileStyled>
            <img src={avatar_url} className='avatar' width="278" height="278" alt="" />
            <p className="name">{name}</p>
            <p className="username">{login}</p>
            <div className="buttons">
                <Button text="Follow" link="#" className="custom" />
                <Button text="Sponsor" icon={<Icon name="heart" size={24} color="var(--pink)" />} />
            </div>
            <p className="bio info">{bio}</p>
            <p className="follwers info">• {followers} <span>followers</span> <span>•</span> {following} <span>following</span></p>
            <p className="location info">• {location}</p>
            <a className="info" href={blog} target="_blank" rel="noreferrer">{blog}</a>
            <a className="info" href={`https://twitter.com/twitter_username`} target="_blank" rel="noreferrer">@{twitter_username}</a>
        </ProfileStyled>
    )

}

export default Profile