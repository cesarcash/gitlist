import { RepoItemStyled } from "./RepoItem.styles"
import Language from "../Language/Language"

function RepoItem(props) {
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
                            props.topics.map(item => <span className="topicItem">{item}</span>)
                        }
                    </div>
                ) : null
            }
            {
                props.language ? <Language name={props.language} /> : null
            }
        </RepoItemStyled>
    )
}

export default RepoItem
