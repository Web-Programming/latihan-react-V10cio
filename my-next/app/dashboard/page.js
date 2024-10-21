import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>This is the Dashboard Page</h1>
            <p>
                &bull;<Link href="/dashboard/users/Valencio Arjun/2327250049">Valencio Arjun</Link>
                <br />
                &bull;<Link href="/dashboard/users/Felix/2327250059">Felix</Link>
            </p>
        </div>
    );
}
