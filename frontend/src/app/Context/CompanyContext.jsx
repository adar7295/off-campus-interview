import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const CompanyContext = createContext()

export const CompanyProvider = ({ children }) => {
    const router = useRouter();
    const [currentCompany, setCurrentCompany] = useState(
        JSON.parse(sessionStorage.getItem('company'))
    );
    const [companyLoggedIn, setCompanyLoggedIn] = useState(currentCompany !== null)

    const companyLogout = () => {
        sessionStorage.removeItem('company');
        setCompanyLoggedIn(false)
        router.push('/compLogin')
    }
    return (
        <CompanyContext.Provider value={{ companyLoggedIn, setCompanyLoggedIn, currentCompany, setCurrentCompany, companyLogout }}>
            {children}
        </CompanyContext.Provider>
    )
}

const useCompanyContext = () => useContext(CompanyContext);
export default useCompanyContext;