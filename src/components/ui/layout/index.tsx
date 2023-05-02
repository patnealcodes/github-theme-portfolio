import Header from "components/header";
import Nav from "components/nav";
import Sidebar from "components/sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <div className="width-container flex gap-6">
        <Sidebar />
        <section>
          Body stuff
        </section>
      </div>
    </>
  )
}