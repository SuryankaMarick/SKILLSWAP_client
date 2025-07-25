import styles from '../../styles/Home.module.css'
import TextPressure from "../components/blocks/TextPressure"
import { Button } from "@/components/ui/button"
import InfinityScroller from '../components/blocks/InfinityScroller';


const Home = () => {
  return (
    <div id={styles.main}>
      <div id={styles.header}>
        <div id={styles.nav}>
          <p id={styles.title}>SkillSwap</p>
          <Button variant="outline">Join Now</Button>
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
              textColor="#E3FEF7"
              strokeColor="#ff0000"
              minFontSize={300}
            />
          </div>
          <p>Your Passion is Someone's Potential</p>
        </div>
        <InfinityScroller />
      </div>
    </div>
  );
};

export default Home;