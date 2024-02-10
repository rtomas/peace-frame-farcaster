import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <div className="flex flex-col items-center">
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>Frame test for farcaster @rtomas</p>
            </div>
        </main>
    );
}
