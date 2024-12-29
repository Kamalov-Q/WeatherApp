import type { PropsWithChildren } from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            {/* Header Component */}
            <Header />
            {/* Main Component */}
            <main className="min-h-screen container mx-auto px-4 py-8">
                {children}
            </main>
            {/* Footer Component */}
            <Footer />
        </div>
    )
}

export default Layout