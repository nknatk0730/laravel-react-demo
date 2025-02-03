import { Head } from "@inertiajs/react";

export default function MainLayout({ children }) {
  return (
    <div>
      <Head>
        <title>{import.meta.env.VITE_APP}</title>
        <meta name="description" content="Laravel Inertia.js" />
        <meta name="theme-color" content="system" />
      </Head>
      {children}
    </div>
  )
}
