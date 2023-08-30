import "./MercorPage.css";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const MercorPage = () => {
  const navigation = [
    {
      name: "SIGN IN",
      href: "/login",
    },
    {
      name: "LEGAL",
      href: "/legal",
    },
    {
      name: "LICENSES",
      href: "/lincenses",
    },
    {
      name: "SECURITY",
      href: "/security",
    },
    {
      name: "CAREERS",
      href: "/careers",
    },
    {
      name: "PRESS",
      href: "/press",
    },
    {
      name: "SUPPORT",
      href: "/support",
    },
    {
      name: "STATUS",
      href: "/status",
    },
    {
      name: "CODEBLOG",
      href: "/codeblog",
    },
  ];
  return (
    <>
      <div className="mercor-main-div">
        <div className="mercor-header">
          {navigation.map((nav) => (
            <a className="mercor-header-link" href={nav.href}>
              {nav.name}
            </a>
          ))}
        </div>
        <div className="mercor-footer">
          <div className="download-button">
            <Button variant="outlined" className="download-for-ios">
              <AppleIcon /> APP STORE
            </Button>
            <Button variant="outlined" className="download-for-android">
              <GoogleIcon />
              GOOGLE PLAY
            </Button>
          </div>
          <div className="mercor-footer-share-icons">
            <p className="page-description">
              Lorem Ipsum Eos consequatur quasi aut quia laudantium eos natus
              molestiae non rerum eius est quod ipsam nam enim voluptas! At
              rerum odit et facere quis sed rerum quia ut quia minima non
              molestias quidem. Sit dolores dolore ut tempora debitis At quidem
              optio ut vero recusandae et quaerat consequatur. Sit nesciunt!!
            </p>
            <div className="social-share-icon">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MercorPage;
