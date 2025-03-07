import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Template({children}) {
    return (
        <>
            <div className="container mx-auto p-10">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}

