//functional component and props example

function studentInfo(props){
    const name = 'Harshada';
    return(
        <>
            <h1>{props.fname}</h1>
            <h1>{props.age}</h1>

        </>
    );
}

export default studentInfo;