export default function ListeningPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">Listening Practice</h1>
      
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title text-primary">Improve Your Listening Skills</h2>
          <p className="mb-4">
            Practice with a variety of audio materials and question types that mirror the actual IELTS test. 
            Get instant scoring and detailed explanations for each answer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Section 1: Conversation</h3>
                <p>Practice with everyday conversations between two speakers.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Section 2: Monologue</h3>
                <p>Practice with a single speaker talking about a general topic.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Section 3: Discussion</h3>
                <p>Practice with conversations among up to four speakers in an academic context.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Section 4: Lecture</h3>
                <p>Practice with a monologue on an academic subject.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <p>Make sure you have headphones or speakers ready before starting the test.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Your Recent Listening Tests</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Test Type</th>
                  <th>Score</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Oct 5, 2025</td>
                  <td>Full Test</td>
                  <td>32/40</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 3, 2025</td>
                  <td>Sections 1 & 2</td>
                  <td>18/20</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 1, 2025</td>
                  <td>Sections 3 & 4</td>
                  <td>15/20</td>
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