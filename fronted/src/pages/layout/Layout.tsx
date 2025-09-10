import "./Layout.css";
import Content from "../../components/application-layout/Content";
import Logo from "../../components/application-layout/Logo";
import Slogen from "../../components/application-layout/Slogen";

import NavHome from "../../components/nav/NavHome";

export default function Layout() {
  return (
    <section id="PostsPage">
      <div id="headerPage">

        <div id="i"><Logo /></div>
        <div><NavHome /></div>

        <Slogen />
      </div>
      <br />
      <section id="contentPage">
        <Content />
      </section>

    </section>
  )
}
