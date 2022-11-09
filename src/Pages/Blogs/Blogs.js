import React from 'react';
import useTitle from '../../hook/useTitle';

const Blogs = () => {
  useTitle('Blogs');
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8 sm:mx-auto'>
           <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Difference between SQL and NoSQL?</h2>
    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">What is JWT, and how does it work?</h2>
    <p>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
    <p>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
    <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. How NodeJS handle multiple client requests?NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;