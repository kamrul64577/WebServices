// ... existing imports ...

const ContactUs = () => {
    // ... existing state and refs ...
  
    const sendEmail = (e) => {
      // ... existing code ...
          console.log('Customer Email:', email);
      // ... rest of the function ...
    };
  
    // ... existing whatsappNumber ...
  
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us!</h1>
            <p className="py-6">Fill out the form to get in touch with us or send us a message on WhatsApp.</p>
            <div className="flex flex-col space-y-4">
              <a href={`https://wa.me/${whatsappNumber}`} className="btn btn-primary">Message on WhatsApp</a>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              {isSubmitted ? (
                <div className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Your message has been sent successfully!</span>
                </div>
              ) : (
                <>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="from_name" placeholder="Your name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="from_email" placeholder="Your email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea name="message" placeholder="Write your message" className="textarea textarea-bordered" required></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
        {customerEmail && (
          <div className="mt-4 text-center">
            <p>Latest customer email: {customerEmail}</p>
          </div>
        )}
      </div>
    );
  };
  
  // ... export statement ...