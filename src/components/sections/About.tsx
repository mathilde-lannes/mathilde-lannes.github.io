import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import sr from "../../utils/sr";
import {usePrefersReducedMotion} from "../../hooks";
import { srConfig } from '../../config';
import {StaticImage} from "gatsby-plugin-image";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig());
    }, []);

    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'React Native', 'Node.js', 'Python'];


    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hello! My name is Mathilde and I enjoy making things for the Internet.
                            In my free time, I am really into knitting and sewing my own clothes, but this portfolio is all about tech!
                        </p>

                        <p>
                            I’ve had the privilege of working at{' '}
                            <a href="https://www.synapse-developpement.fr">a start-up specialized in NLP</a> and{' '}
                            <a href="https://www.thalesgroup.com/fr">a huge corporation</a>. My
                            main focus now is helping researchers at <a href="https://institutducerveau-icm.org/fr/">a neuroscience institute</a> by providing them tools to collect and analyze data.
                        </p>

                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <StaticImage
                            className="img"
                            src="../../images/me.png"
                            width={500}
                            quality={95}
                            alt="Headshot"
                        />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
