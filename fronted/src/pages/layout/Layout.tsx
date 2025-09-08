import "./Layout.css";
import Content from "../../components/application-layout/Content";
import Logo from "../../components/application-layout/Logo";
import Slogen from "../../components/application-layout/Slogen";

export default function Layout() {
  return (
    <section id="PostsPage">
      <div id="headerPage">

        <div id="i"><Logo /></div>

        <Slogen />
      </div>
      <br />
      <section id="contentPage">
        <Content />
      </section>

    </section>
  )
}
