import { useState } from "react";
export function TwiterFollowCard({
  formatUserName,
  userName,
  image,
  children,
  initialIsFollowiing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowiing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClasname = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

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
        <button onClick={handleClick} className={buttonClasname}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
