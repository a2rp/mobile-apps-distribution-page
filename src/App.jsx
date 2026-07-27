import Header from "./components/Header";
import AppRoutes from "./AppRoutes";
import { Styled } from "./AppStyled";
import Footer from "./components/Footer";
import DeepOceanRays from "./components/DeepOceanRays";

const App = () => {
    return (
        <Styled.Wrapper>
            <div className="bgWrapper">
                <DeepOceanRays />
            </div>

            <div className="fgWrapper">
                <Header />

                <Styled.Main>
                    <AppRoutes />
                </Styled.Main>

                <Footer />
            </div>
        </Styled.Wrapper>
    );
};

export default App;
