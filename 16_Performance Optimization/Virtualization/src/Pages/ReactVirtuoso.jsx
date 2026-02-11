import { Virtuoso } from "react-virtuoso";


function ReactVirtuoso({list}) {

    // console.log(list)
    return (

        <>
            <h1>get start</h1>
            <Virtuoso
                style={{ height: 300 }}
                data={list}
                itemContent={(index , item) => {
                    // console.log(index , item)
                    return (
                        <p
                            style={{
                                height:20,
                                color:'red',
                            }}
                                                    >
                            Item {item}
                        </p>
                    )
                }}
            />
        
        </>

    );
}

export default ReactVirtuoso



