import styles from '../../styles/Home.module.css'
import TextPressure from "../components/blocks/TextPressure"
import JoinNowButton from "../components/blocks/JoinNowButton"

const Home = () => {
  return (
    <div id={styles.main}>
      <div id={styles.header}>
        <div id={styles.title}>
          <p>SkillSwap</p>
        </div>
        <div id={styles.subtitle}>
          <div style={{ position: 'relative' }}>
            <TextPressure
              text="SkillSwap"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#113f67"
              strokeColor="#ff0000"
              minFontSize={300}
            />
          </div>
          <JoinNowButton />
        </div>
      </div>
    </div>
  );
};

export default Home;