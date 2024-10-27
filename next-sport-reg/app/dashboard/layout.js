import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardLayout({ children }) {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/dashboard" className="nav-link text-white">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">{children}</div>
        </section>
    );
}
