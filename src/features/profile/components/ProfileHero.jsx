import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";
import {
  getDisplayBio,
  getDisplayName,
  getDisplayUsername,
} from "../utils/profileDisplayUtils";

export default function ProfileHero({
  user,
  isAuthenticated,
  canEdit = false,
  totalStreak = 0,
  totalCompleted = 0,
  totalLessons = 0,
  totalPct = 0,
  editOpen,
  onToggleEdit,
  isFollowing = false,
  followSaving = false,
  onToggleFollow,
  onLoadConnections,
}) {
  const [activeList, setActiveList] = useState(null);
  const [connectionUsers, setConnectionUsers] = useState([]);
  const [connectionLoading, setConnectionLoading] = useState(false);
  const [connectionError, setConnectionError] = useState("");

  const displayName = getDisplayName(user);
  const username = getDisplayUsername(user);
  const bio = getDisplayBio(user);
  const following = user?.followingCount ?? 0;
  const followers = user?.followersCount ?? 0;

  async function openConnectionList(type) {
    if (activeList === type) {
      setActiveList(null);
      return;
    }

    setActiveList(type);
    setConnectionUsers([]);
    setConnectionError("");
    setConnectionLoading(true);

    try {
      const data = await onLoadConnections?.(type);
      setConnectionUsers(Array.isArray(data?.users) ? data.users : []);
    } catch (error) {
      setConnectionError(error.message || `Could not load ${type}`);
    } finally {
      setConnectionLoading(false);
    }
  }

  return (
    <section className="profile-hero">
      <div className="profile-hero-main">
        <div className="profile-hero-avatar profile-hero-avatar--lg">
          <ProfileAvatar user={user} size="lg" />
        </div>

        <div className="profile-hero-identity">
          <h1>{displayName}</h1>
          {username && <p className="profile-hero-username">{username}</p>}
          {bio ? (
            <p className="profile-hero-bio">{bio}</p>
          ) : canEdit ? (
            <p className="profile-hero-bio profile-hero-bio--empty">
              Add a bio in Edit profile.
            </p>
          ) : null}

          <div className="profile-hero-social">
            <div className="profile-hero-stats">
              <button
                type="button"
                className="profile-hero-stat"
                onClick={() => openConnectionList("following")}
                aria-expanded={activeList === "following"}
              >
                <strong>{following}</strong>
                <span>Following</span>
              </button>
              <button
                type="button"
                className="profile-hero-stat"
                onClick={() => openConnectionList("followers")}
                aria-expanded={activeList === "followers"}
              >
                <strong>{followers}</strong>
                <span>Followers</span>
              </button>
            </div>
            {!canEdit && isAuthenticated ? (
              <button
                type="button"
                className="profile-hero-message-btn"
                onClick={onToggleFollow}
                disabled={followSaving}
              >
                {followSaving
                  ? "Saving..."
                  : isFollowing
                    ? "Unfollow"
                    : "Follow"}
              </button>
            ) : null}
          </div>

          {activeList && (
            <div className="profile-connection-panel">
              <div className="profile-connection-panel-head">
                <strong>
                  {activeList === "following" ? "Following" : "Followers"}
                </strong>
                <button type="button" onClick={() => setActiveList(null)}>
                  Close
                </button>
              </div>

              {connectionLoading ? (
                <p className="profile-connection-state">Loading...</p>
              ) : connectionError ? (
                <p className="profile-connection-state profile-connection-state--error">
                  {connectionError}
                </p>
              ) : connectionUsers.length === 0 ? (
                <p className="profile-connection-state">
                  No {activeList} yet.
                </p>
              ) : (
                <div className="profile-connection-list">
                  {connectionUsers.map((connectionUser) => (
                    <Link
                      key={connectionUser._id || connectionUser.id || connectionUser.username}
                      to={`/@${connectionUser.username}`}
                      className="profile-connection-user"
                    >
                      <div className="profile-connection-avatar">
                        <ProfileAvatar user={connectionUser} size="sm" />
                      </div>
                      <span>
                        <strong>
                          {getDisplayName(connectionUser)}
                        </strong>
                        <small>{getDisplayUsername(connectionUser)}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {canEdit ? (
          <div className="profile-hero-side">
            <div className="profile-hero-metrics">
              <div className="profile-hero-metric">
                <span>Current streak</span>
                <strong>
                  {totalStreak}{" "}
                  {totalStreak === 1 ? "day" : "days"}
                </strong>
              </div>
              <div className="profile-hero-metric">
                <span>Lessons done</span>
                <strong>
                  {totalCompleted}/{totalLessons}
                </strong>
              </div>
              <div className="profile-hero-metric">
                <span>Overall progress</span>
                <strong>{totalPct}%</strong>
              </div>
            </div>
            <button
              type="button"
              className="profile-hero-edit-btn"
              onClick={onToggleEdit}
              aria-expanded={editOpen}
            >
              {editOpen ? "Close edit" : "Edit profile"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
