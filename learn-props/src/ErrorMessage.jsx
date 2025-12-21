const ErrorMessage=({items})=>{//directing array destructuring of the argument.
    return (
        <>
            {items.length === 0 && <h1>List is empty now</h1>}
        </>
    );
}
export default ErrorMessage;