import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/puzzle.svg").default,
    description: (
      <>
        PiePHP is a framework designed to implement an MVC architecture from the
        start of your project.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/focus.svg").default,
    description: (
      <>
        PiePHP allows you to focus on your content while we take care of the
        chores. Create your website and we'll handle the authentication.
      </>
    ),
  },
  {
    title: "Powered by PiePHP",
    Svg: require("@site/static/img/gear.svg").default,
    description: (
      <>
        Don't worry anymore about the autoload or even the routing, with PiePHP
        you won't have these concerns anymore.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row feature">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
