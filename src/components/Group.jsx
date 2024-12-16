import './Group.css'

export default function Group(props) {
    return (
        <div style={{
            width: '100%',
            height: '8vh',
            borderRadius: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            cursor: 'default',
            ...props.boxStyle,
            }} onClick={props.onClick}>
            <div className='inner-box' style={{
                display: 'flex',
                //gap: '1.2vw',
                //position: 'relative',
                //top: '1vh',
                marginLeft: '1.5vw',
                
                }}>
                <div style={{
                    // height: '3.5rem',
                    // width: '3.5rem',
                    borderRadius: '50%',
                    //textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    //position: 'relative',
                    //bottom: '0.2vh',
                    ...props.circleStyle
                }}>
                    <p style={{
                        //marginTop: '1.4vh',
                        letterSpacing: '0.02em',
                        fontSize: '1.5rem',
                        fontFamily: 'Roboto',
                        color: 'white',
                        fontWeight: '500'
                    }}>{props.initials}</p>
                </div>
                <p style={{
                    fontFamily: 'Roboto',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    //marginTop: '1.4vh',
                }}>{props.groupName}</p>
            </div>
        </div>
    )
}