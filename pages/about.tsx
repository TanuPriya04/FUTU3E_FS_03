import SEO from "../components/SEO";
export default function About() {
  return (
    <>
      <SEO
        title="About Amul | India's Dairy Revolution"
        description="Learn about Amul's journey from a local cooperative to India's largest dairy brand committed to quality and innovation."
        keywords="About Amul, history, dairy brand, cooperative, India"
      />
    <div className="p-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-amul mb-6">About Amul</h1>

      <p className="mb-6 text-lg">
        **Amul**, short for the *Anand Milk Union Limited*, is a dairy cooperative based in Gujarat, India. 
        Founded in 1946, Amul played a pivotal role in India's White Revolution, transforming the country from 
        a milk-deficient nation into the world's largest producer of milk.
      </p>

      <h2 className="text-2xl font-semibold text-amul mt-8 mb-4">Our Mission</h2>
      <p className="mb-6 text-lg">
        To provide quality milk and milk products at affordable prices while empowering farmers 
        and rural communities through cooperative development. We strive to ensure nutrition, purity, and taste in every product we offer.
      </p>

      <h2 className="text-2xl font-semibold text-amul mt-8 mb-4">What We Do</h2>
      <ul className="list-disc pl-6 mb-6 text-lg">
        <li>Procure and process fresh milk from millions of farmers daily</li>
        <li>Produce a wide range of dairy products including milk, butter, paneer, ice creams, and chocolates</li>
        <li>Ensure strict quality control, hygiene, and sustainable practices</li>
        <li>Distribute across India and global markets</li>
      </ul>

      <h2 className="text-2xl font-semibold text-amul mt-8 mb-4">Our Values</h2>
      <p className="mb-6 text-lg">
        At Amul, we believe in community, trust, transparency, and innovation. We are proud of our farmer-owned model 
        that ensures fair pricing, rural upliftment, and consistent product excellence.
      </p>

      <h2 className="text-2xl font-semibold text-amul mt-8 mb-4">Legacy & Innovation</h2>
      <p className="mb-6 text-lg">
        With over 75 years of history, Amul continues to innovate with new flavors, packaging, and technology to meet the needs 
        of modern consumers, while staying true to our roots and cooperative spirit.
      </p>

      <p className="mt-10 text-center italic text-gray-600">
        "Amul – The Taste of India"
      </p>
    </div>
    </>
  );
}
