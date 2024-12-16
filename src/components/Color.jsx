import './Color.css';

export default function Color(props) {
    return (
        <div className='color' style={{
            borderRadius: '50%',
            // width: '2.5rem',
            // height: '2.5rem',
            ...props.style
        }}
        onClick={props.onClick}
        ></div>
    )
}