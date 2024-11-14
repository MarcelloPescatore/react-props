import './PostCard.modules.css'
import Tags from '../Tags/Tags'

export default function PostCard(props) {

    return (

        <div className='box-card'>
            <div className="box-img">
                <img src={props.img} alt="" />
            </div>
            <div className="box-info">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <div className='box-tags'>
                    <Tags tags={props.tags}/>
                </div>
                <button><a href="#">{"leggi di più".toUpperCase()}</a></button>
            </div>
        </div>

    )

}