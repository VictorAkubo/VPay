import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen w-full justify-around font-inter">
            {children}
            <div className="auth-asset -mt-[390px]">
                <div className="-mt-[390px]">
                    <Image src="/icons/auth-image.svg" alt="Auth image" width={500} height={500} />
                </div>
            </div>
        </main>
    );
}