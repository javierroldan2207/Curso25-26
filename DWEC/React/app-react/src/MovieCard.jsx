const Moviecard = ({title,direcctor,year})=>{
    return(
        <div>
            <h1>{title}</h1>
        <div/>
            <p>{direcctor}</p>
            <p>{year}</p>
        </div>
    );
};

export default Moviecard;