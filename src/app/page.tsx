import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section id="intro">
      <h1>hi, i&apos;m runbin</h1>
      <p>i&apos;m a computer science student interested in ai, blockchain, and cyber security.</p>
      <p>i&apos;m trying to learn more about software and programming :) </p>
      
      <section id="projects">
        <h2>projects</h2>
        <p>some of my projects are on <a href="https://github.com/runbinz">github</a>. check them out! </p>
        <p>some interesting projects that are public:</p>
        <ul>
          <li>
            <a href="https://github.com/runbinz/solana_wallet_tracker">cool solana project</a>: tracks your solana wallet and shows amount of sol you have. learned golang!
          </li>
          <li>
            <a href="https://github.com/twelvenz/thefitnessapp">fitness app</a>: cool hackathon project with my friend. \o/
          </li>
          <li>
            <a href="https://mp-4-red-eta.vercel.app">danbooru post fetcher</a>: gets random posts from safebooru.
          </li>
          <li>
            <a href="https://lebronify-two.vercel.app">Lebronify</a>: listen to lebron parodies.
          </li>
        </ul> 
      </section>
  
      {/* <section id="friends" className={styles.friendsSection}>
        <h2>friends</h2>
        <div className={styles.friendsGrid}>
          <a href="#" className={styles.friendItem}>friend 1</a>
          <a href="#" className={styles.friendItem}>friend 2</a>
          <a href="#" className={styles.friendItem}>friend 3</a>
          <a href="#" className={styles.friendItem}>friend 4</a>
          <a href="#" className={styles.friendItem}>friend 5</a>
          <a href="#" className={styles.friendItem}>friend 6</a>
        </div>
      </section> */}
    </section>
  );
}; 

export default Home;
