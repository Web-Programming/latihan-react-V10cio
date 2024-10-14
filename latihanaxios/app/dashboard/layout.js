import Link from 'next/link';
export default function DashboardLayout({
    children 
}) {
    return (
        <section>
            <nav className="bg-blue-500 p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/dashboard" className="text-white hover:text-blue-200">
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
            {children}
        </section>
    )
}