import { HeaderLogin } from "./components/HeaderLogin";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <HeaderLogin />
            <div>{children}</div>
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Dancing+Script&family=Prompt:wght@800&display=swap" rel="stylesheet">
            </link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@1,500&display=swap" rel="stylesheet">
            </link>
        </div>
    )
}