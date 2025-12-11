'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FaSplotch } from 'react-icons/fa';

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div>
            <div className="bg-base-600  bg-opacity-30 backdrop-blur-sm mx-auto">
                <div className="max-w-7xl mx-auto h-14 w-full sticky flex items-center justify-between p-4">
                    <div>
                        <h5 className="text-primary-400 font-bold text-2xl">Emblems RP</h5>
                    </div>

                    <div className="flex gap-10">
                        <div>
                            <Link className={['class1', 'class2']} className="text-gray-200 hover:font-semibold transition-all" href="/dashboard">Meu Inventário</Link>
                        </div>

                        <div>
                            <Link className="text-gray-200 hover:font-semibold transition-all" href="/dashboard/emblems">Emblemas</Link>
                        </div>
                    </div>

                    <div>
                        <button className="btn bg-primary-400">Resgatar <FaSplotch/></button>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto p-4">{children}</section>
        </div>
    )
}