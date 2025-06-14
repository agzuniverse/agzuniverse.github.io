function showTab(tab) {
  if (tab === 'projects') {
    document.getElementById('projects-section').style.display = 'block';
    document.getElementById('blog-section').style.display = 'none';
    document.getElementById('projects-tab').classList.add('active');
    document.getElementById('blog-tab').classList.remove('active');
  } else {
    document.getElementById('projects-section').style.display = 'none';
    document.getElementById('blog-section').style.display = 'block';
    document.getElementById('blog-tab').classList.add('active');
    document.getElementById('projects-tab').classList.remove('active');
  }
}