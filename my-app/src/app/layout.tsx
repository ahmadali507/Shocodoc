import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata : Metadata = {
  title: "ShocoDoc", 
  description: "your go to collaborative doc sharing application", 
}
export default function RootLayout({ children }: {children : React.ReactNode}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme : dark, 
        variables : {colorPrimary : "#3371FF", fontSize : '16px'}
      }}
    >

    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
