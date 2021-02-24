import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  height: 80px;
  margin: 0 auto;
  align-items: center;
  padding-top: 100px;
  // background: red;
  max-width: 1000px;
  display: flex;
  font-size: 13px;

  @media (max-width: 768px) {
    color: white;
    font-size: 10px;
  }
`
const Column = styled.div`
  flex: 50%;

  .left {
    margin-right: 64px;
    text-align: right;
   
    }
    
  }

  .right {
    margin-left: 64px;
    color:white;
  }

  @media (max-width: 768px) {
    .left{
      margin-right:32px;
    }

    .right{
      margin-left:32px;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      {/* <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks> */}
      <Column>
        <div className="left">Created by Edwin Luo</div>
      </Column>
      <Column>
        <div className="right">logo</div>
      </Column>
    </StyledFooter>
  )
}

export default Footer
