import type { NextPage } from "next";
import styles from "./left-side-bar.module.css";

type LeftSideBarType = {
  rectangle2963?: string;
  rectangle392?: string;
  icon?: string;
  iconLogout?: string;
};

const LeftSideBar: NextPage<LeftSideBarType> = ({
  rectangle2963,
  rectangle392,
  icon,
  iconLogout,
}) => {
  return (
    <div className={styles.leftSideBar}>
      <div className={styles.leftSideBarChild} />
      <div className={styles.frameParent}>
        <div className={styles.artistNameParent}>
          <div className={styles.artistName}>Artist name</div>
          <img className={styles.frameChild} alt="" src={rectangle2963} />
        </div>
        <div className={styles.menuItems}>
          <div className={styles.friends}>Friends</div>
          <div className={styles.friends}>Message</div>
          <div className={styles.friends}>My Tracks</div>
          <div className={styles.friends}>Money</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src={rectangle392} />
          <div className={styles.uploadTrackToStore}>
            <div className={styles.releaseATrack}>Release a track</div>
            <img className={styles.icon} alt="" src={icon} />
          </div>
        </div>
        <div className={styles.bottomFuncs}>
          <div className={styles.btnLogout}>
            <img className={styles.iconLogout} alt="" src={iconLogout} />
            <div className={styles.logOut}>Log out</div>
          </div>
          <div className={styles.settings}>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
