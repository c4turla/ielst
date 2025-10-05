export default function WritingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">AI Writing Grader</h1>
      
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title text-primary">Improve Your Writing Skills</h2>
          <p className="mb-4">
            Our AI-powered Writing Grader evaluates your essays based on the official IELTS criteria: 
            Task Achievement, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Academic Task 1</h3>
                <p>Practice describing charts, graphs, diagrams, and processes.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Academic Task 2</h3>
                <p>Practice writing essays on academic topics and issues.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">General Training Task 1</h3>
                <p>Practice writing letters for various situations.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">General Training Task 2</h3>
                <p>Practice writing essays on general topics and issues.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <p>Make sure you write at least 150 words for Task 1 and 250 words for Task 2 to get an accurate evaluation.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Your Recent Writing Tests</h2>
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
                  <td>Academic Task 2</td>
                  <td>7.0</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 3, 2025</td>
                  <td>Academic Task 1</td>
                  <td>6.5</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 1, 2025</td>
                  <td>General Training Task 2</td>
                  <td>6.0</td>
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