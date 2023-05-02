import Layout from "components/ui/layout";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(matcher.matches)
    matcher.onchange = () => setIsDarkMode(matcher.matches)
  }, [])

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" href={`/favicon-${isDarkMode ? 'dark' : 'light'}.ico`} />
      </Helmet>
      <Layout />
    </HelmetProvider>
  )
}