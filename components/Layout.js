import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      <Header className="flex-[2] w-full" />
      <div className="flex-[8] w-full">{props.children}</div>
      <Footer className="flex-[1] w-full" />
    </div>
  );
};

export default Layout;
