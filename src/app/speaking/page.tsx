export default function SpeakingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">AI Speaking Assistant</h1>
      
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title text-primary">Practice Your Speaking Skills</h2>
          <p className="mb-4">
            Our AI-powered Speaking Assistant evaluates your responses based on the official IELTS criteria: 
            Fluency, Lexical Resource, Grammar, and Pronunciation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Part 1: Introduction & Interview</h3>
                <p>Practice answering questions about yourself and familiar topics.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Part 2: Individual Long Turn</h3>
                <p>Practice speaking for 1-2 minutes on a given topic.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Part 3: Two-way Discussion</h3>
                <p>Practice discussing abstract issues and concepts related to the topic.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Full Speaking Test</h3>
                <p>Complete all three parts in one session for a comprehensive evaluation.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Full Test</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <p>Make sure you have a quiet environment and a working microphone before starting the test.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Your Recent Speaking Tests</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Test Type</th>
                  <th>Band Score</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Oct 5, 2025</td>
                  <td>Full Test</td>
                  <td>6.5</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 3, 2025</td>
                  <td>Part 2 Practice</td>
                  <td>6.0</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 1, 2025</td>
                  <td>Part 1 Practice</td>
                  <td>7.0</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}