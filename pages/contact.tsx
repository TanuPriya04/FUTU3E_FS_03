import SEO from "../components/SEO";
export default function Contact() {
  return (
     <>
      <SEO
        title="Contact Amul | Get in Touch"
        description="Reach out to Amul for customer support, business inquiries, or product feedback. We’re happy to help."
        keywords="Contact Amul, customer support, dairy help, India"
      />
    <div className="p-10">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p>Email: info@amul.com</p>
      <p>Customer Care: 1800-258-3333</p>
    </div>
       </>
  );
}
