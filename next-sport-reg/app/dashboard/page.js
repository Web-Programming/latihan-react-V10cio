import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Selamat Datang di Sistem Registrasi Peserta</h1>
      <div className="d-flex justify-content-center">
        <Link href="/dashboard/event" className="btn btn-primary m-2">
          Lihat Daftar Peserta Event
        </Link>
        <Link href="/dashboard/participant" className="btn btn-success m-2">
          Registrasi Peserta Baru
        </Link>
      </div>
    </div>
  );
}
