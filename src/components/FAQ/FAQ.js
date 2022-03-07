import "./FAQ.scss";
import FAQCard from "./FAQCard";

const FAQ = function () {
  return (
    <section className="container faq">
      <h2 className="sectional-heading heading--secondary">
        Frequently Asked Questions
      </h2>
      <div className="faq__cards">
        <FAQCard
          query="How much i will have to pay?"
          ans="It's depends on the length of project, but i am new at Online work, and i need better reviews to servive in this tough competition, so this time i will work for minimum price for you or may for free for first time."
        />

        <FAQCard
          query="How much time would you take to finish my project completely?"
          ans="I can complete your project before reaching the deadlines, but first i would wish to know about that project to accurately tell about he time "
        />

        <FAQCard
          query="Do you have any social media account, where i can know about you?"
          ans="Yeah! i have social media account. you will get that on contact section."
        />
        <FAQCard
          query="What things do you expect from me?"
          ans="I expect a design page from you. That design page may be anything like .figma or .xd. becuase i am frontend web developer not designer. I develope a website based on any design."
        />
        <FAQCard
          query="Where i can contact you?"
          ans="You can send me message at gmail or whatsapp. You can visit my Contact page to get more information about my contacts."
        />
      </div>
    </section>
  );
};

export default FAQ;
