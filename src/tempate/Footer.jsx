export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-600 pt-6 text-gray-400 text-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
                <p className="text-sm">&copy; {new Date().getFullYear()} Iqmal Bahrudin. All Rights Reserved.</p>
                <p className="text-sm">juanpratamapekalongan@gmail.com</p>
                
            </div>
        </footer>)
}

