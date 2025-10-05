export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">Progress Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Overall Band Score</h2>
            <div className="text-4xl font-bold">6.5</div>
            <div className="text-sm opacity-70">Target: 7.0</div>
            <div className="w-full bg-base-200 rounded-full h-2.5 mt-2">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Tests Completed</h2>
            <div className="text-4xl font-bold">12</div>
            <div className="text-sm opacity-70">This month: 8</div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Study Streak</h2>
            <div className="text-4xl font-bold">7</div>
            <div className="text-sm opacity-70">days in a row</div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Next Test</h2>
            <div className="text-xl font-bold">Speaking</div>
            <div className="text-sm opacity-70">Scheduled for tomorrow</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Skills Breakdown</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Speaking</span>
                  <span>6.5</span>
                </div>
                <div className="w-full bg-base-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Writing</span>
                  <span>6.0</span>
                </div>
                <div className="w-full bg-base-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Listening</span>
                  <span>7.0</span>
                </div>
                <div className="w-full bg-base-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Reading</span>
                  <span>6.5</span>
                </div>
                <div className="w-full bg-base-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-primary text-primary-content rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  S
                </div>
                <div>
                  <p className="font-medium">Speaking Test</p>
                  <p className="text-sm opacity-70">Oct 5, 2025 • Score: 6.5</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-secondary text-secondary-content rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  W
                </div>
                <div>
                  <p className="font-medium">Writing Test</p>
                  <p className="text-sm opacity-70">Oct 3, 2025 • Score: 6.0</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-accent text-accent-content rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  L
                </div>
                <div>
                  <p className="font-medium">Listening Test</p>
                  <p className="text-sm opacity-70">Oct 1, 2025 • Score: 7.0</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-neutral text-neutral-content rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  R
                </div>
                <div>
                  <p className="font-medium">Reading Test</p>
                  <p className="text-sm opacity-70">Sep 29, 2025 • Score: 6.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title text-primary">AI Recommendations</h2>
          <div className="space-y-4">
            <div className="alert alert-info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p>Focus on improving your writing skills, especially Task Achievement and Coherence.</p>
              </div>
            </div>
            
            <div className="alert alert-info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p>Practice more with Part 2 of the Speaking test to improve your fluency and lexical resource.</p>
              </div>
            </div>
            
            <div className="alert alert-info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p>Review your Reading test answers to understand why you made mistakes in the True/False/Not Given questions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Study Plan</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Focus Area</th>
                  <th>Activities</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Today</td>
                  <td>Writing</td>
                  <td>Task 1 practice, Grammar review</td>
                  <td>
                    <span className="badge badge-primary">In Progress</span>
                  </td>
                </tr>
                <tr>
                  <td>Tomorrow</td>
                  <td>Speaking</td>
                  <td>Full Speaking test, Vocabulary practice</td>
                  <td>
                    <span className="badge badge-outline">Scheduled</span>
                  </td>
                </tr>
                <tr>
                  <td>Oct 7</td>
                  <td>Listening</td>
                  <td>Sections 3 & 4 practice, Note-taking</td>
                  <td>
                    <span className="badge badge-outline">Scheduled</span>
                  </td>
                </tr>
                <tr>
                  <td>Oct 8</td>
                  <td>Reading</td>
                  <td>Academic passages, Skimming & Scanning</td>
                  <td>
                    <span className="badge badge-outline">Scheduled</span>
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