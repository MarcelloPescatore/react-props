import './Tags.modules.css'


export default function Tags(props) {
    const tagStyle = {
        html: "bg-green",
        css: "bg-blue",
        js: "bg-red",
        php: "bg-violet"
    }

    return (
        props.tags.map((tag, index) => <span key={index} className={tagStyle[tag]}>{tag}</span> )
    )
}