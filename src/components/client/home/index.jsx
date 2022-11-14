import HomeHero from "./home-hero";
import HomeCard from "./home-card";
import HomeCeiling from "./home-ceiling";
import HomeCost from "./home-cost";
import HomeAdvantage from "./home-advantage";
import HomeDiscount from "./home-discount";
import HomeChoose from "./home-choose";
import HomeInstalled from "./home-installed";
import HomeSxema from "./home-sxema";
import HomeMap from "./home-maps";
function HomeComponent(params) {
  return (
    <>
      <HomeHero isText={true} />
      {/* <HomeCard /> */}
      <HomeCeiling />
      <HomeCost isCost={true} />
      <HomeAdvantage />
      <HomeChoose/>
      <HomeInstalled/>
      <HomeSxema/>
      <HomeMap/>
    </>
  );
}
export default HomeComponent;
