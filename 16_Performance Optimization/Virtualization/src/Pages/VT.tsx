

function VT( {arr} : { arr: number[] } , {height} : { height: number } , {itemHeight} : { itemHeight: number } ) {

    return (
        <div 
            style = {
                { 
                    height: height , 
                    overflowY: 'scroll' 
                }} 
        > 
            
            {
                arr.map((item) => {
                    return (
                        <p key = {item} > Item : {item} </p>
                    )
                })
            }
        </div>
    )
}

export default VT;