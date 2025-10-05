export default function ReadingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">Reading Practice</h1>
      
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title text-primary">Enhance Your Reading Skills</h2>
          <p className="mb-4">
            Practice with a variety of texts and question types that mirror the actual IELTS test. 
            Get instant scoring and detailed explanations for each answer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Academic Reading</h3>
                <p>Practice with texts from books, journals, magazines, and newspapers.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">General Training Reading</h3>
                <p>Practice with texts from notices, advertisements, booklets, and newspapers.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Section Focus: Matching</h3>
                <p>Practice with matching headings, information, and features.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Section Focus: Completion</h3>
                <p>Practice with sentence, summary, note, table, diagram, and flow-chart completion.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Start Practice</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <p>Remember to manage your time effectively. You have 60 minutes to complete the test.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Your Recent Reading Tests</h2>
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
                  <td>Academic Full Test</td>
                  <td>35/40</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 3, 2025</td>
                  <td>General Training Full Test</td>
                  <td>33/40</td>
                  <td>
                    <button className="btn btn-sm btn-outline">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td>Oct 1, 2025</td>
                  <td>Academic Passages 1 & 2</td>
                  <td>25/26</td>
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