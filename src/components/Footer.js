import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <FooterContainer>
            <FooterText>
                <FooterLinks>
                    <FooterLink>About Disney+ Hotstar</FooterLink>
                    <FooterLink>Terms Of Use</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                    <FooterLink>FAQ</FooterLink>
                    <FooterLink>Feedback</FooterLink>
                    <FooterLink>Careers</FooterLink>
                </FooterLinks>
                <FooterContent>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</FooterContent>
            </FooterText>
            <FooterSocial></FooterSocial>
            <FooterDownload></FooterDownload>
        </FooterContainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`

`
const FooterContainer = styled.div`
    padding: 15px 15px 30px;
`
const FooterContent = styled.div`
    font-size:12px;
    color:#fff
`
const FooterText = styled.div`

`
const FooterLinks = styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap
`
const FooterLink = styled.li`
    font-size: 14px;
    color:#fff;
    margin-right:15px;
    cursor:pointer
`
const FooterSocial = styled.div`

`
const FooterDownload = styled.div`

`