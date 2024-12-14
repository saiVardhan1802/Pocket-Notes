export default function Group(props) {
    return (
        <div style={{...props.style}} onClick={props.onClick}>
            <div style={{display: 'flex'}}>
                <div style={{}}>
                    {props.initials}
                </div>
                <p>{props.groupName}</p>
            </div>
        </div>
    )
}