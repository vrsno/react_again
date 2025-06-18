export function TwiterFollowCard({
  formatUserName,
  userName,
  isFollowing,
  image,
  children,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={image} alt="avatar" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
