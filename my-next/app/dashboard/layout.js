<<<<<<< HEAD
export default function DashboardLayout({
    children,
}) {
    return (
        <section>
            <nav className="bg-blue-500 p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/dashboard" className="text-white hover:text-blue=200">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/setting" className="text-white hover:text-blue=200">
                            Setting
=======
import Link from 'next/link';
export default function DashboardLayout({
    children // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
            <nav className="bg-blue-500 p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/dashboard" className="text-white hover:text-blue-200">
                        Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/setting" className="text-white hover:text-blue-200">
                        Setting
                        </Link>
                    </li>
                     <li>
                        <Link href="/dashboard/users" className="text-white hover:text-blue-200">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/posts" className="text-white hover:text-blue-200">
                            Posts
>>>>>>> 5937dea2f6951ab2a25f6c94b102ee5347b2f535
                        </Link>
                    </li>
                </ul>
            </nav>
<<<<<<< HEAD
            {children}
        </section>
        
    )
}

=======
        {children}
      </section>
    )
  }
>>>>>>> 5937dea2f6951ab2a25f6c94b102ee5347b2f535
