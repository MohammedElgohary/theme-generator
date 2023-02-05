import { HomeContainer } from "./home.styles";
import "./home.styles.scss";

export default function HomePage() {
  return (
    <HomeContainer className="HomePage">
      <h1>Primary.main</h1>
      <button>Primary.300</button>
      <p>
        <mark>comming from ./home.styles.scss</mark>{" "}
        <mark>var(--color-quaternary-100)</mark>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed mollitia
        repellat accusantium dolor, saepe sapiente nesciunt, doloribus sint
        quibusdam ea, asperiores dolorem eligendi commodi qui similique
        voluptate labore cumque id?
      </p>
    </HomeContainer>
  );
}
