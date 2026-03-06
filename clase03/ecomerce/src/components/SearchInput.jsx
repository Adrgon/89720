import { useRef }from "react";


function SearchInput({placeholder = 'Buscar...'}){
    const inputRef = useRef(null)
    
    //console.log(inputRef)

    const handleFocusSearch = () => {
        inputRef.current.focus()
        console.log(inputRef.current.value)
    }
    
    return (
        <div>
            <input 
                type="text" 
                placeholder={placeholder} 
                aria-level="Buscar" 
                ref={inputRef}
            />
            <button onClick={handleFocusSearch}>Envocar busqueda</button>
        </div>
    )
}

export default SearchInput;
