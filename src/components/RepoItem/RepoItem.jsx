import { RepoItemStyled } from "./RepoItem.styles"
import Language from "../Language/Language"
import Icon from "../Icons"

function RepoItem(props) {

    const updatedAt = new Date(props.updated_at);
    const today = new Date();
    const diffMilliseconds = updatedAt - today;
    const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
    const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days');

    return (
        <RepoItemStyled>
            <h3 className="title">
                <a href={props.html_url}>{props.name}</a> 
                {
                    !props.private ? (
                        <span className="public">Public</span>
                    ) : null
                }
            </h3>
            {
                props.description ? (
                    <p className="description">
                        {props.description}
                    </p>
                ) : null
            }
            {
                props.topics.length ? (
                    <div className="topicList">
                        {
                            props.topics.map((item) => <span key={item} className="topicItem">{item}</span>)
                        }
                    </div>
                ) : null
            }
            <div className="details">
                {
                    props.language ? <Language name={props.language} /> : null
                }
                <div className="details__item">
                    <Icon name="star" />
                    <span>{props.stargazers_count}</span>
                </div>
                <div className="details__item">
                    <Icon name="branch" />
                    <span>{props.forks_count}</span>
                </div>
                <div className="details__item">
                    <span>{timeAgo}</span>
                </div>
            </div>
        </RepoItemStyled>
    )
}

export default RepoItem
