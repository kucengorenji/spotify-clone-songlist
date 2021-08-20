import style from './style.module.css'

export default function Link({ to: url, isExternal = false, children }) {
  return (
    // eslint-disable-next-line
    <a
      className={style.link}
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
