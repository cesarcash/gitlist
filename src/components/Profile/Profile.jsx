import { ProfileStyled } from "./Profile.styles"

function Profile() {
    return (
        <ProfileStyled>
            Profile
            <img src="" className='avatar' width="278" height="278" alt="" />
            <p className="name">Leonidas Esteban</p>
            <p className="username">LeonidasEsteban</p>
            <div className="buttons">
                <button>follow</button>
                <button>sponsors</button>
            </div>
            <p className="bio info">hola mundo!</p>
            <p className="follwers info">• 10 <span>followers</span> <span>•</span> 15 <span>following</span></p>
            <p className="stars info">• 81</p>
            <p className="location info">• CDMX</p>
            <a className="info" href="https://leonidasesteban.com" target="_blank" rel="noreferrer">https://leonidasesteban.com</a>
            <a className="info" href="https://leonidasesteban.com" target="_blank" rel="noreferrer">@LeonidasEsteban</a>
        </ProfileStyled>
    )
}

export default Profile