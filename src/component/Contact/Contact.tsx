import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2>Contact with Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your Name" required />
          <label>Email</label>
          <input type="text" placeholder="Enter your Email" required />
          <textarea placeholder="Enter your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
