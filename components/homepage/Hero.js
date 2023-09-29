import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/me.jpeg"}
          alt="An image showing Shane"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hello, I'm Shane!</h1>
      <p>Write something nice here</p>
    </section>
  );
};

export default Hero;
