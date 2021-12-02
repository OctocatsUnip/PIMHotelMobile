import React, {useState, useContext, createContext, ReactNode} from 'react'

interface UserProps {
    login: string;
    senha: string;
}


interface FilterProps {
    valorQuarto: number;
    quantiaCamas: number;
    quantiaBanheiros: number;
    setValorQuarto: React.Dispatch<React.SetStateAction<number>>;
    setQuantiaCamas: React.Dispatch<React.SetStateAction<number>>;
    setQuantiaBanheiros: React.Dispatch<React.SetStateAction<number>>;
    setUser: React.Dispatch<React.SetStateAction<UserProps>>;
    user: UserProps;
}

interface Props {
    children: ReactNode;
}


const FilterContext = createContext({} as FilterProps)

function FilterProvider({children}:Props){
    const [valorQuarto, setValorQuarto] = useState(0)
    const [quantiaCamas, setQuantiaCamas] = useState(0)
    const [quantiaBanheiros, setQuantiaBanheiros] = useState(0)
    const [user, setUser] = useState({} as UserProps)

    return(
        <FilterContext.Provider
            value={{
                valorQuarto,
                quantiaCamas,
                quantiaBanheiros,
                setValorQuarto,
                setQuantiaCamas,
                setQuantiaBanheiros,
                user,
                setUser
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

function useFilter(){
    const context = useContext(FilterContext)

    return context;
}

export {useFilter, FilterProvider}