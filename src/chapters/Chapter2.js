import React from "react";
import classes from "./Chapter1.module.css";

function Chapter2() {
  return (
    <section className={classes.text_card}>
      <div className={classes.content}>
        <h1>NFTs (Non-Fungible Tokens)</h1>
        <p>
          At the age of 8 years, a young boy created his first painting. He was
          a matador in his native Spain. That young boy was Pablo Picasso also
          known as one of the world's greatest artists. Today, this famous
          artwork is in the public domain in the United States because it was
          published before January 1, 1923. If Non-Fungible-Tokens were invented
          during the time of Picasso, official ownership of his early childhood
          art could have been documented naming ownership of his masterpiece.
          So, what exactly are Non-Fungible Tokens or NFTs?
          <br />
          <strong>
            NFTs are unique digital tokens that serve as proof of ownership of
            an asset, and cannot be replicated.
          </strong>
          NFTs use blockchain technology, which acts as a digital record of all
          transactions related to the NFT on a vast network of computers. While
          NFTs can be used to represent physical assets, like property or
          artwork, the majority of NFTs represent collectible digital assets
          like digital artwork, music, photos, videos, or even virtual plots of
          land in video games!
        </p>
        <p>
          <strong>How much does a NFT cost?</strong>
          <br />
          Each NFT is unique, so they all have different values. Like with any
          asset, its price is determined by demand and supply. For example, an
          NFT for a picture of a cat was sold by Paris Hilton for around
          $17,000. The most expensive NFT so far is a piece of digital art sold
          for over sixty-nine million dollars.
        </p>
        <p>
          <strong> How are NFTs created?</strong>
          <br />
          • If you want to create an NFT, you have to first choose a specific
          blockchain technology, and upload your content to that blockchain.
          <br />
          • Then, you select the NFT marketplace to list your NFT on, since NFTs
          can only be bought and sold on specialized NFT marketplaces.
          <br />
          • You can even add a royalty or commission to your NFT, which would
          result in a payment to you every time your NFT changes hands.
          <br />
        </p>
        <p>
          <strong> How are NFTs bought and sold?</strong> <br />
          In order to buy or sell an NFT, you need a digital wallet specific to
          that marketplace, which needs to be loaded with the cryptocurrency
          accepted at that marketplace (for which marketplaces charge exorbitant
          processing fees!)
        </p>

        <p>
          <strong>Investing in NFTs</strong>
          <br />
          NFTs are digital assets that act as secure documentation of ownership
          and can be a worthwhile investment for collectors. One big downside of
          NFTs is the huge environmental impact they have due to the amount of
          energy consumed for every single transaction.
        </p>
        <button>Take a Quiz</button>
      </div>
    </section>
  );
}

export default Chapter2;
