import Image from "next/image";
import { PlatformIcon } from "./icons";
import { links, profile } from "./links";

export default function Home() {
  return (
    <main className="container">
      <header className="profile">
        <div className="banner">
          <Image src="/banner.jpg" alt={profile.name} width={889} height={690} priority />
        </div>
        <h1 className="sr-only">{profile.name}</h1>
        <p>{profile.bio}</p>
      </header>

      <ul className="links">
        {links.map((link) => (
          <li key={link.platform}>
            <a
              className={`link link--${link.platform}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link__icon">
                <PlatformIcon platform={link.platform} />
              </span>
              <span className="link__text">
                <strong>{link.label}</strong>
                <small>{link.handle}</small>
              </span>
              <span className="link__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  );
}
