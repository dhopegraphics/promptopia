import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center ">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promtopia is a platform that allows users to discover and share
        AI-powered
      </p>
      <Feed />
    </section>
  );
};

export default Home;
