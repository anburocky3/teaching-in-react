import Header from "../components/Header";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <title>Contact Us - MyApp</title>
      <Header />

      <section className="p-10 bg-orange-50">
        <h1 className="font-semibold text-2xl">Contact Us</h1>
        <p className="text-sm text-gray-600">Feel free to reach out to us!</p>
      </section>
    </div>
  );
}
