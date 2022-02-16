import { Link } from "react-router-dom";
import twitter from "../../assests/img/twitter.svg";
import facebook from "../../assests/img/facebook.svg";
import dribble from "../../assests/img/dribble.svg";
import github from "../../assests/img/github.svg";
import arrow from "../../assests/img/arrow.svg";
import {
    ScFooter, ScContent, ScContentSocialMedia, ScSocialMediaLinkWrapper,
    ScContentTitle, ScContentSubTitle, ScCopyright, ScCompanyTitle, ScCopyrightText, ScLinkWrapper,
    ScFollowPopupWrapper, ScFollowText
} from "./ScFooter";

const Footer = () => {
    return (
        <ScFooter>
            <ScContent>
                <div>
                    <ScContentTitle>
                        Thank you for supporting us!
                    </ScContentTitle>
                    <ScContentSubTitle>
                        Let's get in touch on any of these platforms.
                    </ScContentSubTitle>
                </div>
                <ScContentSocialMedia>
                    <ScSocialMediaLinkWrapper className="twitter">
                        <ScFollowPopupWrapper>
                            <ScFollowText>
                                Follow Us
                            </ScFollowText>
                            <img src={arrow} alt="arrow" />
                        </ScFollowPopupWrapper>
                        <Link to="">
                            <img src={twitter} alt="twitter logo" />
                        </Link>
                    </ScSocialMediaLinkWrapper>
                    <ScSocialMediaLinkWrapper className="facebook">
                        <Link to="">
                            <img src={facebook} alt="facebook logo" />
                        </Link>
                    </ScSocialMediaLinkWrapper>
                    <ScSocialMediaLinkWrapper className="dribble">
                        <Link to="">
                            <img src={dribble} alt="dribble logo" />
                        </Link>
                    </ScSocialMediaLinkWrapper>
                    <ScSocialMediaLinkWrapper className="github">
                        <Link to="">
                            <img src={github} alt="github logo" />
                        </Link>
                    </ScSocialMediaLinkWrapper>
                </ScContentSocialMedia>
            </ScContent>
            <ScCopyright>
                <ScCopyrightText>
                    © 2018  <ScCompanyTitle>Şikayetvar</ScCompanyTitle>
                </ScCopyrightText>
                <ScLinkWrapper>
                    <Link to="/">Posts</Link>
                </ScLinkWrapper>
            </ScCopyright>
        </ScFooter>
    )
};

export default Footer;