import { IconGithub } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="muted">© {new Date().getFullYear()} Elian Rodriguez</p>

        <a className="footer-link" href="https://github.com/lXentyl" target="_blank" rel="noreferrer">
          <IconGithub /> GitHub
        </a>
      </div>
    </footer>
  );
}
