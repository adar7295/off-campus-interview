import { useRouter } from "next/navigation";
import { createContext, useContext,useState } from "react";

const CompanyContext = createContext()

export const CompanyProvider = ({children}) => {
    const [ currentCompany ,setcurrentCompany ] = useState (
        JSON.parse(sessionStorage.getItem('company'))
    );
const router = useRouter(); 
    const [ loggedIn , setLoggedIn ] = useState(currentCompany !== null)

    const logout = () => {
        sessionStorage.removeItem('company');
        setLoggedIn(false)
        router.push('/compLogin')
    }
return (
    <CompanyContext.Provider value = {{loggedIn , setLoggedIn ,currentCompany,setcurrentCompany}}>
        {children}
    </CompanyContext.Provider>
)
}

const useCompanyContext = () => useContext(CompanyContext); 
export default useCompanyContext;