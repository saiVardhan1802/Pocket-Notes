import "./Note.css"

export default function Note(props) {
    const date = new Date(props.createdAt);

    // Format date as "9 May 2023"
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short', // Use "long" for full month names
        year: 'numeric'
    }).format(date);

    // Format time as "10:10 AM"
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    console.log("createdAt:", date);
    console.log("formattedDate:", formattedDate);
    console.log("formattedTime:", formattedTime);

    return (
        <div style={{
            width: '95%',
            background: '#FFFFFF',
            margin: '0.6% 2.5%',
            zIndex: '1',
            fontSize: '1.15rem',
            borderRadius: '0.3rem',
            //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            boxShadow: '0px 4px 20px 0px #00000040',
        }}>
            <div>
                <p className="margin" style={{
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    letterSpacing: '0.035em',
                    lineHeight: '2rem',
                    //margin: '2vh 1.5vw'
                }}>{props.content}</p>

                <div className="date" style={{
                    display: 'flex',
                    //gap: '0.9vw',
                    float: 'right',
                    //margin: '1vh 1vw 1vh auto',
                    fontWeight: '500',
                    fontFamily: 'Roboto',
                    alignItems: 'center'
                }}><p>{formattedDate}</p>
                    <div style={{
                        borderRadius: '50%',
                        background: 'black',
                        width: '0.5rem',
                        height: '0.5rem'}}></div>
                    <p>{formattedTime}</p>   
                </div>

            </div>
        </div>
    )
}