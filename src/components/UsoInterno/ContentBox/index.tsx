import './styles.css'

type ContentBoxProps ={
    title: string,
    // content: 
}

export function ContentBox(props: ContentBoxProps) {
    return (
        <div className='box'>
            <h2 className="title">{props.title}</h2>
            {/* <div className="content">{props.content}</div> */}
        </div>
    )
}