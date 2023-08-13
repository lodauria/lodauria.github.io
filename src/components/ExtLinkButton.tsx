import { SocialIcon } from "react-social-icons";

interface ExtLinkButtonProps {
  align?: string;
  social?: string;
  href: string;
  text: string;
}

function ExtLinkButton({
  align = "left",
  social = "sharethis",
  href,
  text,
}: ExtLinkButtonProps) {
  return (
    <div className={"social-button " + align}>
      <SocialIcon url={href} network={social} target="_blank" />
      <a href={href} target="_blank" rel="noreferrer">
        <span>{text}</span>
      </a>
    </div>
  );
}

export default ExtLinkButton;
