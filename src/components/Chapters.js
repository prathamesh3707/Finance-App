import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Chapters.module.css";

export default function Chapters() {
  return (
    <Fragment>
      <div className={classes.ch1}>
        <h2 className={classes.subheading}>Chapter 1: Cryptocurrency</h2>

        {/* <img
          className={classes.crypto}
          src="../assets/crypto1.jpg"
          alt="Crypto"
        /> */}
        <div className={classes.cryp}></div>
        <Link className={classes.link} to="/chapter1">
          Go to Chapter 1
        </Link>
      </div>
      <div className={classes.ch2}>
        <h2 className={classes.subheading}>Chapter 2: NFTs</h2>
        {/* <img className={classes.crypto} src="../assets/nft.png" alt="Crypto" /> */}
        <div className={classes.nft}></div>
        <Link className={classes.link} to="/chapter3">
          Go to Chapter 2
        </Link>
      </div>
      <div className={classes.ch3}>
        <h2 className={classes.subheading}>Chapter 3: Mutual Funds</h2>
        {/* <img className={classes.crypto} src="../assets/mf.jpg" alt="Crypto" /> */}
        <div className={classes.mf}></div>
        <Link className={classes.link} to="/chapter3">
          Go to Chapter 3
        </Link>
        {/* <button type="button" name="button" className={classes.button}>
          Go To Chapter
        </button> */}
      </div>
    </Fragment>

    // <section>
    //   <h1>This is Chapters page</h1>
    //   <ul>
    //     <Link to="/chapter1">C1</Link>
    //     <Link to="/chapter2">C2</Link>
    //     <Link to="/chapter3">C3</Link>
    //   </ul>
    // </section>
  );
}
