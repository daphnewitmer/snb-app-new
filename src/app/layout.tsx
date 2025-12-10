import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "SNB",
    description: "Schept 'n Band App",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0ea5e9" />
            </head>
            <body className="">{children}</body>
        </html>
    )
}
