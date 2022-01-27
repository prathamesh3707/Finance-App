import React from "react";
import classes from "./Chapter1.module.css";

function Chapter1() {
  return (
    <section className={classes.text_card}>
      <div className={classes.content}>
        <h1>Cryptocurrencies</h1>

        <p>
          Cryptocurrencies, or virtual currencies, are digital means of exchange
          created and used by private individuals or groups. Usually built using
          blockchain technology, Cryptocurrencies are almost always designed to
          be free from government manipulation and control.
        </p>

        <p>
          Cryptocurrency's technical foundations date back to the early 1980s
          when an American cryptographer named David Chaum conceived an
          anonymous cryptographic electronic money called Ecash. Twelve years
          later, in 1995, he implemented it through Digicash. However, the first
          time the idea or term "Cryptocurrency" was coined was in 1998.
        </p>

        <h3>Top 3 most valued Cryptocurrencies-</h3>

        <li>
          Bitcoin- created by Satoshi Nakamoto in 2009 it is the preeminent
          cryptocurrency and the most valued worth $744B.The top companies that
          use bitcoin are Amazon, Google, Microsoft, Paypal, Dell, and Mozilla.
        </li>

        <li>
          Ethereum- Ethereum is an open-source blockchain-based platform used to
          create and share business, financial services, and entertainment
          applications.
        </li>

        <li>
          Dogecoin-Dogecoin is a cryptocurrency created by software engineers
          Billy Markus and Jackson Palmer, who decided to create a payment
          system as a "joke", making fun of the wild speculation in
          cryptocurrencies at the time.
        </li>

        <p>
          The cryptocurrency market continues to gain traction in various facets
          of government, business, and personal financial activities.
          Governments and large corporations are now using the cryptocurrency
          market to evaluate how they can adapt the crypto transfer mechanism to
          ascertain how they may provide security services in a more efficient
          manner. While cryptocurrency has had its fair share of controversies
          and market ups and downs, it has still managed to slowly integrate
          itself into the mainstream financial system.
        </p>

        <h4>
          Cryptocurrency startup companies have boomed in the last few years and
          some have grown at a rapid pace and become big names.Here are some top
          startups based on cryptocurrency.
        </h4>
        <li>
          Cobo- It is primarily a wallet service that supports a variety of
          different coins.
        </li>
        <li>Finhaven- It plans to create digitized assets.</li>
        <li>Wazirx- India’s largest crypto exchange platform.</li>

        <p>
          The Cryptocurrency sector has over 18K+ startups that comprise
          companies offering platforms for the circulation of cryptocurrencies.
          This includes companies offering services like a digital wallet,
          payment processing solutions, cryptocurrency mining software, and
          trading platform for cryptocurrencies
        </p>
        <button>Take a Quiz</button>
      </div>
    </section>
  );
}

export default Chapter1;
