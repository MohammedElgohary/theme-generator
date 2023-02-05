import Header from "../header/header";
import Footer from "../footer/footer";
import { AppContainer } from "../../components/Containers/containers";
import { initializeStyle } from "../../../globalStyles";

interface RootProps {
  dir?: "rtl" | "ltr";
  [ksy: string]: any;
}

export default function Root({ dir = "ltr", ...props }: RootProps) {
  const GlobalStyle = initializeStyle(dir);

  return (
    <>
      <GlobalStyle />

      <AppContainer className="app" dir={dir}>
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Content */}
        <main>{props.children}</main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </AppContainer>
    </>
  );
}
