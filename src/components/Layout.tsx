import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {GlobalStyle, theme} from "../styles";
import Nav from "./Nav";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
    const isHome = location.pathname === '/';

    return (
        <div>
            {/* TODO add Head */}
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />

                    <a className="skip-to-content" href="#content">
                        Skip to Content
                    </a>

                    <StyledContent>
                        <Nav isHome={isHome} />

                        <div id="content">
                            {children}
                            {/*<Footer />*/}
                        </div>
                    </StyledContent>
                </ThemeProvider>
            </div>

        </div>
    );
};

export default Layout;
