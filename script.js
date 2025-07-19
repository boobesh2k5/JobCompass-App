  document.addEventListener('DOMContentLoaded', async () => {
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const searchBtn = document.getElementById('searchBtn');
  const results = document.getElementById('results');
  const errorBox = document.getElementById('errorBox');
  const userInfo = document.getElementById('user-info');

  // ✅ Update title dynamically
  document.title = "JobCompass – Smart Job Finder";

  // ✅ Check login status on page load
  async function checkLoginStatus() {
    try {
      const res = await fetch('/api/user');
      const data = await res.json();
      
      if (data.loggedIn) {
        userInfo.textContent = `✅ Logged in as ${data.user} (JobCompass)`;
        loginBtn.classList.add('d-none');
        logoutBtn.classList.remove('d-none');
      } else {
        userInfo.textContent = '';
        loginBtn.classList.remove('d-none');
        logoutBtn.classList.add('d-none');
      }
    } catch (err) {
      console.error('Error checking login status:', err);
    }
  }

  await checkLoginStatus();

  // ✅ Login with GitHub
  loginBtn.addEventListener('click', () => {
    window.location.href = '/auth/github';
  });

  // ✅ Logout
  logoutBtn.addEventListener('click', () => {
    window.location.href = '/logout';
  });

  // ✅ Job search button click
  searchBtn.addEventListener('click', async () => {
    const query = document.getElementById('jobQuery').value.trim();
    const location = document.getElementById('jobLocation').value.trim();

    if (!query) {
      showError('Please enter a job title');
      return;
    }

    try {
      results.innerHTML = '';
      errorBox.classList.add('d-none');

      // Show loading
      results.innerHTML = `
        <div class="col-12 text-center">
          <div class="spinner-border text-primary"></div>
        </div>
      `;

      const res = await fetch(`/api/jobs?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location || '')}`);
      const data = await res.json();

      if (data.error) throw new Error(data.error);
      if (!data.data || data.data.length === 0) throw new Error("No jobs found");

      // ✅ Render job cards
      results.innerHTML = '';
      data.data.forEach(job => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 mb-4 job-card';
        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${job.job_title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${job.employer_name}</h6>
              <p class="card-text">
                <span class="badge bg-primary">${job.job_employment_type}</span>
                <span class="ms-2">${job.job_city}, ${job.job_country}</span>
              </p>
              <p class="card-text">${job.job_description?.slice(0, 120) || 'No description'}...</p>
              <a href="${job.job_apply_link}" target="_blank" class="btn btn-sm btn-outline-primary">Apply Now</a>
            </div>
          </div>
        `;
        results.appendChild(card);
      });

    } catch (err) {
      showError(err.message);
    }
  });

  // ✅ Display error message
  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove('d-none');
  }
});
