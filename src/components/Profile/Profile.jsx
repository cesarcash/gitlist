import { ProfileStyled } from "./Profile.styles";
import Button from "../Button/Button.jsx";
// import props from "../user-data";
import Icon from "../Icons";

function Profile(props) {

    const {avatar_url, name, blog, location, bio, twitter_username, followers, following, login} = props;

    return (
        <ProfileStyled className="profile">
            <div className="profile__header">
                <div className="profile__avatar-container">
                    <img src={avatar_url} className='profile__avatar' alt={name} />
                </div>
                <div className="profile__info">
                    <p className="profile__name">{name}</p>
                    <p className="profile__username">{login}</p>
                </div>
            </div>
            <div className="profile__buttons">
                <Button text="Follow" link="#" className="custom" />
                <Button text="Sponsor" icon={<Icon name="heart" size={24} color="var(--pink)" />} />
            </div>
            <div className="profile__bio">
                <p className="bio info">{bio}</p>
                <p className="follwers info"><Icon color="var(--icon)" name="user" /> {followers} <span>followers</span> <span>•</span> {following} <span>following</span></p>
                {
                    location && <p className="location info"><Icon color="var(--icon)" name="location" /> {location}</p>
                }
                {
                    blog && 
                        <a className="info" href={blog} target="_blank" rel="noreferrer">
                            <Icon name="link" color="var(--icon)"/> 
                            {blog}
                        </a>
                }
                {
                    twitter_username && 
                        <a className="info" href={`https://twitter.com/twitter_username`} target="_blank" rel="noreferrer">
                            <Icon name="twitter" color="var(--icon)" /> 
                            @{twitter_username}
                        </a>
                }
            </div>
        </ProfileStyled>
    )

}

export default Profile