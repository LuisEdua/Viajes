import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
function Layaout1({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
export default Layaout1;